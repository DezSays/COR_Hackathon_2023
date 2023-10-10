import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './components/auth/Registration';
import BaseLayout from './components/layout/BaseLayout'
// import './App.css'
import HomePage from './components/HomePage';
import MenteeRegistration from './components/auth/MenteeRegistration';


function App() {

  return (
    <>
      <Router>
        <BaseLayout>
          <Routes>
            <Route path='/' element={<HomePage /> } />
            <Route path='*' element={<HomePage /> } />
          </Routes>
          
        </BaseLayout>
      </Router>
      
    </>
  )
}

export default App
