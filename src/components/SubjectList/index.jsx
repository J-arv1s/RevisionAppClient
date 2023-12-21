import React from 'react'
import { useState, useEffect } from 'react'
import './index.css'

const SubjectList = ({ onQuizSelected }) => {
//////////////////////////////
  const [subjects, setSubjects] = useState([]);

  const fetchSubjects = () => {
    fetch('https://revision-app-2b5p.onrender.com/subjects')
      .then(response => response.json())
      .then(data => setSubjects(data))
      .catch(error => console.error('Error fetching subjects:', error));
  };

  useEffect(() => {
    fetchSubjects()
  }, [])

  const [singleSubject, setSingleSubject] = useState(null)

  const fetchRelatedQuizes = (subjectname) => {
    fetch(`https://revision-app-2b5p.onrender.com/subjects/${subjectname}`)
      .then(response => response.json())
      .then(data => setSingleSubject(data))
      .catch(error => console.error('Error fetching single subject', error))
  }
  return (
    <div className="subjects">  
          <h1>Subjects</h1>
          <div className='buttons'>
            { subjects.map((subject) => (
                <button id='subjectsBtn' key={subject._id} onClick={() => fetchRelatedQuizes(subject.subjectName)}> {subject.subjectName} </button>
                ))}
          </div>
          {singleSubject && (
            <>
            <p>{singleSubject.subjectName} Quizzes:</p>
            { singleSubject.quizzesId.map((quiz) => (
              <button id='quizzesBtn' key={quiz._id} onClick={() => onQuizSelected(quiz.quizName)}>{quiz.quizName}</button>
            ))}
            </>
          )}
    </div>
  )
}

export default SubjectList