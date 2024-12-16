import { Rating } from '@mui/material';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { projectmanagement } from '../App';
import "./home.css"

function Addproduct() {
  const { product, setproduct } = useContext(projectmanagement);

  const nav = useNavigate();
  // const addbutton=()=>{
  //   nav("/home")
  // }

  const [newProduct, setNewProduct] = useState({
    
    title: "",
    description: "",
    price: "",
    rating: "",
  });

  const addnewproduct = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value })
  }
  // const handleRatingChange = (event, newValue) => {
  //   setNewProduct({ ...newProduct, rating: newValue });
  // };
  const addnewdata = (e) => {
    e.preventDefault();
    setproduct([...product, newProduct]);
    nav("/home");
    console.log(newProduct);

  }

  return (
    <div className='addprdt-body'>
    <div style={{width:"50%",marginLeft:"350px",paddingTop:"40px"}}>

      <Form onSubmit={addnewdata} style={{ textAlign: 'center', lineHeight: "50px", fontSize: "20px", border: "1px solid black", padding: "70px", backgroundColor: "pink" ,borderRadius:"20px"}}>
        <h1 style={{color:"red",padding:"20px"}}>Add New Product</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail" style={{display:'flex'}}>
          <Form.Label>Title</Form.Label>
          <Form.Control style={{ marginLeft: "80px" }} onChange={addnewproduct}
            name='title'

            type="text"
            placeholder="Enter title" />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail" style={{display:'flex'}}>
          <Form.Label>Description</Form.Label>
          <Form.Control style={{ marginLeft: "20px" }} onChange={addnewproduct}
            name='description'
           as="textarea"
            placeholder="Enter description" />

        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail" style={{display:'flex'}}>
          <Form.Label>Price</Form.Label>
          <Form.Control style={{ marginLeft: "80px" }} onChange={addnewproduct}
            name='price'
            type="number"
            placeholder="Enter price" />

        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail" style={{display:'flex'}}>
          <Form.Label>Rating</Form.Label>
          <Form.Control style={{ marginLeft: "65px" }} onChange={addnewproduct}
            name='price'
            type="number"
            placeholder="Enter rating" />

        </Form.Group>

        <Button variant="primary" type="submit" >
          Submit
        </Button>
      </Form>
    </div>
    </div>
  )
}

export default Addproduct