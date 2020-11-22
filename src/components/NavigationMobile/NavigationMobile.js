import React from 'react';
import './NavigationMobile.css';
import { NavLink } from 'react-router-dom';

function NavigationMobile({ onLogin, pathname, isOpenMenu, onHandleMenu }) {
  return (
    <>
      {
        //сворачиваем - разворачиваем меню
        !isOpenMenu  
          ?
          <button
            type="button"
            className={`navigationMobile__menu ${pathname === "/saved-news" && "navigationMobile__menu_saved-news"}`}
            onClick={onHandleMenu}
          />
          :
          <>
            <button type="button" className="navigationMobile__menu navigationMobile__menu_open" onClick={onHandleMenu} />
            <nav className="navigationMobile navigationMobile_opened">
              <ul className="navigationMobile__list">
                <li className="navigationMobile__item">
                  <NavLink
                    exact to="/"
                    className="navigationMobile__link"
                    activeClassName="navigationMobile__link"
                  >
                    Главная
                  </NavLink>
                </li>
                <li className="navigationMobile__item">
                  <NavLink
                    to="/saved-news"
                    className="navigationMobile__link"
                    activeClassName="navigationMobile__link"
                  >
                    Сохранённые статьи
                  </NavLink>
                </li>
                <li className="navigationMobile__item" >
                  <button
                    type="button"
                    className={`navigationMobile__button`}
                    onClick={onLogin}>
                    Авторизоваться
                  </button>
                </li>
              </ul>
            </nav>
          </>
      }
    </>
  );
}

export default NavigationMobile;
