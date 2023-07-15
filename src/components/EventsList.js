import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

export default function EventsList() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');

  const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
  const geocodingApiUrl = 'https://geocode.maps.co/reverse';

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("in the handle submit" + search)
    setError('')
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
      setError('Sorry, something went wrong.')
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
              },
            });
            console.log(response.data.address.village) 
            console.log(response.data.display_name);
              const locationName = response.data.address.village;
              setLocation(locationName);
              setSearch(locationName);
              console.log("serach" + search)
              handleSubmit({ preventDefault: () => {} });

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
    <Container className="my-5">
      <h1 className="mt-4 mb-4 text-center">Event List</h1>
      <Form onSubmit={handleSubmit} className="mb-4">
        <Form.Group className="mb-3">
          <Form.Label>Search by Location:</Form.Label>
          <div className="d-flex">
            <Form.Control
              type="text"
              placeholder="Enter location"
              value={search}
              onChange={handleChange}
              className="me-2"
            />
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button variant="secondary" onClick={handleNearMeClick} className="ms-2">
              Near Me
            </Button>
          </div>
          {error && <div className="text-danger mt-2">{error}</div>}
        </Form.Group>
      </Form>
      <Row>
        {events.map((event) => (
          <Col key={event.position} lg={4} md={6} sm={12} className="mb-4">
            <Card className="custom-card">
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
