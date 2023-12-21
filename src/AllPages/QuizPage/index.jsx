import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../index.css';
import { SubjectList } from '../../components';

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showScore, setShowScore] = useState(false);

  const shuffleAnswers = (correctAnswer, wrongAnswers) => {
    const allAnswers = [correctAnswer, ...wrongAnswers];
    return allAnswers.sort(() => Math.random() - 0.5);
  };

  const fetchQuizData = async (quizName) => {
    try {
      const response = await fetch(`https://revision-app-2b5p.onrender.com/quizzes/${quizName}`);
      const data = await response.json();
      setQuestions(data.questions);
      setAnswers(shuffleAnswers(data.questions[0].answer, data.questions[0].wrongAnswers));
    } catch (error) {
      console.error('Error fetching quiz data:', error);
    }
  };

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    setShowAnswer(false); 
  };

  const handleNextClick = () => {
    const isCorrectAnswer = selectedAnswer === questions[currentQuestionIndex].answer;
    if (isCorrectAnswer) {
      setScore(score + 1); 
    }
    if(selectedAnswer){
      setShowAnswer(true); 
    }

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        const nextQuestion = questions[currentQuestionIndex + 1];
        setAnswers(shuffleAnswers(nextQuestion.answer, nextQuestion.wrongAnswers));
        setSelectedAnswer('');
        setShowAnswer(false);
      } else {
        setShowScore(true); 
      }
    }, 1000); 
  };

  const handleScore = (plusScore) => {
    const name = localStorage.getItem("username")
    fetch(`https://revision-app-2b5p.onrender.com/users/score/${name}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            score: plusScore
        })
    })
    .then(response => response.json())
    .then(updatedScore => {
        console.log('Score updated', updatedScore);
    })
    .catch(error => console.error('Error updating userscore...', error));
  };

  const currentQuestion = questions[currentQuestionIndex];
  
  return (
    <>
      <section id="main">

      <section id="firstSection">
        <SubjectList onQuizSelected={fetchQuizData}/>
      </section>



      <section id="middle1">
        {currentQuestion ? (
          <>
            <h2>{currentQuestion.quizName}</h2>
            <p>Score: {score}</p>
            <div className="quiz">
              <p>{currentQuestion.question}</p>
              {answers.map((answer, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(answer)}
                    style={{
                      backgroundColor: selectedAnswer === answer && !showAnswer ? '#ddd' :
                        showAnswer
                          ? answer === currentQuestion.answer
                            ? 'lightgreen'
                            : selectedAnswer === answer
                              ? 'red'
                              : ''
                          : '',
                      color: showAnswer || selectedAnswer === answer ? 'black' : 'white',
                    }}
                    disabled={showAnswer}
                  >
                    {answer}
                  </button>
                ))}
                <div className="move">
                  {!showScore && (
                    <button onClick={handleNextClick}>Next</button>
                  )}
                </div>
              </div>
              {showScore && (
                <>
                <p>Your final score is: {score} out of {questions.length}</p>
                <Link id='link1' to="/leaderboard"><button onClick={handleScore(score)}>Leaderboard</button></Link>
                </>
              )}
            </>
          ) : (
            <p>Loading quiz...</p>
          )}
        </section>
      </section>
    </>
  );
};

export default QuizPage;