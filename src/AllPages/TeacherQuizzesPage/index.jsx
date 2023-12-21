import React from 'react'
import { useState, useEffect } from 'react'
import { TeacherQuizzes } from '../../components'
import '../index.css'

const TeacherQuizzesPage = () => {

    const [ newQuizName, setNewQuizName ] = useState('')
    const [ quizzes, setQuizzes ] = useState([])

    const handleInputChange = (e) => {
        setNewQuizName(e.target.value);
    };

    const fetchQuizzes = () => {
        fetch('https://revision-app-2b5p.onrender.com/quizzes')
          .then(response => response.json())
          .then(data => setQuizzes(data))
        .catch(error => console.error('Error fetching quizzes:', error));
    };

    const handleNewQuiz = () => {
        fetch('https://revision-app-2b5p.onrender.com/quizzes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ quizName: newQuizName })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Quiz added:', data);
            fetchQuizzes(); 
        })
        .catch(error => console.error('Error adding quiz:', error));

        setNewQuizName('')
    };

    useEffect(() => {
        fetchQuizzes()
    }, [quizzes])

    return (
    <>
        <section id="teacher1">
            <div className='first'>
                <h2 id='h2Quiz'>Quizzes</h2>
                <div>
                <label>New Quiz : 
                    <input type='text'
                           name='question'
                           value={newQuizName}
                           onChange={handleInputChange}required/>
                </label>
                    <button id="addQuiz" onClick={handleNewQuiz}>+</button>
                </div>
            </div>
            <section id='quizzes'>
                <TeacherQuizzes quizzes={quizzes} setQuizzes={setQuizzes} />
            </section>
        </section>
    </>
    )
}

export default TeacherQuizzesPage