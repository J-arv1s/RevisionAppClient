import React  from 'react';
import '../index.css'

const QuizPage = () => {
  
  return (
    <>
    <section id="main">
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
      <section id="middle1">
        <h2>quizname</h2>
        <div className="quiz">
          <p>Question 1</p>
          <button>Answer1</button>
          <button>Answer2</button>
          <button>Answer3</button>
          <button>Answer4</button>
        <div className="move">
            <button>Previous</button>
            <button>Next</button>
        </div> 
        </div>
      </section>
    </section>
    </>
  )
}

export default QuizPage