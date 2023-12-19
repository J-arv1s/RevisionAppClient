import React from 'react';
import {TeacherSubject} from '../index';

const TeacherSubjects = () => {
  const subjects = ['Subject 1', 'Subject 2', 'Subject 3']; 

  return (
    <>
      {subjects.map((subject, index) => (
        <TeacherSubject key={index} subjectName={subject} />
      ))}
    </>
  );
};

export default TeacherSubjects;


