import {Configuration, OpenAIApi} from "openai";
import {useState} from "react";
import {
    Container,
    Row,
    Col,
    Card,
    Form,
    Button,
    Spinner,
} from "react-bootstrap";
import {MapContainer} from "react-leaflet/MapContainer";
import {TileLayer} from "react-leaflet/TileLayer";
import "leaflet/dist/leaflet.css";
import {Marker, Popup} from "react-leaflet";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

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
            setError("Please enter a location or click 'Find Nearby'");
            return;
        }

        setIsLoading(true);
        sendRequest(locationInput);
    };

    const sendRequest = (location) => {
        setError("");
        openai
            .createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        role: "user",
                        content: `Can you recommend 6 popular places for open water swimming near ${location}. Preface your response with 'Sure, here are some popular open water swimming locations near (nearest town or city)' followed by the characters \n. Please be detailed in your response and don't mention the Latitude or Longitude of the recommendations. could you create it as only a JSON object with the name of the location, the latitude, longitude and description as separate items, and remove the introduction sentence
          `,
                    },
                ],
            })
            .then((res) => {
                setResponse(JSON.parse(res.data.choices[0].message.content));
            })
            .catch(() => {
                setError(
                    "Sorry, something went wrong, please try again later'"
                );
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

    return (
        <>
            <div className="chat-div p-5 mx-auto">
                <h4>
                    Discover the Uncharted Waters: Dive in and Find Your Wild
                    Swim!
                </h4>
                <p>
                    With our AI Bot! Discover Serene Lakes, Raging Rivers, and
                    Breathtaking Coastlines Near You.<br/><br/>
                    You can either search using your current location, or look
                    up any town or city around the world.
                </p>
                <div className="d-flex flex-column flex-sm-row align-items-sm-center">
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        id="chat-input" className="mb-3 mb-sm-0">
                        <input
                            type="text"
                            placeholder="Enter a city..."
                            value={locationInput}
                            onChange={handleLocationInputChange}
                            aria-label="City Input"
                            className="form-control"
                        />
                    </form>
                    <div className="button-group d-flex justify-content-sm-start justify-content-center mt-3 mt-sm-0">
                        <Button
                            className="chat-buttons me-2"
                            type="button"
                            onClick={handleButtonClick}
                            aria-label="Search"
                            style={{
                                backgroundColor: "#575ABA",
                                color: "white",
                                border: "none"
                            }}>
                            Search
                        </Button>
                        <Button
                            className="chat-buttons"
                            type="button"
                            onClick={handleLocationButtonClick}
                            aria-label="Find nearby"
                            style={{
                                backgroundColor: "#575ABA",
                                color: "white",
                                border: "none"
                            }}>
                            Find nearby
                        </Button>
                    </div>
                </div>
                {error && <div className="text-danger mt-3">{error}</div>}
                {isLoading && (
                    <div className="d-flex justify-content-center mt-3">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                )}
                <Row xs={1} sm={2} className="mt-3">
                    {response.locations?.map((location, index) => (
                        <Col key={index} className="mb-4">
                            <Card className="overflow-hidden">
                                <div
                                    className="map-container"
                                    style={{height: "250px"}}>
                                    <MapContainer
                                        style={{height: "100%", width: "100%"}}
                                        center={[
                                            location.latitude,
                                            location.longitude,
                                        ]}
                                        zoom={7}
                                        scrollWheelZoom={false}>
                                        <TileLayer
                                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        />
                                        <Marker
                                            position={[
                                                location.latitude,
                                                location.longitude,
                                            ]}>
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
