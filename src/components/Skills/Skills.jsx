import React from "react";
import "./skills.css";
const Skills = () => {
  return (
    <>
      <div className="skills__wrap">
        <div className="container">
          <div className="skills__head">
            <h1>Мы знаем толк в дизайне!</h1>
            <div className="skills__reak">
              <div className="skills__rek skills__qwertyu">
                <p className="rek">6 лет</p>
                <p className="rek__text">В сфере рекламы</p>
              </div>

              <div className="skills__rek skills__qwertyu">
                <p className="rek">более 100</p>
                <p className="rek__text">Наших постоянных клиентов</p>
              </div>

              <div className="skills__rek skills__qwertyu">
                <p className="rek">+20%</p>
                <p className="rek__text">Конверсия продаж</p>
              </div>

              <div className="skills__rek">
                <p className="rek none">-70%</p>
                <p className="rek__text ">Ошибок менеджеров</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
