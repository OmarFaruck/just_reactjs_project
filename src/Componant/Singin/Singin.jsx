import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSignInWithEmailAndPassword  } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../Firebase.init';
import FaceBookSingUp from '../FaceBookSingUp/FaceBookSingUp';
import GitHubSingUp from '../GitHubSingUp/GitHubSingUp';
import GoogleSingUp from '../GoogleSingUp/GoogleSingUp';
 import '../Singin/Singin.css'


const Singin = () => {
    const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const messegeDiv = document.getElementById('messege-div');
   
   const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword (auth);

  if (error) {
    messegeDiv.innerHTML =error;
  
  }
  
  if (loading) {
    messegeDiv.innerHTML =<p>Loading...</p>;
     
  }
 
  if (user) {
    messegeDiv.innerHTML="User Singin successfully"; 
  }

    return (
        <div className='container mt-4'> 
                 
                  <h1>Sing In here</h1>
                <Form.Group className="mb-3 my-4" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/> 
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group> 

                <div id='messege-div'></div>

                <p>New user?
                <NavLink className= "nav-link reglink" to="/registration">registration.</NavLink> 
                </p>

                <Button variant="primary" className='w-100' onClick={() => signInWithEmailAndPassword(email, password)}>
                    Submit
                </Button> 
                    <span className='orstyle'>or</span>
                    <GoogleSingUp/>
                    <FaceBookSingUp/>
                    <GitHubSingUp/>
        </div>
    );
};

export default Singin;