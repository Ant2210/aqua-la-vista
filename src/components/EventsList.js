import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function EventsList() {
    const [events, setEvents] = useState([]);
    const [search, setSearch] = useState();
    const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
  
    useEffect(() => {
      const fetchEvents = async () => {
        try {
      const response = await axios.get(corsAnywhereUrl +  'https://serpapi.com/search', {
        headers: {
          'Access-Control-Allow-Origin': '*', 
          'Access-Control-Allow-Methods': 'GET',
          'Access-Control-Allow-Headers': 'Content-Type', 
        },
            params: {
              api_key: "6787ea85eebe04cb4cf8f93efc55921b63dff60e78127c963a42e93443b345d7",
              engine: 'google',
              q: 'events wild water swimming',
              location:  "Seattle-Tacoma, WA, Washington, United States"},
          });    
  
          setEvents(response.data?.organic_results || []);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchEvents();
    }, []);



  return (
    <Container>
      <h1 className="mt-4 mb-4">Event List</h1>
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
