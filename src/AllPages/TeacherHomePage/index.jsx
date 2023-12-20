import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom';

const TeacherHomePage = () => {
  return (
    <>
        <section id="teacherHome">
            <div className='buttons'>
                <Link id='link1' to="/subjects">Subjects</Link>
                <Link id='link2'to="/quizes">Quizes</Link>
            </div>
            <div>
                <Link id='link3' to="/students">Students</Link>
            </div>
        </section>
    </>
  )
}

export default TeacherHomePage