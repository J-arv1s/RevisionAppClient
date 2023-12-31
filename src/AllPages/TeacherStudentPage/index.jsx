import React from 'react'
import '../index.css'
import { useState, useEffect } from 'react'
const TeacherStudentPage = () => {
  const [ users, setUsers ] = useState([])

  const fetchQuizData = async () => {
    try {
      const response = await fetch('https://revision-app-2b5p.onrender.com/users');
      const data = await response.json();
      sortData(data)
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const sortData = (data) => {
    const sortedData = [...data].sort((a,b) => b.combinedScore - a.combinedScore)
    setUsers(sortedData)
  }

  useEffect(() => {
    fetchQuizData()
  }, [])

  const handleDelete = (username) => {
    fetch(`https://revision-app-2b5p.onrender.com/users/${username}`, { method: 'DELETE' })
    .then(() => {
        console.log(`${username} deleted`);
        setUsers(users.filter(user => user.username !== username));
    })
    .catch(error => console.error('Error deleting User:', error));
};

  return (
    <>
    <div className="students">
      <h2>Classroom Students</h2>
      <table>
        <tr>
          <th>Username</th>
        </tr>
        {
        users
        .filter(entry => !entry.isAdmin)
        .map((entry, i) => (
          <tr key={i}>
            <td>{ entry.username }</td>
            <button id='removeBtn' onClick={() => handleDelete(entry.username)}>Remove</button>
          </tr>
        ))
        }
      </table>
    </div>
    </>
  )
}

export default TeacherStudentPage