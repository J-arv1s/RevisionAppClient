import React, { useState } from 'react';
import { TeacherSubjects } from '../../components';
import "./index.css";

const SubjectsPage = () => {
  const [newSubjectName, setNewSubjectName] = useState('');
  const [subjects, setSubjects] = useState([]);

  const fetchSubjects = () => {
    fetch('http://localhost:3000/subjects')
      .then(response => response.json())
      .then(data => setSubjects(data))
      .catch(error => console.error('Error fetching subjects:', error));
  };

  const handleAddSubject = () => {
    fetch('http://localhost:3000/subjects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ subjectName: newSubjectName })
    })
      .then(response => response.json())
      .then(data => {
        console.log('Subject added:', data);
        fetchSubjects(); 
      })
      .catch(error => console.error('Error adding subject:', error));
  };
  React.useEffect(() => {
    fetchSubjects();
  }, []);

  return (
    <>
      <h1 id='heading'>Subjects Page</h1>
      <div>
        <input 
          type="text" 
          value={newSubjectName} 
          onChange={(e) => setNewSubjectName(e.target.value)} 
          placeholder="Enter new subject name" 
        />
        <button id='add' onClick={handleAddSubject}>Add subject</button>
      </div>
      <TeacherSubjects subjects={subjects} setSubjects={setSubjects} />
    </>
  );
};

export default SubjectsPage;


