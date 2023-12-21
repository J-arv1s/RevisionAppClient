import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom';
import { SubjectList } from '../../components';

const ProfilePage = () => {
  const username = localStorage.getItem("username");
  return (
    <>
    <section id="firstSection">
        <SubjectList />
      </section>
      <section id='profileDisplay'>
        <h2>Hi there, {username} !</h2>
        <div className='studentDisplay'>
          <p>This is your revision app profile</p>
          <p>This app was created to improve your revision</p>
          <p>Please have a look through all the pages so you can get used to the interface</p>
          <p>Good Luck!!</p>
        </div>
      </section>
    </>
  )
}

export default ProfilePage