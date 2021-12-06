import React from "react";

const Shop = () => {
  return (
    <div className="shop">
      <div className="container">
        <div className="shop__text">
          <div>
            <h1>Безкоштовна доставка PIZZA OF THE DAY при замовленні від 199 грн.</h1>
            <div className="shop__btn">
              <a href="/buy" className="btn btn-smart">
                Перейти до замовлення
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
