import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { Routes,Route } from "react-router-dom";
import Navbar from "./Navbar";
import Modal from "./Modal";
import Contacts from "./Contact"
const Header = () => {
 const [modalActive, setModalActive] = useState(1)   
  return (
    <div className="banner">
      <Navbar />
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            <h3>Піца на замовлення</h3>
            <h1>24PIZZA</h1>
            <p>
              Спробуй найсмачнішу піцу свого міста
            </p>
            <div className="banner__btn">
              <a href="" className="btn btn-smart"  onClick={() => setModalActive(1)}>
                Замовити зараз
              </a>
              <Modal active={modalActive} setActive={setModalActive}/>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
