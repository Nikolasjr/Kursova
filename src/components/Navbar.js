import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__text">
        <div className="logo">
          <img src="/img/logo.png" alt="logo" />
        </div>
        <ul className="navbar__ul">
          <li>
            <a href="/">Головна</a>
          </li>
          <li>
            <a href="/buy">Меню</a>
          </li>
          <li>
            <a href="https:/www.google.com.ua/maps/place/Cool+Pizza/@49.1261761,24.7284511,19z">Наша адреса</a>
          </li>
          <li>
            <a href="/contact">Форма зв'язку</a>
          </li>
          <li>
            <a href="/login">Вхід</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
