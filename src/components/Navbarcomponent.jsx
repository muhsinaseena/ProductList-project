import { Button } from 'antd';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './home.css';
import { IoMdLogOut } from "react-icons/io";
import { Link } from 'react-router-dom';

function Navbarcomponent() {
  return (
    <div className='nav-body'>
    <div className=' custom-navbar'>
        <Navbar expand="lg" className="bg-body-success">
      <Container>
        <Navbar.Brand href="#home" style={{textDecoration:"none",fontWeight:"bolder",color:"black",fontSize:"25px"}}>PRODUCT LIST</Navbar.Brand>
         
         <Nav> 
          <Button style={{marginLeft:"1000px",fontSize:"20px",color:"blue",textDecoration:"none"}}><Link to= "/login"> <IoMdLogOut /> LogOut </Link></Button>
         </Nav>
      </Container>
    </Navbar>
    </div>
    </div>
  )
}

export default Navbarcomponent