import './App.css';
import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Register from '../Register/Register';
import Login from '../Login/Login';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

function App() {

  const { pathname } = useLocation();

  const [isOpenPopupLogin, setIsOpenPopupLogin] = React.useState(false);
  const [isOpenPopupRegister, setIsOpenPopupRegister] = React.useState(false);
  const [isOpenPopupInfo, setIsOpenPopupInfo] = React.useState(false);

  function handleLoginClick() {
    setIsOpenPopupLogin(true);
    setIsOpenPopupRegister(false);
  }

  function handleRegisterClick() {
    setIsOpenPopupRegister(true);
    setIsOpenPopupLogin(false);
  }

  function handleInfoClick() {
    setIsOpenPopupInfo(true);
    setIsOpenPopupRegister(false);
    setIsOpenPopupLogin(false);
  }

  //закрываем все попапы
  function closePopups() {
    setIsOpenPopupLogin(false);
    setIsOpenPopupRegister(false);
    setIsOpenPopupInfo(false);
  }

  //закрытие попапа через Escape
  React.useEffect(() => {
    const handleEscClose = (evt) => {
      if (evt.key === "Escape") closePopups();
    }
    document.addEventListener("keydown", handleEscClose);
    return () => document.removeEventListener("keydown", handleEscClose);
  }, []);

  //закрытие попапа щелчком вне формы
  React.useEffect(() => {
    const handleMouseClose = (evt) => {
      if (evt.target.classList.contains("popup_opened")) closePopups();
    }
    document.addEventListener("mousedown", handleMouseClose);
    return () => document.removeEventListener("mousedown", handleMouseClose);
  }, []);

  return (
    <div className="page">
      <Header onLogin={handleLoginClick} pathname={pathname} />
      <Login
        isOpen={isOpenPopupLogin}
        onClose={closePopups}
        onChangePopup={handleRegisterClick}
        onInfoTooltip={handleInfoClick}
      />
      <Register
        isOpen={isOpenPopupRegister}
        onClose={closePopups}
        onChangePopup={handleLoginClick}
        onInfoTooltip={handleInfoClick}
      />
      <InfoTooltip
        isOpen={isOpenPopupInfo}
        onClose={closePopups}
      />
      <Switch>
        <Route exact path="/">
          <Main pathname={pathname} />
        </Route>
        <Route path="/saved-news">
          <SavedNews pathname={pathname} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
