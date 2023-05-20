import { signOut } from 'firebase/auth';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import { useAuthState } from 'react-firebase-hooks/auth';
import {Link, NavLink} from 'react-router-dom';
import auth from '../../Firebase.init';
 

const Header = () => { 
  const [user] = useAuthState(auth);
  // console.log(user);

  //Sing out function
  const handleSingOut=()=>{
  signOut(auth);
  } 

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
             <NavLink className= "nav-link" to="/">Home</NavLink>
             <NavLink className= "nav-link" to="/about">about</NavLink> 
             <NavLink className= "nav-link" to="/service">service</NavLink> 
            
              
             {user ? (
                <Button className= "btn" onClick={handleSingOut}>sing out</Button> 
                ) : (

                  <NavLink className= "nav-link btn btn-primary" to="/singin">sing in</NavLink> 
                )
              }

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;