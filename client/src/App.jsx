import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './components/auth/Registration';
import BaseLayout from './components/layout/BaseLayout'
// import './App.css'
import HomePage from './components/HomePage';
import MentorsList from './components/MentorsList';
import MentorRegistration from './components/auth/MentorRegistration';
import MenteesList from './components/MenteesList'
import MenteeRegistration from './components/auth/MenteeRegistration';




function App() {

  return (
    <>
      <Router>
        <BaseLayout>
          <Routes>
            <Route path='/' element={<HomePage /> } />
            <Route path='*' element={<HomePage /> } />
            <Route path='/mentors' element ={<MentorsList/>}/>
            <Route path= '/mentorreg' element ={<MentorRegistration/>}/>
            <Route path='/mentees' element ={<MenteesList/>}/>
            <Route path= '/menteereg' element ={<MenteeRegistration/>}/>
          </Routes>
        </BaseLayout>
      </Router>
      
      
    </>
  )
}

export default App
