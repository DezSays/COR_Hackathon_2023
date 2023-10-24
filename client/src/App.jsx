import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BaseLayout from './components/layout/BaseLayout'
// import './App.css'
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import LoginPage from './components/auth/Login';
import MenteeRegistration from './components/auth/MenteeRegistration';
import MentorRegistration from './components/auth/MentorRegistration';
import Registration from './components/auth/Registration';

function App() {

  return (
    <>
      <Router>
        <BaseLayout>
          <Routes>
            <Route path='/' element={<HomePage /> } />
            <Route path='*' element={<HomePage /> } />
            <Route path='about-us' element={<AboutUs /> } />
            <Route path='login' element={<LoginPage /> } />
            <Route path='mentee-registration' element={<MenteeRegistration /> } />
            <Route path='mentor-registration' element={<MentorRegistration /> } />
            <Route path='registration' element={<Registration /> } />
          </Routes>
        </BaseLayout>
      </Router>
      
      
    </>
  )
}

export default App
