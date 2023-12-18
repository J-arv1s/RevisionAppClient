import React from 'react'
import "./index.css"

const RegisterPage = () => {
  return (
    <>
    <section id="main">
    <section id="firstSection">
      <div className="subjects">  
        <h1>Subjects</h1>
        <div className='buttons'>
          <p id="mathsBtn">Maths</p>
          <p id="sciencesBtn">Sciences</p>
        </div>
      </div>
     </section>
      <section id="navSection">
        <div className='nav'>  
          <a href="">Login</a>
          <a href="">Register</a>
        </div>
      </section>
      <section id="middle">
        <div>
          <h2>Register an account</h2>
        <form>
          <label htmlFor="">Email: </label>
          <input type="text"/>
          <label htmlFor="">Username: </label>
          <input type="text"/>
          <label htmlFor="">Password: </label>
          <input type="text"/>
          <input type="submit"value="Sign up"/>
        </form>
        
        </div>
      </section>
    </section>
    </>
  )
}

export default RegisterPage