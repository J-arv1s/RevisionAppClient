import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  return (
    <>
    <main>
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
      <div>
      <h2>Hi there, [studentname]</h2>
      <p>Check your results below</p>
    </div>
    <table>
      <tr>
        <th></th>
        <th>Status</th>
        <th>Result</th>
      </tr>
      <tr>
        <td>[Maths Quiz1]</td>
        <td>Completed</td>
        <td>90%</td>
      </tr>
      <tr>
        <td>[Maths Quiz2]</td>
        <td>Not Complete</td>
        <td>-</td>
      </tr>
    </table>
    </main>
    </>
  )
}

export default ProfilePage