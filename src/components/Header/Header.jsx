import React from "react";
import "./header.css";
// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
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
          <div className="mobile">
            <svg
              onClick={toggleDrawer}
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction="right"
              size={"70%"}
              className="bla bla bla"
            >
              <div>
                <div className="nav_mob">
                  <h2 onClick={toggleDrawer}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      fill="currentColor"
                      class="bi bi-x"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg>
                  </h2>
                </div>
                <div className="mobile_links">
                  <a href="#">Главная</a>
                  <a href="#">Услуги</a>
                  <a href="#">Наши работы</a>
                  <a href="#">Контакты</a>
                  <button className="btn">Заказать звонок</button>
                </div>
              </div>
            </Drawer>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
