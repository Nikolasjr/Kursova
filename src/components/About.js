import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25">
            <h3>Про нас</h3>
            <h1> НОВЕ МЕНЮ! НОВІ СТРАВИ! НОВІ ВРАЖЕННЯ!!!</h1>
            <p>
ЗУСТРІЧАЙ НОВИНКИ ВІД ШЕФА!
Відвідай одну з піцерій 24Pizza і насолоджуйся смачними новинками.
            </p>
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                Переглянути більше
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="about__img">
              <img src="/img/pizza.jpg" alt="Pizza" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
