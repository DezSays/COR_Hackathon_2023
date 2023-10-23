import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Card, ListGroup } from 'react-bootstrap'; // Import necessary Bootstrap components
import '../styles/MentList.css';

const MentorsList = () => {
  const [mentors, setMentors] = useState([]);

  const fetchMentorsData = async () => {
    try {
      const response = await axios.get('https://cor-hackathon-2023.vercel.app/mentors');
      setMentors(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchMentorsData(); // Call the fetch function
  }, []);

  return (
    <Container id='hello'>
      <h2>Mentors Registered:</h2>
      {mentors.map((mentor) => (
        <Card key={mentor.id} style={{ marginBottom: '20px' }}>
          <Card.Header>Name: {mentor.name}</Card.Header>
          <Card.Body>
          <ListGroup.Item>Photo: {mentor.photo_url}</ListGroup.Item>
            <Card.Title>Profession: {mentor.profession}</Card.Title>
            <ListGroup variant='flush'>
              <ListGroup.Item>Gender: {mentor.gender}</ListGroup.Item>
              <ListGroup.Item>Management: {mentor.management}</ListGroup.Item>
              <ListGroup.Item>Counselor: {mentor.counselor}</ListGroup.Item>
              <ListGroup.Item>
                LinkedIn: <a href={mentor.linkedin_url} target='_blank' rel='noopener noreferrer'>
                  {mentor.linkedin_url}
                </a>
              </ListGroup.Item>
              
            </ListGroup>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default MentorsList;
