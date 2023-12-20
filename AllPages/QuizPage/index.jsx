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

  const shuffleAnswers = (correctAnswer, otherOptions) => {
    const allAnswers = [correctAnswer, ...otherOptions];
    return allAnswers.sort(() => Math.random() - 0.5);
  };

  const fetchQuizData = async () => {
    try {
      const response = await fetch('http://localhost:3000/quizzes/science-quiz');
      const data = await response.json();
      setQuestions(data.questions);
      setAnswers(shuffleAnswers(data.questions[0].answer, ['wrong1', 'wrong2', 'wrong3']));
    } catch (error) {
      console.error('Error fetching quiz data:', error);
    }
  };

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    setShowAnswer(false); // Keep the selected answer highlighted
  };

  const handleNextClick = () => {
    const isCorrectAnswer = selectedAnswer === questions[currentQuestionIndex].answer;
    if (isCorrectAnswer) {
      setScore(score + 1); // Increment score if the answer is correct
    }
    setShowAnswer(true); // Show whether the answer is correct

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setAnswers(shuffleAnswers(questions[currentQuestionIndex + 1].answer, ['wrong1', 'wrong2', 'wrong3']));
        setSelectedAnswer('');
        setShowAnswer(false);
      } else {
        setShowScore(true); // Show the final score
      }
    }, 1000); // Delay before moving on to the next question or showing the score
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
              <p>Score: {score}</p>
              <div className="quiz">
                <p>{currentQuestion.question}</p>
                {answers.map((answer, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(answer)}
                    style={{
                      backgroundColor: selectedAnswer === answer && !showAnswer ? '#ddd' : // Darken selected answer
                        showAnswer
                          ? answer === currentQuestion.answer
                            ? 'lightgreen' // Correct answer
                            : selectedAnswer === answer
                              ? 'red' // Wrong answer clicked
                              : '' // Not clicked
                          : '',
                      color: showAnswer || selectedAnswer === answer ? 'white' : 'black',
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




