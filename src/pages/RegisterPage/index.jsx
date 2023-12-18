import React  from 'react'
import "./index.css"
/** <script src="./assets/js/admin.js" defer></script>/ */

const RegisterPage = () => {
  
  return (

    <>
    <section id="main">
      <section id="firstSection">
        <div className="subjects">  
          <h1>Subjects</h1>
          <div className='buttons'>
            <p id="mathsBtn" >Maths</p>
            <div className="buttons-content">
              <a href="#">Quiz 1</a>
              <a href="#">Quiz 2</a>
              <a href="#">Quiz 3</a>
            </div>
          </div>
          <div className='buttons1'>
            <p id="sciencesBtn">Sciences</p>
            <div className="buttons1-content">
              <a href="#">Quiz 1</a>
              <a href="#">Quiz 2</a>
              <a href="#">Quiz 3</a>
            </div>
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
            <input id="buttonSubmit"type="submit" value="Sign up"/>
          </form>
        </div>
      </section>
    </section>
    </>
  )
}

export default RegisterPage