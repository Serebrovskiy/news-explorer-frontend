import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header({ onLogin, pathname, loggedIn, currentUser, onSignOut }) {

  const [isOpenMenu, setIsOpenMenu] = React.useState(false);
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
  const [mobileActive, setMobileActive] = React.useState(false);

  //открываем мобильное меню
  function handleMenu() {
    isOpenMenu ? setIsOpenMenu(false) : setIsOpenMenu(true);
  }

  React.useEffect(() => {
    setIsOpenMenu(false)
  }, [pathname]);

  //отслеживаем размеры экрана для изменения меню
  React.useEffect(() => {
    function resizeScreen(e) {
      setScreenWidth(e.target.innerWidth);
    }
    window.addEventListener('resize', resizeScreen);
    return () => {
      window.removeEventListener('resize', resizeScreen);
    }
  }, [])

  //меняем статус меню в зависимости от размеров экрана
  React.useEffect(() => {
    if (screenWidth <= 700) {
      setMobileActive(true);
    }
    else {
      setMobileActive(false);
      setIsOpenMenu(false);
    }
  }, [screenWidth]);

  //закрытие меню щелчком вне формы
  React.useEffect(() => {
    const handleMouseClose = (evt) => {
      if (evt.target.classList.contains("navigationMobile")) {
        setIsOpenMenu(false);
      }
    }
    document.addEventListener("mousedown", handleMouseClose);
    return () => document.removeEventListener("mousedown", handleMouseClose);
  }, []);

  return (
    <header className={`header ${isOpenMenu ? "header_mobile" : (pathname === "/saved-news" ? "header_saved-news" : "header_main")}`}>
      <Link className={`header__logo ${(!isOpenMenu && (pathname === "/saved-news")) && "header__logo_saved-news"}`} to="/">NewsExplorer</Link>
      <Navigation
        onLogin={onLogin}
        pathname={pathname}
        isOpenMenu={isOpenMenu}
        onHandleMenu={handleMenu}
        mobileActive={mobileActive}
        loggedIn={loggedIn}
        currentUser={currentUser}
        onSignOut={onSignOut}
      />
    </header>
  );
}

export default Header;