
import React from "react";
import PizzaLeft from "./pizzaLeft.jpg";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Форма зв'язку</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Ваше ім'я</label>
          <input name="name" placeholder="Введіть ім'я..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Введіть email..." type="email" />
          <label htmlFor="message">Повідомлення</label>
          <textarea
            rows="6"
            placeholder="Суть вашого повідомлення..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Надіслати</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
