import React from "react";
import ReactDOM from 'react-dom';
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Shop from "./components/Shop";
import Menu from "./components/Menu";
import Clients from "./components/Clients";
import Prices from "./components/Prices";

import Contacts from "./components/Contact";



function Main() {
  return (
    <div>
      <Header />
     <About />
      <Shop />
      <Menu />
      <Clients />
      <Prices />
      
    </div>
  );
}

export default Main;

