import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const auth = getAuth(app);

const Login = () => {

    const emailRef = useRef();

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

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
    }


    const resetPassword = async() => {
        const email = emailRef.current.value;
        alert(email);
        if(email) {
            await sendPasswordResetEmail(email);
            toast("Send Email");
        }
        else {
            toast("Please Enter Your Email Address");
        }
    }


    return (
        <div className='container'>
            <ToastContainer/>
            <Form onSubmit = {handleLogin} className='mx-auto my-5 border p-4 rounded'>
                <h3 className='text-primary'>Log In</h3>

                <input className='w-100 rounded mb-2' ref={emailRef} type="email" name = 'email' placeholder="Enter email" />


                <input className='w-100 rounded mb-2' type="password" name = 'password' placeholder="Password" />

                <input type="submit" value="Login" />
                <p>
                    New User? <Link className='text-decoration-none' to = '/signup'>Please Sign Up</Link>
                </p>
                <p>
                    Forget password? <button onClick={resetPassword}>Reset Password</button>
                </p>
            </Form>
        </div>
    );
};

export default Login;