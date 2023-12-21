import React from 'react'
import '../index.css'

const TeacherQuizesPage = () => {
  return (
    <>
        <section id="teacher1">
            <div className='first'>
                <h2 id='h2Quiz'>Quizes</h2>
                <div>
                    <button id="addQuiz">+ Add a quiz</button>
                </div>   
            </div> 
            <section id='quizes'>
                <div className='buttons'>
                    <p>Quiz 1</p>
                    <button id='edit'>Edit</button>
                    <button id='delete'>Delete</button>
                </div>
                <div className='buttons'>
                    <p>Quiz 2</p>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
                <div className='buttons'>
                    <p>Quiz 3</p>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </section> 
        </section>
    </>
  )
}

export default TeacherQuizesPage