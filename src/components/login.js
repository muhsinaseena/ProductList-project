import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './login.css'; 
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth, db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';
import LoadingButton from '@mui/lab/LoadingButton';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  

  const handleSubmit= async(e) => {
    e.preventDefault();
    
    try {
      await signInWithEmailAndPassword(auth,email,password);
      console.log("User logged in Successfully");
      // setLoading(true);
      window.location.href = "/home"
      toast.success("User Registered Successfully!!",{
        position:"top-center"
      });
      
    } catch (error) {
      console.log(error.message);
      toast.success(error.message,{
        position:"bottom-center"
      });
    }
  }
  
  return (
    <div className="login-body">
    <div className="login-container">
      <Form onSubmit={handleSubmit} >
        <h3>Login</h3>
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
          type="Password"
           placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        {/* <LoadingButton
          size="small"
          loading={loading}
          loadingIndicator="Logging in…"
          variant="outlined"
          type="submit"
        >
          Login
        </LoadingButton> */}
        <p className="mt-3">
          New User? <Link to="/register">Register here</Link>
        </p>
      </Form>
     
    </div>
    </div>
    
  )
}

export default Login