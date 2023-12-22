import React from 'react';
import "./index.css";

const TeacherSubject = ({ subject, handleDelete }) => {
  return (
    <>
    <section id='teach-info'>
      <h3 id='sub-name'>{subject.subjectName}</h3>
    
        <button id='delete' onClick={() => handleDelete(subject.subjectName)}>Delete</button>
   
    </section>
    </>
  );
};

export default TeacherSubject;

