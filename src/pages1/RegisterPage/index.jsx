import React from "react"
import '../index.css'

const RegisterPage = () => {

  return (
    <>
      <section id="middleRegister">
        <div className="registerForm">
          <h2>Register an account</h2>
          
            <div>
            <label htmlFor="">Username: </label>
            <input type="text"/>
           </div> 
           <div>
           <label htmlFor="">Password: </label>
            <input type="text"/>
           </div>
           <input id="buttonSubmit"type="submit" value="Sign up"/>
          </div>
      </section>
    </>
  )
}

export default RegisterPage
