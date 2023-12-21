import React from 'react'
import { useState, useEffect } from 'react'
import { TeacherQuizzes } from '../../components'
import '../index.css'

const TeacherQuizzesPage = () => {

    const [ newQuizName, setNewQuizName ] = useState('')
    const [ assignedSubject, setAssignedSubject ] = useState('')
    const [ quizzes, setQuizzes ] = useState([])

    const handleNewQuizName = (e) => {
        setNewQuizName(e.target.value);
    };
    const handleAssignedSubject = (e) => {
        setAssignedSubject(e.target.value);
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
            body: JSON.stringify({ 
                quizName: newQuizName,
                subject: assignedSubject
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Quiz added:', data);
            fetchQuizzes(); 
        })
        .catch(error => console.error('Error adding quiz:', error));

        setNewQuizName('')
        setAssignedSubject('')
    };

    useEffect(() => {
        fetchQuizzes()
    }, [quizzes])

    return (
    <>
        <section id="teacher1">
            <div className='first'>
                <h2 id='h2Quiz'>Quizzes</h2>
                <form>
                <label>New Quizname : 
                    <input type='text'
                        name='quizname'
                        value={newQuizName}
                        onChange={handleNewQuizName}/>
                </label>
                <label>Assign subject : 
                    <input type='text'
                        name='subject'
                        value={assignedSubject}
                        onChange={handleAssignedSubject}/>
                </label>
                <button id="addQuiz" onClick={handleNewQuiz}>+</button>
                </form>
            </div>
            <section id='quizzes'>
                <TeacherQuizzes quizzes={quizzes} setQuizzes={setQuizzes} />
            </section>
        </section>
    </>
    )
}

export default TeacherQuizzesPage