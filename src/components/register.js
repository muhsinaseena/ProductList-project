import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { auth,db } from './firebase';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { Await, Link, useNavigate } from 'react-router-dom';
import './register.css';
import {setDoc,doc} from "firebase/firestore";
import { async } from '@firebase/util';
import { toast } from 'react-toastify';


function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const navigate = useNavigate(); // Use useNavigate for navigation

  const handleRegister = async (e) => {
    e.preventDefault(); 
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, 'Users', user.uid), {
        email: user.email,
        firstName: fname,
        lastName: lname,
      });
      toast.success('Registered successfully!', { position: 'top-center' });
      navigate('/login'); // Redirect to login page
    } catch (error) {
      toast.error(`Registration failed: ${error.message}`, { position: 'bottom-center' });
    }
  };
  return (
    <div className='register-body'>
    <div className="register-container">
         <Form onSubmit={handleRegister}>
            <h3>Sign Up</h3>
      <Form.Group className="mb-3" controlId="formBasicname">
        <Form.Label>First name</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="First name"
        onChange={(e) => setFname(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicname">
        <Form.Label>Last name</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Last name"
        onChange={(e) => setLname(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicemail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        type="email" 
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicpassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        type="password" 
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
       Sign Up
      </Button>
      <p className="mt-3" style={{textAlign:"center"}}>
          Already registered? <Link to="/login">Login</Link>
        </p>
      
    </Form>
    </div>
    </div>
  )
}

export default Register