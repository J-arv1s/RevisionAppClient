import React from 'react'
import './index.css'

const StudentPage = () => {
    const userName = 'Billy'
  return (
        <>
        <h1>Hi {userName}</h1>
        <h2>Check your Progress</h2>
      
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


