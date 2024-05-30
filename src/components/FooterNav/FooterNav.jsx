import React from "react";
import "./footernav.css";

const FooterNav = () => {
  return (
    <>
      <div className="fnav__wrap">
        <div className="container">
          <div className="fnav__block">
            <div className="fnav__logo">
              <img src="./img.png" alt="" />
              <p>
                Политика <br /> конфиденциальности
              </p>
              <button className="fnav__btn">Обратная связь</button>
            </div>
            <div className="fnav__logo">
              <h3>Информация</h3>
              <a href="#">Главная</a>
              <a href="#">Услуги</a>
              <a href="#">Наши работы</a>
              <a href="#">Контакты</a>
            </div>

            <div className="fnav__logo">
              <h3>Услуги</h3>
              <a href="#">Реклама в интернете</a>
              <a href="#">Дизайн вывесок и рекламы</a>
              <a href="#">Дизайн сайтов на Тильде  </a>
              <a href="#">СММ</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterNav;
