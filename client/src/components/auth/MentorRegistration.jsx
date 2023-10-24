import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import '../../styles/MentorRegistration.css' 

const MentorRegistration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profession, setProfession] = useState('');
  const [mentorType, setMentorType] = useState('');
  const [genderPreference, setGenderPreference] = useState('');
  const [managementOrLeadership, setManagementOrLeadership] = useState('');
  const [counselorOrLifeCoach, setCounselorOrLifeCoach] = useState('');
  const [sameGenderPreference, setSameGenderPreference] = useState('');
  const [blurb, setBlurb] = useState('');
  const [photo, setPhoto] = useState(null); 
  const [linkedin, setLinkedin] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('profession', profession);
    formData.append('mentorType', mentorType);
    formData.append('genderPreference', genderPreference);
    formData.append('managementOrLeadership', managementOrLeadership);
    formData.append('counselorOrLifeCoach', counselorOrLifeCoach);
    formData.append('sameGenderPreference', sameGenderPreference);
    formData.append('blurb', blurb);
    formData.append('linkedin', linkedin);

    if (photo) {
      formData.append('photo', photo);
    }

    try {
      const response = await fetch('https://cor-hackathon-2023.vercel.app/mentors', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Handle success, e.g., show a success message or redirect the user
        console.log('Form submitted successfully');
      } else {
        // Handle errors, e.g., show an error message
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('An error occurred while submitting the form:', error);
    }

    setName('');
    setEmail('');
    setProfession('');
    setMentorType('');
    setGenderPreference('');
    setManagementOrLeadership('');
    setCounselorOrLifeCoach('');
    setSameGenderPreference('');
    setBlurb('');
    setPhoto(null);
    setLinkedin('');

  };

  return (
      <div >
        <h1>City of Refugee Mentor Registration Page</h1>
    <div className='form-container'>

      <Form method='post' className='form' onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email Address:</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Do you consider yourself to be a practicing professional (a software engineer or a cyber analyst)?</Form.Label>
          <Form.Check
            type="radio"
            label="Cyber Analyst"
            name="profession"
            value="Cyber Analyst"
            onChange={(e) => setProfession(e.target.value)}
          />
          <Form.Check
            type="radio"
            label="Software Engineer"
            name="profession"
            value="Software Engineer"
            onChange={(e) => setProfession(e.target.value)}
          />
          <Form.Check
            type="radio"
            label="Neither"
            name="profession"
            value="Neither"
            onChange={(e) => setProfession(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>What type of Mentor do you want to be?</Form.Label>
          <Form.Check
            type="radio"
            label="Life Coach"
            name="mentorType"
            value="Life Coach"
            onChange={(e) => setMentorType(e.target.value)}
          />
          <Form.Check
            type="radio"
            label="Counselor"
            name="mentorType"
            value="Counselor"
            onChange={(e) => setMentorType(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Do you wish to mentor a male or female student?</Form.Label>
          <Form.Check
            type="radio"
            label="Male"
            name="genderPreference"
            value="Male"
            onChange={(e) => setGenderPreference(e.target.value)}
          />
          <Form.Check
            type="radio"
            label="Female"
            name="genderPreference"
            value="Female"
            onChange={(e) => setGenderPreference(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Do you consider yourself to be a member of management or leadership?</Form.Label>
          <Form.Check
            type="radio"
            label="Management"
            name="managementOrLeadership"
            value="Management"
            onChange={(e) => setManagementOrLeadership(e.target.value)}
          />
          <Form.Check
            type="radio"
            label="Leadership"
            name="managementOrLeadership"
            value="Leadership"
            onChange={(e) => setManagementOrLeadership(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Do you consider yourself to be a counselor or life coach?</Form.Label>
          <Form.Check
            type="radio"
            label="Counselor"
            name="counselorOrLifeCoach"
            value="Counselor"
            onChange={(e) => setCounselorOrLifeCoach(e.target.value)}
          />
          <Form.Check
            type="radio"
            label="Lifecoach"
            name="counselorOrLifeCoach"
            value="Lifecoach"
            onChange={(e) => setCounselorOrLifeCoach(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Is mentoring someone of the same gender important to you?</Form.Label>
          <Form.Check
            type="radio"
            label="Yes"
            name="sameGenderPreference"
            value="Yes"
            onChange={(e) => setSameGenderPreference(e.target.value)}
          />
          <Form.Check
            type="radio"
            label="No"
            name="sameGenderPreference"
            value="No"
            onChange={(e) => setSameGenderPreference(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="photo">
          <Form.Label>Upload Professional Photo (optional):</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files[0])}
          />
        </Form.Group>

        <Form.Group controlId="linkedin">
          <Form.Label>LinkedIn URL (optional):</Form.Label>
          <Form.Control
            type="text"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            placeholder="Enter your LinkedIn URL"
          />
        </Form.Group>

        {/* Submit Button */}
        <button  type="submit">Submit</button>
      </Form>
    </div>
    </div>
  );
};

export default MentorRegistration;
