import React, { createContext, useContext, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import './home.css';
import axios from 'axios';
import { auth, db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';
import { GrView } from "react-icons/gr";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Modal from 'react-bootstrap/Modal';
import { Button } from 'antd';
import {Input, Rating } from '@mui/material';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Navbarcomponent from './Navbarcomponent';
import { Link, useNavigate } from 'react-router-dom';
import { projectmanagement } from '../App';
import Searchbar from './Searchbar';

function Home() {
  const editnav=useNavigate();

  const {product,setproduct,edit,setedit}=useContext(projectmanagement);
  const [view, setview] = useState([]);
  const [show, setShow] = useState(false);
 const [deletemodal, setdeletemodal] = useState(false);
 const [deleteitem, setdeleteitem] = useState([]);
 
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const viewicon = (i) => {
    setview(i);
    setShow(true);
  };

const editicon =(e) =>{
  setedit(e)
editnav("/editform")
};

const deleteicon =(d) =>{
  setdeleteitem(d);
  setdeletemodal(true);
};
const confirmDelete = () => {
  setproduct((prevProducts) =>
    prevProducts.filter((p) => p.id !== deleteitem.id)
  );
  setdeletemodal(false); // Close the delete modal
};
const cancelDelete = () => {
  setdeletemodal(false); // Close the delete modal without deleting
};

  return (
    <div>
      {/* View Modal */}
      <Modal show={show} onHide={handleClose} className='modal'>
        <Modal.Body className='modalbody'>
          <div className='modalimg'>
            {view && view.images && (
              <div>
                <img
                  src={view?.images[0]}
                  alt=''
                  width={"200px"}
                  height={"250px"}
                />
              </div>
            )}
          </div>
          <div className='modalcnt'>
            <h2>{view?.title}</h2>
            <h6>{view?.description}</h6>
            <h3>{view?.price}</h3>
            <Rating
              name="size-medium"
              value={view.rating}
              readOnly
              className='mt-2'
            />
          </div>
        
        <div style={{ marginLeft: "20px" }}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </div>
        </Modal.Body>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal show={deletemodal} onHide={cancelDelete}>
        <Modal.Header style={{backgroundColor:"#e17c73"}} closeButton>
          <Modal.Title style={{backgroundColor:"#e17c73"}}>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body  style={{backgroundColor:"#e17c73"}}>
          Are you sure you want to delete the product:{" "}
          <strong>{deleteitem?.title}</strong>?
        </Modal.Body>
        <Modal.Footer style={{backgroundColor:"#e17c73"}}>
          <Button variant="secondary" onClick={cancelDelete}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>


{/* {navbar and search bar} */}

      <Navbarcomponent/>
      <div className="search-container">
      <Searchbar/>
      </div>

      {/* Product Table */}

      <div className='table'>
     
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {product.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>{item.rating}</td>
                <td>
                  <GrView className='viewicon' onClick={() => viewicon(item)} />
                  <FaRegEdit className='editicon' onClick={()=> editicon(item) }/>
                  <MdDelete className='deleteicon' onClick={() =>deleteicon(item)}/>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Add Item Button */}
      <div style={{ textAlign: "right", marginTop: "20px",textDecoration:"none"}}>
        <Button type="primary"  >
         <Link to= "/addproduct"> Add Product </Link>
        </Button>
      </div>
    </div>
  );
}

export default Home;
