import React from 'react';

const MenteeRegistration = () => {
  return (
    <>
      <div id="about-you">
        <h1 id="title">About You</h1>
        <div className="profile-data">
          <div>
            <div className="option-box" id="name-box">
              <p>Name</p>
              <input type="text" className="txtoption" />
            </div>
            <div className="option-box" id="email-box">
              <p>Email</p>
              <input type="email" className="txtoption" />
            </div>
            <div className="option-box">
              <p>What is your gender?</p>
              <input type="radio" name="gender" value="Yes" id="gender-yes" />
              <label htmlFor="gender-yes">Yes</label>

              <input type="radio" name="gender" value="No" id="gender-no" />
              <label htmlFor="gender-no">No</label>

              <input
                type="radio"
                name="gender"
                value="Other"
                id="gender-other"
              />
              <label htmlFor="gender-other">Other</label>

              <input
                type="text"
                name="other_gender"
                id="other-gender-input"
                placeholder="Specify your gender"
                style={{ display: 'none' }}
              />
            </div>
            <div className="option-box">
              <p>What kind of student are you</p>
              <div id="code-type">
                <input type="radio" name="studentType" id="Coding" />
                <label htmlFor="Coding">Coding</label>
                <input type="radio" name="studentType" id="Cyber" />
                <label htmlFor="Cyber">Cyber</label>
              </div>
            </div>
          </div>
          <div className="nav-buttons">
            <button id="left1">&larr;</button>
            <div className="page-indicator">
              <span className="current-page">&bull;</span> &bull; &bull;{' '}
            </div>
            <button id="right1">&rarr;</button>
          </div>
        </div>
      </div>

      <div id="preferences">
        <h1>Your Preferences</h1>
        <div className="profile-data">
          <div>
            <div className="option-box">
              <p>Do you prefer to be mentored by a counselor or a life coach?</p>
              <div id="intern-type">
                <input type="radio" name="internType" id="Counselor" />
                <label htmlFor="Counselor">Counselor</label>
                <input type="radio" name="internType" id="Life Coach" />
                <label htmlFor="Life Coach">Life Coach</label>
              </div>
            </div>
            <div className="option-box">
              <p>Do you prefer to be mentored by a member of management or leadership?</p>
              <input type="radio" name="mentorBy" id="Management" />
              <label htmlFor="Management">Management</label>
              <input type="radio" name="mentorBy" id="Leadership" />
              <label htmlFor="Leadership">Leadership</label>
            </div>
            <div className="option-box">
              <p>Question: Do you prefer to be mentored by a practicing professional (a software engineer or a cyber analyst)?</p>
              <input type="radio" name="mentorPrefer" id="yes" />
              <label htmlFor="yes">Yes</label>
              <input type="radio" name="mentorPrefer" id="no" />
              <label htmlFor="no">No</label>
            </div>

            <div className="option-box">
              <p>Is it important for your mentor's gender to match?</p>
              <input type="radio" name="mentorGender" id="Y" />
              <label htmlFor="Y">Yes</label>
              <input type="radio" name="mentorGender" id="N" />
              <label htmlFor="N">No</label>
              <input type="radio" name="mentorGender" id="O" />
              <label htmlFor="O">N/A</label>
            </div>
          </div>
          <div className="nav-buttons">
            <button id="left2">&larr;</button>
            <div className="page-indicator">
              &bull; <span className="current-page">&bull;</span> &bull;{' '}
            </div>
            <button id="right2">&rarr;</button>
          </div>
        </div>
      </div>

      <div id="createp">
        <h1>Create Profile</h1>
        <div className="profile-data">
          <div className="main-content">
            <div id="options">
              <div id="picbox">
                <img id="profile-pic" src="https://picsum.photos/200/200" alt="" />
                <input type="text" name="" id="photo-url" placeholder="photo url" />
                <h2>Your Name</h2>
              </div>
              <div className="option-box" id="name-box">
                <p>LinkedIn URL</p>
                <input type="text" className="linkedIn" />
              </div>
            </div>

            <button id="submit-button">SUBMIT</button>
          </div>

          <div className="nav-buttons">
            <button id="left3">&larr;</button>
            <div className="page-indicator">
              &bull; &bull; <span className="current-page">&bull;</span>
            </div>
            <button id="right3">&rarr;</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenteeRegistration;
