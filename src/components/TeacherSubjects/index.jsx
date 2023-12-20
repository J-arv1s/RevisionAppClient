import React from 'react';
import TeacherSubject from '../TeacherSubject'; 

const TeacherSubjects = ({ subjects, setSubjects }) => {
  const handleDelete = (subjectName) => {
    fetch(`http://localhost:3000/subjects/${subjectName}`, { method: 'DELETE' })
      .then(() => {
        console.log(`${subjectName} deleted`);
        setSubjects(subjects.filter(subject => subject.subjectName !== subjectName));
      })
      .catch(error => console.error('Error deleting subject:', error));
  };

  return (
    <>
      {subjects.map((subject) => (
        <TeacherSubject 
          key={subject._id} 
          subject={subject} 
          handleDelete={handleDelete} 
        />
      ))}
    </>
  );
};

export default TeacherSubjects;


