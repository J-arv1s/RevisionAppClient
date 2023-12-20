import React from 'react'
import './index.css'

const StudentPage = () => {
    const userName = 'Billy'
  return (
        <>
        <h1>Hi {userName}</h1>
        <h2>Check your Progress</h2>
      <section id="firstSection">
      <div className="subjects">  
        <h1>Subjects</h1>
        <div className='buttons'>
          <p id="mathsBtn" >Maths</p>
          <div className="buttons-content">
            <a href="#">Quiz 1</a>
            <a href="#">Quiz 2</a>
            <a href="#">Quiz 3</a>
          </div>
        </div>
        <div className='buttons1'>
          <p id="sciencesBtn">Sciences</p>
          <div className="buttons1-content">
            <a href="#">Quiz 1</a>
            <a href="#">Quiz 2</a>
            <a href="#">Quiz 3</a>
          </div>
        </div>
      </div>
    </section>
    <section id="progressSection">
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Status</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Maths: Quiz 1</td>
              <td>Not Complete</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Sciences: Quiz 3</td>
              <td>Completed</td>
              <td>90%</td>
            </tr>
           
          </tbody>
        </table>
      </section>
        </>
    
  )
}

export default StudentPage;
