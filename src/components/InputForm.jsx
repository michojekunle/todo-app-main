import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const InputForm = ({ updateTasks }) => {
    return (
    <Form className="form-container">
        <Form.Group className="mb-3 input" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Button variant="primary" className="submit" type="submit">
            Submit
        </Button>
      </Form>
  )
}

export default InputForm
