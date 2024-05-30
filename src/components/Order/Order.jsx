import React from "react";
import "./order.css";

const Order = () => {
  return (
    <>
      <div className="order__wrap">
        <div className="container">
          <div className="order__head">
            <h1>
              Заказать Консультацию <br /> Специалиста
            </h1>

            <div className="order__block">
              <div className="order__content">
                <p>
                  Заполните форму и мы свяжемся с вами в ближайшее время!
                </p>
                <div className="order__inputs">
                  <input type="text" placeholder="Ваше имя" />
                  <input type="text" placeholder="Номер вашего телефона" />
                </div>
                <div className="order__coment">
                  <textarea name="" id=""></textarea>
                </div>
                <div className="check__box">
                  <input type="checkbox" className="check" />
                  <p>Я согласен с условиями обработки персональных данных</p>
                </div>

                <div className="order__btn">
                  <button className="btn">Отправить</button>
                </div>
              </div>
              <div className="order__img">
                <img src="./Справа.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
