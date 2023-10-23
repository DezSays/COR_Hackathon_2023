import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/MentList.css'
const MenteesList = () => {
  const [mentees, setMentees] = useState([]);

  const fetchMenteesData = async () => {
    try {
      const response = await axios.get('https://cor-hackathon-2023.vercel.app/mentees');
      setMentees(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchMenteesData(); // Call the fetch function
  }, []);

  return (
    <div id='hello'>
      <h2>Mentees Registered:</h2>
      <ul>
        {mentees.map((mentee) => (
          <li key={mentee.user_id}>
            <li>Name: {mentee.name}</li>
            <p>Student Type: {mentee.student_type}</p>
            <p>Preferred Profession: {mentee.preferred_profession}</p>
            <p>Preferred Managment: {mentee.preferred_management}</p>
            <p>Preferred Counselor: {mentee.preferred_counselor}</p>
            <p>Gender: {mentee.gender}</p>
            <p>Same Gender?: {mentee.same_gender}</p>
            <p>LinkedIn URL: {mentee.linkedin_url}</p>
            <p>Photo: {mentee.photo_url}</p>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenteesList;