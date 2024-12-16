import React, { useContext, useState } from 'react'
import { projectmanagement } from '../App';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./home.css"

import { useNavigate } from 'react-router-dom';



function Editform() {
    const {edit,setedit,product,setproduct}=useContext(projectmanagement);
    console.log(edit);
    const navigate=useNavigate();

   
    const handleChange = (e) => {
      setedit({ ...edit, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();

    setproduct((prevproducts)=>
    prevproducts.map((p)=>(p.id===edit.id? {...p,...edit} :p)));
     navigate("/home")
    };
  return (
    <div className='edit-body'>
    <div  style={{width:"50%",marginLeft:"350px",paddingTop:"40px"}} >
        <Form onSubmit={handleSubmit} style={{ textAlign: 'center', lineHeight: "50px", fontSize: "20px", border: "1px solid black", padding: "70px", backgroundColor: "#9a82de" ,color:"white",borderRadius:"20px",width:"100%"}}>
        <h1 style={{color:"white",marginBottom:"30px"}}>Edit Form</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail" style={{display:'flex'}}>
        <Form.Label>Title</Form.Label>
        <Form.Control style={{marginLeft:"80px"}}
        name="title"
        defaultValue={edit?.title}
        onChange={handleChange}

         type="text"
         placeholder="Enter title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail" style={{display:'flex'}}>
        <Form.Label >Description</Form.Label>
        <Form.Control style={{marginLeft:"20px"}} 
        name="description"
        defaultValue={edit?.description}
        onChange={handleChange}
        as="textarea"
         placeholder="Enter description" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail" style={{display:'flex'}}>
        <Form.Label>Price</Form.Label>
        <Form.Control style={{marginLeft:"80px"}}
        name="price"
        defaultValue={edit?.price}
        onChange={handleChange}
         type="number" 
        placeholder="Enter price" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail" style={{display:'flex'}}>
        <Form.Label>Rating</Form.Label>
        <Form.Control style={{marginLeft:"65px"}}
        name="rating" 
        defaultValue={edit?.rating}
        onChange={handleChange}
        type="number" 
        placeholder="Enter rating" />
      </Form.Group>   
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    </div>
    </div>
  )
}


export default Editform