import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

export default function EventsList() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');

  const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
  const geocodingApiUrl = 'https://geocode.maps.co/reverse';
  const geocodingApiKey = process.env.REACT_APP_GEOCODING_API_KEY;

  const handleSubmit = async (event) => {
    event.preventDefault();


    try {
      const response = await axios.get(corsAnywhereUrl + 'https://serpapi.com/search', {
        params: {
          api_key: process.env.REACT_APP_SERPAPI_API_KEY,
          engine: 'google_events',
          q: 'events wild water swimming',
          location: search,
        },
      });
      console.log(response.data)

      setEvents(response.data?.events_results || []);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  console.log(events)

  const handleNearMeClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          try {
            console.log("in the try")
            const response = await axios.get(geocodingApiUrl, {
              params: {
                lat: latitude,
                lon: longitude,
                limit: 1,
                appid: geocodingApiKey,
              },
            });
            console.log(response.data.display_name) 

            if (response.data?.length > 0) {
                console.log(response.data.display_name);
              const locationName = response.data.display_name;
              setLocation(locationName);
              setSearch(locationName);
              console.log("serach" + search)
            }
          } catch (error) {
            console.error(error);
          }
        },
        (error) => {
          console.error('Error retrieving location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by your browser.');
    }

  };

  console.log(location + search)
  return (
    <Container>
      <h1 className="mt-4 mb-4">Event List</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Search by Location:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter location"
            value={search}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button variant="secondary" onClick={handleNearMeClick}>
          Near Me
        </Button>
      </Form>
      <Row>
        {events.map((event) => (
          <Col key={event.position} lg={4} md={6} sm={12}>
            <Card className="mb-4 custom-card">
              <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                <Card.Text>{event.snippet}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
