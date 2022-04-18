import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import google from '../../images/logo/google-logo.png';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../../firebase.init';

const auth = getAuth(app);


const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');
    // const [user, setUser] = useState('');


    const googleAuthProvider = new GoogleAuthProvider();


    const handleNameInput = (event) => {
        setName(event.target.value);
    };

    const handleEmailInput = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordInput = (event) => {
        setPassword(event.target.value);
    };

    const handleSignInWithGoogle = () => {
        signInWithPopup(auth, googleAuthProvider)
        .then((result) => {
            const user = result.user;
            setUser(user);
        })
        .catch((error) => {
            console.error(error);
        })
    }

    if(user) {
        
    }



    const handleSignUpOnSubmit = (event) => {
        event.preventDefault();
    }


    return (
        <div className='container'>
            <Form onSubmit = {handleSignUpOnSubmit} className='w-50 mx-auto my-5 border p-4 rounded'>
                <h3 className='text-primary'>Sign Up</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                <Form.Control onChange = {handleNameInput} type="text" placeholder="Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control onChange = {handleEmailInput} type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control onChange = {handlePasswordInput} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
                <p>
                    Already Sign Up? <Link className = "text-decoration-none" to = '/login'>Please Log In</Link>
                </p>
                <button onClick = {handleSignInWithGoogle} className='border fw-bolder rounded-pill'>
                    <img src={google} alt="" />
                     Sign In With Google
                </button>
            </Form>
        </div>
    );
};

export default SignUp;