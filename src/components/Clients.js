import React from "react";

const Clients = () => {
  return (
    <div className="clients">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="client">
              <h1>120</h1>
              <p>Кількість замовлень щодня</p>
            </div>
          </div>
          <div className="col-3">
            <div className="client">
              <h1>18</h1>
              <p>Видів піци</p>
            </div>
          </div>
          <div className="col-3">
            <div className="client">
              <h1>14868</h1>
              <p>Щасливих клієнтів</p>
            </div>
          </div>
          <div className="col-3">
            <div className="client">
              <h1>2031</h1>
              <p>Виконаних доставок</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
