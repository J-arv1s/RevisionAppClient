import React from 'react';

const TeacherSubject = ({ subjectName }) => {
  return (
    <div>
      <button>{subjectName}</button>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default TeacherSubject;