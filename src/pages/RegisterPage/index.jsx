import React, {useState} from 'react'
import "./index.css"
/** <script src="./assets/js/admin.js" defer></script>/ */


const RegisterPage = () => {
  
  function displayQuizes() {
    document.getElementById("buttons-content").style.display = "block";
  }
 
  return (

    <>
    <section id="main">
      <section id="firstSection">
        <div className="subjects">  
          <h1>Subjects</h1>
          <div className='buttons'>
            <p id="mathsBtn" >Maths</p>
            <div class="buttons-content">
              <a href="#">Quiz 1</a>
              <a href="#">Quiz 2</a>
              <a href="#">Quiz 3</a>
            </div>
          </div>
          <div className='buttons1'>
            <p id="sciencesBtn">Sciences</p>
            <div class="buttons1-content">
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
          <input type="submit"value="Sign up"/>
        </form>
        
        </div>
      </section>
    </section>
    </>
  )
}

export default RegisterPage