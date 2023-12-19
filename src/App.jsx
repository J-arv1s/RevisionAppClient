import React from 'react';
import { Routes, Route } from 'react-router-dom';
import * as Pages from './pages'



const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={< Pages.RegisterPage/>}/>
      </Routes>  
    </>
  )
}

export default App
