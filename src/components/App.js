
import React, { useState, useRef } from 'react';
/**
 * @task :add validation to email, if email is not valid, if not valid email, dont allow to submit
 * @error_message :  "Email is invalid"  if email is wrong. (must be same message) 
 * 
 * 
 */

function App() {

 /**
  * code here
  */
 const [name,setName] = useState('');
 const [email,setEmail] = useState('');
 const [emailError,setEmailError] = useState(false);

 const handleNameChange = (event) =>{
  setName(event.target.value);
 };

 const handleEmailChange = (event) =>{
  setEmail(event.target.value);
 };

 const handleSubmit = (event) =>{
  event.preventDefault();

  if(emailError){
    console.log("please fix the error in the form");
  }
  else{
    console.log("form submitted successfully");
  }
 };

const validateEmail = () =>{
  const emailRegex = /^[^\s@]+@[^s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const handleBlur = ()=>{
  setEmailError(!validateEmail(email));
};

  return(
    <div className="App">
      <h1>How About Them Apples</h1>
      <form>
        <fieldset>
          <label>
            <p>First Name</p>
            <input id='fname' name="name" value={name} onChange={handleNameChange} ref={fnameRef}/>
            <br></br>
            <p>Email</p>
            <input id='lname' name="name" value={email} onChange={handleEmailChange} onBlur={handleBlur} ref={emailRef}/>
            {error && <h2 style={{color: 'red'}}>{error}</h2>}
            {emailError && <p>Email is invalid</p>}
          </label>
        </fieldset>

        <button id='submit' onclick={handleSubmit} type="submit">Submit</button>
      </form>
      {
        data.fname != undefined && (
          <div>
          <h1>{data.fname}</h1>
          <h2>{data.lname}</h2>
          </div>
        )
      }
    </div>
  )
}


export default App;