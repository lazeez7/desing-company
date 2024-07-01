import React from "react";
import s from "./services.module.css";

const Services = () => {

  return (
    <>
      <section className={s.services}>
        <div className="container">
          <h2 className={s.main_title}>Наши услуги</h2>
          <div className={s.wrap}>
            <div className={s.card}>
              <div className={s.box}>
                <div className="title">
                  <h4>Рекламные материалы</h4>
                </div>
                <ul>
                  <li>Верстка макетов</li>
                  <li>Флаеры</li>
                  <li>Визитки</li>
                  <li>Брошюры</li>
                  <li>Листовки</li>
                </ul>
                <h3>
                  {" "}
                  от <span>2000 руб.</span>
                </h3>
              </div>

              <button>Подробнее</button>
            </div>

            <div className={s.card}>
              <div className={s.box}>
                <h4>
                  {" "}
                  бренд <br />
                  дизайн
                </h4>
                <ul>
                  <li>Логотипы</li>
                  <li>Фирменный стиль</li>
                  <li>Айдентика</li>
                  <li>Концепция бренда</li>
                  <li>Гайдлайн</li>
                </ul>
                <h3>
                  {" "}
                  от <span>3000 руб.</span>
                </h3>
              </div>

              <button>Подробнее</button>
            </div>

            <div className={s.card}>
              <div className={s.box}>
                <h4>
                  дизайн вывесок
                  <br /> и рекламы
                </h4>
                <ul>
                  <li>Дизайн вывесок</li>
                  <li>Фотопривязки</li>
                  <li>Роллапы</li>
                </ul>
                <h3>
                  {" "}
                  от <span> 3000 руб.</span>
                </h3>
              </div>

              <button>Подробнее</button>
            </div>

            <div className={s.card}>
              <div className={s.box}>
                <h4>
                  Digital <br /> Дизайн
                </h4>
                <ul>
                  <li>WEB дизайн</li>
                  <li>Креативы для рекламы</li>
                  <li>Презентации</li>
                </ul>
                <h3>
                  {" "}
                  от <span>5000 руб.</span>
                </h3>
              </div>

              <button>Подробнее</button>
            </div>

            <div className={s.card}>
              <div className={s.box}>
                <h4>Smm</h4>
                <ul>
                  <li>Stories Instagram</li>
                  <li>Post instagram</li>
                  <li>Оформление аккаунта</li>
                  <li>Рекламные креативы</li>
                  <li>Оформление группы</li>
                </ul>
                <h3>
                  {" "}
                  от <span>1500 руб.</span>
                </h3>
              </div>

              <button>Подробнее</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
