import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';
// import logout from '../../images/logout.svg';
// import logoutWhite from '../../images/logout-white.svg';
import NavigationMobile from '../NavigationMobile/NavigationMobile';

function Navigation({ onLogin, pathname, isOpenMenu, onHandleMenu, mobileActive }) {
  return (

    <>
      {
        mobileActive ?
          <NavigationMobile
            onLogin={onLogin}
            pathname={pathname}
            isOpenMenu={isOpenMenu}
            onHandleMenu={onHandleMenu}
          />
          :
          <nav className="navigation">
            <ul className="navigation__list">
              <li className="navigation__item">

                <NavLink
                  exact to="/"
                  className={`navigation__link ${pathname === "/saved-news" && "navigation__link_saved-news"}`}
                  activeClassName="navigation__link_active"
                >
                  Главная
          </NavLink>
              </li>
              <li className="navigation__item">
                <NavLink
                  to="/saved-news"
                  className={`navigation__link ${pathname === "/saved-news" && "navigation__link_saved-news"}`}
                  activeClassName="navigation__link_active-saved-news"
                >
                  Сохранённые статьи
          </NavLink>
              </li>
          {/* для авторизованного пользователя
              <li className="navigation__item">
                  <button 
                    type="button" 
                    className="navigation__logout" 
                    onClick={onLogout}>
                      Грета &nbsp;
                      <img src={logoutWhite} alt='logout' />
                  </button>
              </li> */}
              <li className="navigation__item" >
                <button
                  type="button"
                  className={`navigation__button ${pathname === "/saved-news" && "navigation__button_saved-news"}`}
                  onClick={onLogin}>
                  Авторизоваться
          </button>
              </li>
            </ul>
          </nav>
      }
    </>

  );
}

export default Navigation;
