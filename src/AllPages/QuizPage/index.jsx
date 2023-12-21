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
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState(null)
  const [subjectNames, setSubjectNames] = useState([])


  const shuffleAnswers = (correctAnswer, wrongAnswers) => {
    const allAnswers = [correctAnswer, ...wrongAnswers];
    return allAnswers.sort(() => Math.random() - 0.5);
  };

  // fetch all subjects
  // fetch sub/name
  // quiz names got
  
  useEffect(() => {
    fetch('https://revision-app-2b5p.onrender.com/subjects')
      .then(response => response.json())
      .then(data => {
        // setSubjects(data);
        setSubjectNames(data)
        console.log(subjectNames)
        
      })
      .catch(error => console.error('Error fetching subjects:', error));
    // fillSubjects()
  }, []);

  const fillSubjects = async (subjectName) => {
    fetch(`https://revision-app-2b5p.onrender.com/subjects/${subjectName}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(error => console.error('Error fecting subjectQuizzes', error))
  }


  console.log()
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
  const handleSubjectSelection = (quizName) => {
    setSelectedSubject(quizName);
    fetchQuizData(quizName);
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
            {subjects.map((subject, index) => (
              <div key={index} className='buttons'>
                <p>{subject.subjectName}</p>
                <div className="buttons-content">
                  {subject.quizzesId.map((quiz) => (
                    <button key={quiz._id} onClick={() => handleSubjectSelection(quiz._id)}>
                      {quiz._id}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="middle1">
          {currentQuestion ? (
            <>
              <h2>{currentQuestion}</h2>
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





