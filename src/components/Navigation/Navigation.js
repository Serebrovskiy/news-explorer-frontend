import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';
import logout from '../../images/logout.svg';
import logoutWhite from '../../images/logout-white.svg';
import NavigationMobile from '../NavigationMobile/NavigationMobile';

function Navigation({
  onLogin,
  pathname,
  isOpenMenu,
  onHandleMenu,
  mobileActive,
  loggedIn,
  currentUser,
  onSignOut
}) {

  return (
    <>
      {
        mobileActive ?
          <NavigationMobile
            onLogin={onLogin}
            pathname={pathname}
            isOpenMenu={isOpenMenu}
            onHandleMenu={onHandleMenu}
            onSignOut={onSignOut}
            loggedIn={loggedIn}
            currentUser={currentUser}
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
              {loggedIn
                ?
                <>
                  <li className="navigation__item">
                    <NavLink
                      to="/saved-news"
                      className={`navigation__link ${pathname === "/saved-news" && "navigation__link_saved-news"}`}
                      activeClassName="navigation__link_active-saved-news"
                    >
                      Сохранённые статьи
                   </NavLink>
                  </li>
                  <li className="navigation__item">
                    <button
                      type="button"
                      className={`navigation__button ${pathname === "/saved-news" && "navigation__button_saved-news"}`}
                      onClick={onSignOut}>
                      {currentUser.name} &nbsp;
                      <img src={pathname === "/saved-news" ? logout : logoutWhite} alt='выйти' />
                    </button>
                  </li>
                </>
                :
                <li className="navigation__item" >
                  <button
                    type="button"
                    className={`navigation__button ${pathname === "/saved-news" && "navigation__button_saved-news"}`}
                    onClick={onLogin}>
                    Авторизоваться
                  </button>
                </li>
              }
            </ul>
          </nav>
      }
    </>

  );
}

export default Navigation;
