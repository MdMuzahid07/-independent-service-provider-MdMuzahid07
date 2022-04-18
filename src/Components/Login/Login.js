import React from 'react';
import { Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';

const auth = getAuth(app);

const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const navigate = useNavigate();

      if(user) {
          navigate('/home')
      }

    const handleLogin = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password);

        console.log(email, password)
    }


    return (
        <div className='container'>
            <Form onSubmit = {handleLogin} className='mx-auto my-5 border p-4 rounded'>
                <h3 className='text-primary'>Log In</h3>

                <input className='w-100 rounded mb-2' type="email" name = 'email' placeholder="Enter email" />


                <input className='w-100 rounded mb-2' type="password" name = 'password' placeholder="Password" />

                <input type="submit" value="Login" />
                <p>
                    New User? <Link className='text-decoration-none' to = '/signup'>Please Sign Up</Link>
                </p>
            </Form>
        </div>
    );
};

export default Login;