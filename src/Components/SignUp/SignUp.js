import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import google from '../../images/logo/google-logo.png';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import { getAuth } from 'firebase/auth';

const auth = getAuth(app);


const SignUp = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;

    if(googleError) {
        errorElement = <div>
                    <p className='text-danger'>Error : {googleError.message}</p>
        </div>
        
    }

    if(googleUser) {
        navigate('/home')
    }


    // email sing up

    const [
        createUserWithEmailAndPassword,
        emailUser,
        emailLoading,
        emailError,
      ] = useCreateUserWithEmailAndPassword(auth);
      
      if(emailUser) {
          navigate('/home');
      }


    const handleSignUp = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;


        createUserWithEmailAndPassword(email, password)

    }


    return (
        <div className='container'>
            <Form onSubmit = {handleSignUp} className='mx-auto my-5 border p-4 rounded'>
                <h3 className='text-primary'>Sign Up</h3>

                <input className='w-100 mb-2' type="text" name = 'name' placeholder="Name" />


                <input className='w-100 mb-2' type="email" name = 'email' placeholder="Email" />


                <input className='w-100 mb-2'  type="password" name = 'password' placeholder="Password" />

                <Form.Check type="checkbox" label="Check me out" />

                <input className='bg-primary text-white rounded w-25 border-0' type="submit" value="Sign Up" />
                <p>
                    Already Sign Up? <Link className = "text-decoration-none" to = '/login'>Please Log In</Link>
                </p>
                <hr />
                {errorElement}
                <button onClick = {() => signInWithGoogle()} className='border fw-bolder rounded-pill'>
                    <img src={google} alt="" />
                     Sign In With Google
                </button>
            </Form>
        </div>
    );
};

export default SignUp;