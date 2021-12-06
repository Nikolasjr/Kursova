import React from "react";

const Prices = () => {
  return (
    <div className="prices">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/pizza1.png" alt="pizza" />
              </div>
              <h1 className="price__heading">Салямі</h1>
              <p className="price__text">
                Основа, томатний соус, сир моцарелла, салямі.
              </p>
              <p className="price_rs">150.00 грн</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/pizza2.png" alt="pizza" />
              </div>
              <h1 className="price__heading">Капрічоза</h1>
              <p className="price__text">
                Основа, томатний соус, сир моцарелла, салямі, гриби, шинка, помідори.
              </p>
              <p className="price_rs">225.00 грн</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/pizza3.png" alt="pizza" />
              </div>
              <h1 className="price__heading">Піца з креветками</h1>
              <p className="price__text">
                 Основа, томатний соус, сир моцарелла, салямі, гриби, креветки, помідори.
              </p>
              <p className="price_rs"> ̶1̶5̶0̶.̶0̶0̶ ̶г̶р̶н̶    120.00 грн</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/pizza4.png" alt="pizza" />
              </div>
              <h1 className="price__heading">Кебаб гриль</h1>
              <p className="price__text">
               Моцарелла • Сацебелі соус • баклажан • кебаб з баранини • кінза • цибуля • болгарський перець • помідор • томатний соус (основа)
              </p>
              <p className="price_rs">250.00 грн</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/pizza5.png" alt="pizza" />
              </div>
              <h1 className="price__heading">Піца карбонара</h1>
              <p className="price__text">
            Моцарелла • шинка • копчена курка • перець болгарський • помідори • зелень • спеції • томатний соус (основа)
              </p>
              <p className="price_rs">99.00 грн.</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/pizza6.png" alt="pizza" />
              </div>
              <h1 className="price__heading">Піца 3 сири</h1>
              <p className="price__text">
         Дор блю • Моцарелла • груша • журавлина (в'ялена) • курка гриль • вершковий соус Альфредо (основа) • шпинат
              </p>
              <p className="price_rs">120.00 грн</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
