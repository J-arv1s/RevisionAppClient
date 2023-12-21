import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import { PageWrapper } from './components/index'
import { LoginPage, StudentPage, SubjectsPage, RegisterPage, QuizPage, ProfilePage, LeaderboardPage, TeacherHomePage, TeacherStudentPage, TeacherQuizzesPage } from './AllPages'
import ProtectedRoute from './ProtectedRoute';

function App() {

  return (
    <>
      <header id='header'>
        <PageWrapper />
      </header>
      <Routes>
      <Route path="/" element={< LoginPage/>}/>   
      <Route path='/register' element={<RegisterPage />}/>
      <Route path='/student' element={<ProtectedRoute>
        <StudentPage />
        </ProtectedRoute>}/>
      <Route path='/subjects' element={<ProtectedRoute>
      <SubjectsPage />
      </ProtectedRoute>}/>
      <Route path='/quiz' element={<ProtectedRoute>
        <QuizPage />
      </ProtectedRoute>} />
      <Route path='/profile' element={<ProtectedRoute>
        <ProfilePage />
        </ProtectedRoute>}/>
        <Route path='/leaderboard' element={<LeaderboardPage />}/>
        <Route path='/teacherHome' element={
        <ProtectedRoute>
          <TeacherHomePage />
          </ProtectedRoute>}/>
        <Route path='/quizzes' element={<ProtectedRoute>
          <TeacherQuizzesPage />
        </ProtectedRoute>}/>
        <Route path='/students' element={<ProtectedRoute>
          <TeacherStudentPage />
        </ProtectedRoute>}/>
      </Routes>
    </>
  )
}

export default App
