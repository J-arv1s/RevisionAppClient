import React from 'react';
import "./index.css";

const TeacherSubject = ({ subject, handleDelete }) => {
  return (
    <div id='teach-info'>
      <h3 id='sub-name'>{subject.subjectName}</h3>
      <button id='edit'>Edit</button>
      <button id='delete' onClick={() => handleDelete(subject.subjectName)}>Delete</button>
    </div>
  );
};

export default TeacherSubject;

