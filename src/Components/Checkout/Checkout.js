import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Checkout = () => {

    const handleCheckout = (event) => {
        event.preventDefault();
    }

    return (
        <div>
          <Form onSubmit = {handleCheckout} className='w-50 mx-auto my-5 border p-4 rounded'>
                <h3 className='text-primary'>CheckOut</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                <Form.Control type="text" placeholder="Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="number" placeholder="Amount" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="text" placeholder="Course Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="text" placeholder="Your Address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept our privacy policy" />
                    </Form.Group>
                <Button variant="primary" type="submit">
                    CheckOut
                </Button>
            </Form>
        </div>
    );
};

export default Checkout;