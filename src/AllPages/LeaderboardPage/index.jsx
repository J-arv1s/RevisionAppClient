import React from 'react'
import { useState, useEffect } from 'react'

const LeaderboardPage = () => {

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

  return (
    <div className="leaderboard">
    <h2>Leaderboard</h2>
      <table>
        <tr>
          <th>User</th>
          <th>Total Score</th>
        </tr>
        {
        users
        .filter(entry => !entry.isAdmin)
        .map((entry, i) => (
          <tr key={i}>
            <td>{ entry.username }</td>
            <td>{ entry.combinedScore }</td>
          </tr>
        ))
        }
      </table>
    </div>
  )
}

export default LeaderboardPage
