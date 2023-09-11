import React, { useState } from 'react'
import { checkValidData, checkUserData } from '../utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';// Importing auth from firbase.js file
import '../CSS/Landing.css';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const [isSign, setSign] = useState(true);
  const [errMessage, setErrMessage] = useState('');
  const navigate = useNavigate();

  const formSign = () => {
    setSign(!isSign)
  }

  // using "useRef";
  const email = useRef(null);
  const password = useRef(null);
  const phoneNumber = useRef(null);
  const fullname = useRef(null);

  // Login validation
  const validation = () => {
    // //---> step1: validation of data
    const message = checkValidData(email.current.value, password.current.value);
    setErrMessage(message);

    //--->step2: check for error
    if (message) return;// if there is an error message return;

    //--->Step3: Checking into the Database and validate it
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        navigate('/Home')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrMessage(errorMessage);
        console.log(errorCode)
        navigate('/')
      });
  }

  // NewUser data validation
  const userDataValid = () => {

    //---> step1: validation of data
    const message = checkUserData(email.current.value, phoneNumber.current.value, fullname.current.value, password.current.value);
    setErrMessage(message);

    //--->step2: check for error
    if (message) return;// if there is an error message return;

    // --->Step3: store the value in the database
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)// SignUp logic
      .then((userCredential) => {//if the user value is stored successfully
        // Signed Up
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {//if there occurs an error while storing the value
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrMessage(errorMessage);
        console.log(errorCode);
      });
  }




  return (
    <>
    <div className='container-fluid p-2' id='logo'><h1 className='text-danger'style={{background:'red',WebkitBackgroundClip:'Text',WebkitTextFillColor:'transparent' , fontSize:'2.5rem',fontWeight:'500'}}>HappyHours</h1></div>
    {/* <div className="navbar-brand text-light"style={{background:'red',WebkitBackgroundClip:'Text',WebkitTextFillColor:'transparent' , fontSize:'2.5rem',fontWeight:'500'}}>NETFLIX</div> */}
    <div className='container-fluid' id='Main' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div className='col-md-6'>
        {/* e.preventDefault => it will prevent the form from rendering or submiting */}
        <form className='col-md-6 mx-auto text-light bg-black bg-opacity-75 p-md-5' onSubmit={(e) => e.preventDefault()}>
          <h2 className='mb-md-4'><b>{isSign ? "SIGN-IN" : "Sign-UP"}</b></h2>
          <p className='text-danger fs-4'>{errMessage}</p>
          <div className="mb-3 p-md-2">
            <input type="email" className="form-control bg-secondary bg-opacity-80 text-light" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" ref={email} />
          </div>
          {!isSign && <div className="mb-3 p-md-2">
            <input type="Phone Number" className="form-control bg-secondary bg-opacity-80 text-light" id="exampleInputPassword1" placeholder='Phone Number' ref={phoneNumber} />
          </div>}
          {!isSign && <div className="mb-3 p-md-2">
            <input type="name" className="form-control bg-secondary bg-opacity-80 text-light" id="exampleInputPassword1" placeholder='Full Name' ref={fullname} />
          </div>}
          <div className="mb-3 p-md-2">
            <input type="password" className="form-control bg-secondary bg-opacity-80 text-light" id="exampleInputPassword1" placeholder='Password' ref={password} />
          </div>
          {isSign && <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input bg-secondary bg-opacity-75 text-light" id="exampleCheck1" />
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
          </div>}
          {isSign ? <button className="btn btn-danger" onClick={() => validation()}>SIGN-IN</button> : <button className='btn btn-danger' onClick={() => userDataValid()}>SIGN-UP</button>}

          <div className="my-md-3  p-md-2">
            <p className='text-light'>{isSign ? "New to Netflix ?  " : "Already a Registered ?  "} <span className='text-light' role='button' onClick={() => formSign()}>{isSign ? "  Sign up Now" : " Login Now "}</span></p>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Landing
