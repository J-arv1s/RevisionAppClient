import React from 'react';
import { useState, useEffect } from 'react';
import QuestionForm from '../QuestionForm';
import './index.css'
const TeacherQuizzes = ({ quizzes, setQuizzes }) => {

    const [questionArr, setQuestionArr] = useState([])
    const [selectedQuiz, setSelectedQuiz] = useState('')
    const [formVisible, setFormVisible] = useState(false)
    const [listVisible, setListVisible] = useState(false)

    const handleDelete = (quizName) => {
        fetch(`https://revision-app-2b5p.onrender.com/quizzes/${quizName}`, { method: 'DELETE' })
        .then(() => {
            console.log(`${quizName} deleted`);
            setQuizzes(quizzes.filter(quiz => quiz.quizName !== quizName));
        })
        .catch(error => console.error('Error deleting quiz:', error));
    };

    const handleView = ({ quiz }) => {
        setSelectedQuiz(quiz.quizName)
        setQuestionArr(quiz.questions)
        if(!listVisible){
            setListVisible(true)
            setFormVisible(false)
        }
    }

    const handleEdit = ({ quiz }) => {
        setSelectedQuiz(quiz.quizName)
        if(!formVisible){
            setFormVisible(true)
            setListVisible(false)
        }
    }

    const clear = () => {
        setFormVisible(false)
        setListVisible(false)
        setSelectedQuiz('')
    }

    const handleAddQuestion = (formData) => {
        const question = formData.question
        const answer = formData.answer
        const wrongAnswers = formData.wrongAnswers.split(',').map((answer) => answer.trim())
        fetch(`https://revision-app-2b5p.onrender.com/quizzes/add/${selectedQuiz}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                question: question,
                answer: answer,
                wrongAnswers: wrongAnswers
            })
          })
            .then(response => response.json())
            .then(data => {
              console.log(`Question: ${data} successfullly added`);
            })
            .catch(error => console.error('Error adding question:', error));
    }

    const handleQuestionDelete = (id) => {
        fetch(`https://revision-app-2b5p.onrender.com/quizzes/remove/${selectedQuiz}/${id}`, { method: 'DELETE' })
        .then(() => {
            console.log('question deleted');
            setQuestionArr(questionArr.filter(question => question._id !== id));
        })
        .catch(error => console.error('Error deleting question:', error));
    };

    return (
        <>
        <section id='quizessTeacher'>
            <div className='sectionQuiz'>
        {quizzes.map((quiz, i) => (
            <div key={i} id='teach-info1'>
                <h3 id='quiz-name'>{quiz.quizName}</h3>
                <button id='view' onClick={() => handleView({ quiz })}>View</button>
                <button id='edit' onClick={() => handleEdit({ quiz })}>Edit</button>
                <button id='delete' onClick={() => handleDelete(quiz.quizName)}>Delete</button>
            </div>
        ))}
        </div>
        <section id='lastSection'>
        <h3>{selectedQuiz} Quiz Questions <button id='clear' onClick={() => clear()}>clear</button></h3>
        <div className='questions'>
        {listVisible && (
        <ul>
            {questionArr.map((q, i) => (
                <li key={i}>{q.question} <button id='clear2' onClick={() => handleQuestionDelete(q._id)}>X</button></li>
            ))}
        </ul>
        )}
        {formVisible && (
            <QuestionForm onSubmit={handleAddQuestion}/>
        )}
        </div>
        </section>
        </section>
        </>
    );
};

export default TeacherQuizzes;