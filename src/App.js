import React, { useState } from "react";
import "./App.css";
import ReactDOM from 'react-dom';
import {  Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar"
import About from "./components/About";
import Shop from "./components/Shop";
import Menu from "./components/Menu";
import Clients from "./components/Clients";
import Prices from "./components/Prices";
import Modal from "./components/Modal";
import Contacts from "./components/Contact";
import Fullprices from "./components/Fullprices";
import Footer from "./components/Footer/Footer";
import Main from "./Main";
import LoginUi from "./components/LoginUi";

function App() {
       return (
        <>
            <Navbar/>
            <Routes>
    
                <Route exept path="/contact" element={<Contacts/>}/>
                <Route exept path="/buy" element={<Fullprices/>}/>
              <Route exept path="/login" element={<LoginUi/>}/>
                <Route exept path="/" element={<Main/>}/>
               
            </Routes>
           <Footer/>
        </>
    );
  }

export default App;
