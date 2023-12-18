import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { RegisterPage } from './pages'


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={< RegisterPage/>}/>
    </Routes>
  </>
  )
}

export default App
