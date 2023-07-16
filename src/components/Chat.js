import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import 'leaflet/dist/leaflet.css';
import { Marker, Popup } from "react-leaflet";


const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.REACT_APP_CHAT_API_KEY,
  })
);

const Chat = () => {
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [locationInput, setLocationInput] = useState("");
  const [error, setError] = useState("");

  const handleButtonClick = () => {
    if (locationInput.trim() === "") {
      setError(
        "Please enter a location or click 'Get Recommendations Near Me'"
      );
      return;
    }

    setIsLoading(true);
    sendRequest(locationInput);
  };

  const sendRequest = (location) => {
    openai
      .createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `Can you recommend around 5 popular places for open water swimming near ${location}. Preface your response with 'Sure, here are some popular open water swimming locations near (nearest town or city)' followed by the characters \n. Please be detailed in your response and don't mention the Latitude or Longitude of the recommendations. could you create it as only a JSON object with the name of the location, the latitude, longitude and description as sperate items, and remove the introduction sentence
          `,
          },
        ],
      })
      .then((res) => {
        setResponse(JSON.parse(res.data.choices[0].message.content));
        console.log(JSON.parse(res.data.choices[0].message.content));
      })
      .catch((error) => {
        console.error("Error:", error.response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
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

<>
{/* <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: '250px', width: '50px' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer> */}

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
        />
        {error && <div className="error-message">{error}</div>}
      </form>
      {isLoading && (
        <div>
          Loading... Your results can take a few seconds to come through while
          our AI Bot thinks about it.
        </div>
      )}
        <Row xs={1} sm={2} md={3} lg={4}>
      {response.locations?.map((location, index) => (
        <Col key={index} className="mb-4">
          <Card className="overflow-hidden">
            <div className="map-container" style={{ height: '250px' }}>
              <MapContainer
                style={{ height: '100%', width: '100%' }}
                center={[location.latitude, location.longitude]}
                zoom={7}
                scrollWheelZoom={false}
              >
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[location.latitude, location.longitude]}>
                  <Popup>{location.name}</Popup>
                </Marker>
              </MapContainer>
            </div>

            <Card.Body>
              <Card.Title>
                <h3>{location.name}</h3>
              </Card.Title>
              <Card.Text>
                <p>{location.description}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
    </>
  );
};

export default Chat;
