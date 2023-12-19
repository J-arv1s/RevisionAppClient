import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import { PageWrapper } from './components/index'
import { LoginPage, StudentPage, SubjectsPage } from './Pages'
import { RegisterPage } from './pages1'
import QuizPage from './pages1/QuizPage';


function App() {

  return (
    <>
      <header id='header'>
        <PageWrapper />
      </header>
      <Routes>
        <Route path="/" element={< LoginPage/>}/>   
        <Route path='/register' element={<RegisterPage />}/>
        <Route path='/student' element={<StudentPage />}/>
        <Route path='/subjects' element={<SubjectsPage />}/>
        <Route path='/quiz' element={<QuizPage />}/>
      </Routes>
    </>
  )
}

export default App
