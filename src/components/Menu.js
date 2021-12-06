import React from "react";

const Menu = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="about__img">
              <img src="/img/pizza.jpg" alt="Pizza" />
            </div>
          </div>
          <div className="col-6 p-25">
            <h3>Новинка місяця</h3>
            <h1>CHICAGO Pizza</h1>
            <p>
             Скуштуй нашу новинку та відчуй ніжний смак посправжньому Американської піци)
            </p>
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                Деталі
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
