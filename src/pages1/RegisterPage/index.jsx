import React from "react"
import '../index.css'

const RegisterPage = () => {
  return (
    <>
    <section id="main">
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
