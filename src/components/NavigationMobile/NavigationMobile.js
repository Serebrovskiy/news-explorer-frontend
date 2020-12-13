import React from 'react';
import './NavigationMobile.css';
import { NavLink } from 'react-router-dom';
import logoutWhite from '../../images/logout-white.svg';

function NavigationMobile({
  onLogin,
  pathname,
  isOpenMenu,
  onHandleMenu,
  loggedIn,
  currentUser,
  onSignOut
}) {
  return (
    // <>
    //   {
        //сворачиваем - разворачиваем меню
        // !isOpenMenu
        //   ?
        //   <button
        //     type="button"
        //     className={`navigationMobile__menu ${pathname === "/saved-news" && "navigationMobile__menu_saved-news"}`}
        //     onClick={onHandleMenu}
        //   />
        //   :
          <>
            <button type="button" 
            className={`navigationMobile__menu ${isOpenMenu && "navigationMobile__menu_open"} ${pathname === "/saved-news" && "navigationMobile__menu_saved-news"}`}
            // className="navigationMobile__menu navigationMobile__menu_open" 
            onClick={onHandleMenu} />

            <nav className={`navigationMobile ${isOpenMenu && "navigationMobile_opened"}`}>

              <ul className={`navigationMobile__list ${isOpenMenu && "navigationMobile__list_opened"}`}>
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
                {loggedIn
                  ?
                  <li className="navigationMobile__item" >
                    <button
                      type="button"
                      className={`navigationMobile__button`}
                      onClick={onSignOut}
                    >
                      {currentUser.name ? currentUser.name : 'Выйти'}
                      &nbsp;<img src={logoutWhite} alt='Выйти' />
                    </button>
                  </li>
                  :
                  <li className="navigationMobile__item" >
                    <button
                      type="button"
                      className={`navigationMobile__button`}
                      onClick={onLogin}
                    >
                      Авторизоваться
                </button>
                  </li>
                }
              </ul>
            </nav>
          </>
    //   }
    // </>
  );
}

export default NavigationMobile;
