import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import COR_logo from '../../assets/Asset+1.png'
import "../../styles/menteeRegistration.css"

function MenteeRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    studentType: "",
    internType: "",
    mentorBy: "",
    mentorPrefer: "",
    mentorGender: "",
    photoUrl: "",
    linkedIn: "",
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    setCurrentStep(currentStep + 1);
  };

  const handleBack = (e) => {
    e.preventDefault();
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div id="about-you" className={currentStep === 1 ? "active" : ""}>
            <h1 className="form-title" >About You</h1>
            <Form className="forms" onSubmit={handleNext}>
              <Form.Group controlId="name-box">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="email-box">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="gender-box">
                <Form.Label>What is your gender?</Form.Label>
                <div>
                  <Form.Check
                    type="radio"
                    label="Male"
                    name="gender"
                    value="Male"
                    onChange={handleInputChange}
                  />
                  <Form.Check
                    type="radio"
                    label="Female"
                    name="gender"
                    value="Female"
                    onChange={handleInputChange}
                  />
                  <Form.Check
                    type="radio"
                    label="Transgender"
                    name="gender"
                    value="Transgender"
                    onChange={handleInputChange}
                  />
                  <Form.Check
                    type="radio"
                    label="Prefer Not to Say"
                    name="gender"
                    value="Prefer Not to Say"
                    onChange={handleInputChange}
                  />
                </div>
                
              </Form.Group>
              <Form.Group controlId="studentType">
                <Form.Label>What kind of student are you?</Form.Label>
                <div id="code-type">
                  <Form.Check
                    type="radio"
                    label="Coding"
                    name="studentType"
                    id="Coding"
                    onChange={handleInputChange}
                  />
                  <Form.Check
                    type="radio"
                    label="Cyber"
                    name="studentType"
                    id="Cyber"
                    onChange={handleInputChange}
                  />
                </div>
              </Form.Group>
              <div>
              <Button className="btn-next"  type="submit">Next</Button>
              </div>
            </Form>
          </div>
        );
      case 2:
        return (
          <div id="preferences" className={currentStep === 2 ? "active" : ""}>
            <h1 className="form-title">Your Preferences</h1>
            <Form className="forms" onSubmit={handleNext}>
              <Form.Group controlId="counselorOrLifeCoach">
                <Form.Label>
                  Do you prefer to be mentored by a counselor or a life coach?
                </Form.Label>
                <div className="radio-types" id="intern-type">
                  <Form.Check
                    type="radio"
                    label="Counselor"
                    name="internType"
                    id="Counselor"
                    onChange={handleInputChange}
                  />
                  <Form.Check
                    type="radio"
                    label="Life Coach"
                    name="internType"
                    id="LifeCoach"
                    onChange={handleInputChange}
                  />
                </div>
              </Form.Group>
              <Form.Group controlId="managementOrLeadership">
                <Form.Label>
                  Do you prefer to be mentored by a member of management or
                  leadership?
                </Form.Label>
                <div className="radio-types" id="management-type">
                  <Form.Check
                    type="radio"
                    label="Management"
                    name="mentorBy"
                    id="Management"
                    onChange={handleInputChange}
                  />
                  <Form.Check
                    type="radio"
                    label="Leadership"
                    name="mentorBy"
                    id="Leadership"
                    onChange={handleInputChange}
                  />
                </div>
              </Form.Group>
              <Form.Group controlId="practicingProfessional">
                <Form.Label>
                  Do you prefer to be mentored by a practicing professional (a
                  software engineer or a cyber analyst)?
                </Form.Label>
                <div className="radio-types" id="mentor-prefer">
                  <Form.Check
                    type="radio"
                    label="Yes"
                    name="mentorPrefer"
                    id="Yes"
                    onChange={handleInputChange}
                  />
                  <Form.Check
                    type="radio"
                    label="No"
                    name="mentorPrefer"
                    id="No"
                    onChange={handleInputChange}
                  />
                </div>
              </Form.Group>
              <Form.Group controlId="mentorGender">
                <Form.Label>
                  Is it important for your mentor's gender to match?
                </Form.Label>
                <div className="radio-types" id="mentor-gender">
                  <Form.Check
                    type="radio"
                    label="Yes"
                    name="mentorGender"
                    id="Yes"
                    onChange={handleInputChange}
                  />
                  <Form.Check
                    type="radio"
                    label="No"
                    name="mentorGender"
                    id="No"
                    onChange={handleInputChange}
                  />
                  <Form.Check
                    type="radio"
                    label="N/A"
                    name="mentorGender"
                    id="N/A"
                    onChange={handleInputChange}
                  />
                </div>
              </Form.Group>
              <div className="form-btns-div">
              <Button className="btn-back" type="button" onClick={handleBack}>
                Back
              </Button>
              <Button className="btn-next"  type="submit">Next</Button>
              </div>
            </Form>
          </div>
        );
      case 3:
        return (
          <div id="createp" className={currentStep === 3 ? "active" : ""}>
            <h1>Create Profile</h1>
            <Form className="forms" onSubmit={handleSubmit}>
                <img src={formData.photoUrl} />
              <Form.Group controlId="profilePic">
                <Form.Label>Profile Picture URL</Form.Label>
                <Form.Control
                  type="text"
                  name="photoUrl"
                  value={formData.photoUrl}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="linkedInUrl">
                <Form.Label>LinkedIn URL</Form.Label>
                <Form.Control
                  type="text"
                  name="linkedIn"
                  value={formData.linkedIn}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <div className="form-btns-div">
              <Button className="btn-back"  type="button" onClick={handleBack}>
                Back
              </Button>
              <Button className="btn-submit"  type="submit">Submit</Button>
              </div>
            </Form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Container>
      <Row>
        <Col>

          {/* CONTENT STARTS HERE */}
          <div id="mentee-form">
            {renderFormStep()}
          </div>

        </Col>
      </Row>
    </Container>
  );
}

export default MenteeRegistration;
