import React, { useState } from 'react';
import './index.css'

const QuestionForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    question: '',
    answer: '',
    wrongAnswers: '',
  });

  const [formError, setFormError] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.question || !formData.answer || !formData.wrongAnswers) {
      setFormError('All fields are required.');
      return false;
    }
    setFormError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    onSubmit(formData);
    setFormData({
      question: '',
      answer: '',
      wrongAnswers: '',
    })
  };

  return (
    <form id='form1' onSubmit={handleSubmit}>
      <label>
        Question:
        <input
          type='text'
          name='question'
          value={formData.question}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Answer:
        <input
          type='text'
          name='answer'
          value={formData.answer}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Wrong Answers, please seperate with ,:
        <input
          type='text'
          name='wrongAnswers'
          value={formData.wrongAnswers}
          onChange={handleInputChange}
          required
        />
      </label>
      <p style={{ color: 'red' }}>{formError}</p>
      <button id='submitQuestionBtn' type='submit'>Add Question</button>
    </form>
  );
};

export default QuestionForm;