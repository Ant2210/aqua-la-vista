import data from "./data/.data.json";
import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";

const getData = (info) => data.map((item) => item[info]);
const key = getData("API_KEY");
const userMessage = String(getData("message"));

const openai = new OpenAIApi(
  new Configuration({
    apiKey: key,
  })
);

const Chat = () => {
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [locationInput, setLocationInput] = useState("");

  const handleButtonClick = () => {
    if (locationInput.trim() === "") {
      alert("Please enter a location or click 'Get Recommendations Near Me'.");
      return;
    }

    setIsLoading(true);
    sendRequest(locationInput);
  };

  const sendRequest = (location) => {
    const message = { role: "user", content: userMessage.replace("[location]", location) };

    openai
      .createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [message],
      })
      .then((res) => {
        setResponse(res.data.choices[0].message.content.replace(/"/g, ""));
      })
      .catch((error) => {
        console.error("Error:", error.response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const formatResponse = () => {
    return response.split("\n").map((line, index) => (
      <p key={index}>{line}</p>
    ));
  };

  const handleLocationButtonClick = () => {
    if (isLoading) return;

    setIsLoading(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
        sendRequest(location);
      },
      (error) => {
        console.error("Error:", error);
        setIsLoading(false);
      }
    );
  };

  const handleLocationInputChange = (event) => {
    setLocationInput(event.target.value);
  };

  const handleLocationInputKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleButtonClick();
    }
  };

  return (
    <div className="chat-div">
      <button className="chat-buttons" onClick={handleLocationButtonClick}>
        Get Recommendations Near Me
      </button>
      <button className="chat-buttons" onClick={handleButtonClick}>
        Get Recommendations Near...
      </button>
      <form>
        <input
          type="text"
          placeholder="Enter your town or city here..."
          value={locationInput}
          onChange={handleLocationInputChange}
          onKeyPress={handleLocationInputKeyPress}
        />
      </form>
      {isLoading && (
        <div>
          Loading... Your results can take a few seconds to come through while our AI Bot thinks about it.
        </div>
      )}
      {!isLoading && response && (
        <div>
          <div className="chat-div-2">{formatResponse()}</div>
        </div>
      )}
    </div>
  );
};

export default Chat;
