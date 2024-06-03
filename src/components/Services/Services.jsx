import React from "react";
import "./service.css";

const Services = () => {
  return (
    <>
      <div className="service__wrap">
        <div className="container">
          <h1>Наши услуги</h1>
          <div className="services__cards">
            <div className="service__block">
              <div className="service__card">
                <p>
                  Рекламные <br /> материалы
                </p>
                <div className="service__content">
                  <span>
                    <img src="./Vector (1).png" alt="" />
                    <h5 className="blok">Верстка макетов</h5>
                  </span>
                  <span>
                    <img src="./Vector (1).png" alt="" />
                    <h5 className="blok">Флаеры</h5>
                  </span>

                  <span>
                    <img src="./Vector (1).png" alt="" />
                    <h5 className="blok">Визитки</h5>
                  </span>

                  <span>
                    <img src="./Vector (1).png" alt="" />
                    <h5 className="blok">Брошюры</h5>
                  </span>

                  <span>
                    <img src="./Vector (1).png" alt="" />
                    <h5 className="blok">Листовки</h5>
                  </span>
                </div>
                <div className="price">
                  <h5>от</h5>
                  <h3> 2000 руб.</h3>
                </div>
              </div>
              <div className="btn1">
                <button>Подробнее</button>
              </div>
            </div>

            <div className="service__block">
              <div className="service__card">
                <p>
                  бренд <br /> дизайн
                </p>
                <div className="service__content">
                  <span>
                    <img src="./Vector (1).png" alt="" />
                    <h5 className="blok">Логотипы</h5>
                  </span>

                  <span>
                    <img src="./Vector (1).png" alt="" />
                    <h5 className="blok">Айдентика</h5>
                  </span>

                  <span>
                    <img src="./Vector (1).png" alt="" />
                    <h5 className="blok">Концепция бренда</h5>
                  </span>

                  <span>
                    <img src="./Vector (1).png" alt="" />
                    <h5 className="blok">Гайдлайн</h5>
                  </span>
                </div>
                <div className="price">
                  <h5>от</h5>
                  <h3> 3000 руб.</h3>
                </div>
              </div>
              <div className="btn1">
                <button>Подробнее</button>
              </div>
            </div>

            <div className="service__block">
              <div className="service__card">
                <p className="design">
                  дизайн вывесок <br /> и рекламы
                </p>
                <div className="service__content">
                  <span>
                    <img src="./Vector (1).png" alt="" />
                    <h5 className="blok">Дизайн вывесок</h5>
                  </span>

                  <span>
                    <img src="./Vector (1).png" alt="" />
                    <h5 className="blok">Фотопривязки</h5>
                  </span>

                  <span>
                    <img src="./Vector (1).png" alt="" />
                    <h5 className="blok">Фотопривязки</h5>
                  </span>
                </div>
                <div className="price">
                  <h5>от</h5>
                  <h3> 3000 руб.</h3>
                </div>
              </div>
              <div className="btn1">
                <button>Подробнее</button>
              </div>
            </div>
            <div className="service__block">
              <div className="service__card">
                <p>
                  Digital <br /> Дизайн
                </p>
                <div className="service__content">
                  <span>
                    <img src="./Vector (1).png" alt="" />
                    <h5 className="blok">WEB дизайн</h5>
                  </span>

                  <span>
                    <img src="./Vector (1).png" alt="" />
                    <h5 className="blok">Креативы для <br /> рекламы</h5>
                  </span>

                  <span>
                    <img src="./Vector (1).png" alt="" />
                    <h5 className="blok">Презентации</h5>
                  </span>
                </div>
                <div className="price">
                  <h5>от</h5>
                  <h3> 5000 руб.</h3>
                </div>
              </div>
              <div className="btn1">
                <button>Подробнее</button>
              </div>
            </div>
            <div className="service__block">
              <div className="service__card">
                <p className="smm">Smm</p>
                <div className="service__content">
                  <span>
                    <img src="./Vector (1).png" alt="" />
                    <h5 className="blok">Stories Instagram</h5>
                  </span>

                  <span>
                    <img src="./Vector (1).png" alt="" />
                    <h5 className="blok">Post instagram</h5>
                  </span>

                  <span>
                    <img src="./Vector (1).png" alt="" />
                    <h5 className="blok">Оформление аккаунта</h5>
                  </span>

                  <span>
                    <img src="./Vector (1).png" alt="" />
                    <h5 className="blok">Рекламные креативы</h5>
                  </span>

                  <span>
                    <img src="./Vector (1).png" alt="" />
                    <h5 className="blok">Оформление группы</h5>
                  </span>
                </div>
                <div className="price">
                  <h5>от</h5>
                  <h3> 1500 руб.</h3>
                </div>
              </div>
              <div className="btn1">
                <button>Подробнее</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
