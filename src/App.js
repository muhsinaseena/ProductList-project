import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Router, Routes }from "react-router-dom";
import Login from './components/login';
import SignUp from './components/register';
import Home from './components/home';
import { Button } from 'antd';
import "react-toastify/dist/ReactToastify.css";

import {ToastContainer} from "react-toastify";
import { auth } from './components/firebase';
import Addproduct from './components/Addproduct';
import axios from 'axios';
import Editform from './components/Editform';
import 'bootstrap/dist/css/bootstrap.min.css';




const projectmanagement = createContext();
function App() {

  const [product, setproduct] = useState([]);
  const [edit, setedit] = useState([])
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => setproduct(response.data.products));
  }, []);


  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

 
  
  return (
    <projectmanagement.Provider value={{product,setproduct,edit,setedit}}>
    <BrowserRouter>
 
  <div className='App'>
    <div className='auth-wrapper'>
      <div className='auth-inner'>
        <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<SignUp/>}/>
        <Route path='/home' element={ <Home />} />
        <Route path='/addproduct' element={ <Addproduct />} />
        <Route path='/editform' element={ <Editform />} />
      
        </Routes>
      
        <ToastContainer/>

      </div>
    </div>
  </div>
 
   </BrowserRouter>
   </projectmanagement.Provider>
   
  )
}

export default App;
export {projectmanagement};



