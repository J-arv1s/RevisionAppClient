import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

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

  const fetchQuizData = async () => {
    try {
      const response = await fetch('https://revision-app-2b5p.onrender.com/quizzes/science-quiz');
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
    setShowAnswer(true); 

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

  useEffect(() => {
    fetchQuizData();
  }, []);

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <>
      <section id="main">
      <section id="firstSection">
        <div className="subjects">  
          <h1>Subjects</h1>
          <div className='buttons'>
            <p id="mathsBtn" >Maths</p>
            <div className="buttons-content">
            <Link to="/quiz">Quiz 1</Link>
              <a href="#">Quiz 2</a>
              <a href="#">Quiz 3</a>
            </div>
          </div>
          <div className='buttons1'>
            <p id="sciencesBtn">Sciences</p>
            <div className="buttons1-content">
              <Link to="/quiz">Quiz 1</Link>
              <a href="#">Quiz 2</a>
              <a href="#">Quiz 3</a>
            </div>
          </div>
        </div>

      </section>
        <section id="middle1">
          {currentQuestion ? (
            <>
              <h2>{currentQuestion.quizName}</h2>
              <p id="score">Score: {score}</p>
              <div className="quiz">
                <p>{currentQuestion.question}</p>
                {answers.map((answer, index) => (
                  <button className='quizbutton'
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
                <p>Your final score is: {score} out of {questions.length}</p>
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





