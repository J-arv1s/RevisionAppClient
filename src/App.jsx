import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import { PageWrapper } from './components/index'
import { LoginPage, StudentPage, SubjectsPage } from './Pages'


function App() {

  return (
    <>
      <header id='header'>
        <PageWrapper />
      </header>
      <Routes>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/student' element={<StudentPage />}/>
      <Route path='/subjects' element={<SubjectsPage />}/>
      </Routes>
    </>
  )
}

export default App
