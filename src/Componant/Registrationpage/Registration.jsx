import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../Firebase.init';




const Registration = () => {
    const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const messegeDiv = document.getElementById('messege-div');
   
   const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification :true});

  if (error) {
    messegeDiv.innerHTML =error;
  
  }
  
  if (loading) {
    messegeDiv.innerHTML =<p>Loading...</p>;
     
  }
 
  if (user) {
    messegeDiv.innerHTML="Registered User"; 
  }

    return (
        <div className='container mt-4'> 
             <h1>Registration here</h1>

                <Form.Group className="mb-3 my-4" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/> 
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group> 

                <div id='messege-div'></div>

                <p>already have an account?
                <NavLink className= "nav-link reglink"  to="/Singin">sing in.</NavLink> 
                </p>

                <Button variant="primary" onClick={() => createUserWithEmailAndPassword(email, password)}>
                    Submit
                </Button> 

        </div>
    );
};

export default Registration;