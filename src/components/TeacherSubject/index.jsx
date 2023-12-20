import React from 'react';
import "./index.css"

const TeacherSubject = ({ subjectName }) => {
  return (
    <div id='teach-info'>
      <h3 id='sub-name'>{subjectName}</h3>
      <button id='edit'>Edit</button>
      <button id='delete'>Delete</button>
    </div>
  );
};

export default TeacherSubject;