import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/MentList.css'
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
    <div id='hello'>
      <h2>Mentors Registered:</h2>
      <ul>
        {mentors.map((mentor) => (
          <li key={mentor.id}>
            Name: {mentor.name}, Profession: {mentor.profession}, Gender: {mentor.gender}, Management: {mentor.management}, Counselor: {mentor.counselor}, LinkedIn: {mentor.linkedin_url}, Photo: {mentor.photo_url}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MentorsList;
