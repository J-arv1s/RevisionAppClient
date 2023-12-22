import React from 'react';
import TeacherSubject from '../TeacherSubject'; 
import './index.css'

const TeacherSubjects = ({ subjects, setSubjects }) => {
  const handleDelete = (subjectName) => {
    fetch(`https://revision-app-2b5p.onrender.com/subjects/${subjectName}`, { method: 'DELETE' })
      .then(() => {
        console.log(`${subjectName} deleted`);
        setSubjects(subjects.filter(subject => subject.subjectName !== subjectName));
      })
      .catch(error => console.error('Error deleting subject:', error));
  };

  return (
    <>
      <div className='subjectTarget'>
        {subjects.map((subject) => (
          <TeacherSubject 
            key={subject._id} 
            subject={subject} 
            handleDelete={handleDelete} 
        />
        ))}
      </div>
    </>
  );
};

export default TeacherSubjects;


