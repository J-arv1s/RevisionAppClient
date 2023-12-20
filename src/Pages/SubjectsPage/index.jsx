import React from 'react';
import {TeacherSubjects} from '../../components';
import "./index.css"

const SubjectsPage = () => {
  return (
    <>
      <h1 id='heading'>Subjects Page</h1>
      <button id='add'>Add subject</button>
      <TeacherSubjects />
    </>
  );
};

export default SubjectsPage;