import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {



    const handleLogInOnSubmit = (event) => {
        event.preventDefault();
    }


    return (
        <div className='container'>
            <Form onSubmit = {handleLogInOnSubmit} className='w-50 mx-auto my-5 border p-4 rounded'>
                <h3 className='text-primary'>Log In</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button  className='mb-2' variant="primary" type="submit">
                                        Login
                </Button>
                <p>
                    New User? <Link className='text-decoration-none' to = '/signup'>Please Sign Up</Link>
                </p>
            </Form>
        </div>
    );
};

export default Login;