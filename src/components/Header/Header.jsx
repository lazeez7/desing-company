import React from "react";
import './header.css'
const Header = () => {
  return (
    <nav>
     <div className="container">
     <div className="header__wrap">
        <div className="logo">
          <img src="./img.png" alt="" />
        </div>
        <div className="header__nav">
          <a href="#">Главная</a>
          <a href="#">Услуги</a>
          <a href="#">Наши работы</a>
          <a href="#">Контакты</a>
        </div>
        <div className="header__button">
          <button className="btn">Заказать звонок</button>
        </div>
      </div>
     </div>
    </nav>
  );
};

export default Header;
