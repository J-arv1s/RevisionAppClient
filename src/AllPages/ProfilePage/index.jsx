import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  const username = localStorage.getItem("username");
  return (
    <>
    <section id="firstSection">
        <div className="subjects">  
          <h1>Subjects</h1>
          <div className='buttons'>
            <p id="mathsBtn" >Maths</p>
            <div className="buttons-content">
            <Link to="/quiz">Quiz 1</Link>
              <a href="#">Quiz 2</a>
              <a href="#">Quiz 3</a>
            </div>
          </div>
          <div className='buttons1'>
            <p id="sciencesBtn">Sciences</p>
            <div className="buttons1-content">
              <Link to="/quiz">Quiz 1</Link>
              <a href="#">Quiz 2</a>
              <a href="#">Quiz 3</a>
            </div>
          </div>
        </div>
      </section>
      <section id='profileDisplay'>
        <h2>Hi there, {username} !</h2>
        <div className='studentDisplay'>
          <p>This is your revision app profile</p>
          <p>This app was created to improve your revision</p>
          <p>Please have a look through all the pages so you can get used to the interface</p>
          <p>Good Luck!!</p>
        </div>
      </section>
    </>
  )
}

export default ProfilePage