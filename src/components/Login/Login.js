import React from 'react';
import './Login.css';
import Popup from '../Popup/Popup';

function Login({ isOpen, onClose, onChangePopup, onInfoTooltip }) {

  const [isDisabled, setIsDisabled] = React.useState(true);
  const [isErrorTextEmail, setIsErrorTextEmail] = React.useState('');
  const [isErrorTextPassword, setIsErrorTextPassword] = React.useState('');
  const inputEmailRef = React.useRef("");
  const inputPasswordRef = React.useRef("");


  //десейблим кнопку если все поля невалидны
  function handleCheckValidity() {
    inputEmailRef.current.checkValidity() && inputPasswordRef.current.checkValidity()
      ?
      setIsDisabled(false)
      :
      setIsDisabled(true)

    handleCheckValidityEmail();
    handleCheckValidityPassword();
  }

  //показываем ошибку если email невалиден
  function handleCheckValidityEmail() {
    inputEmailRef.current.checkValidity()
      ?
      setIsErrorTextEmail('')
      :
      setIsErrorTextEmail('Введите корректный Email')
  }

  //показываем ошибку если пароль невалиден
  function handleCheckValidityPassword() {
    inputPasswordRef.current.checkValidity()
      ?
      setIsErrorTextPassword('')
      :
      setIsErrorTextPassword('Введите корректный пароль')
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    < >
      <Popup
        isOpen={isOpen}
        onClose={onClose}
        onChangePopup={onChangePopup}
        onSubmit={handleSubmit}
        onInfoTooltip={onInfoTooltip}
        title='Вход' buttonName='Войти'
        linkName='Зарегистрироваться'
        isDisabled={isDisabled}
      >
        <div className="login">
          <p className="login__input-title">Email</p>
          <input
            type="text"
            name="email"
            className="login__input"
            placeholder="Введите почту"
            minLength="3"
            maxLength="30"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            onChange={handleCheckValidity}
            ref={inputEmailRef}
            required />
          <span className="login__error-text">{isErrorTextEmail}</span>
          <p className="login__input-title">Пароль</p>
          <input
            type="password"
            name="password"
            className="login__input"
            placeholder="Введите пароль"
            minLength="3"
            maxLength="30"
            onChange={handleCheckValidity}
            ref={inputPasswordRef}
            required />
          <span className="login__error-text">{isErrorTextPassword}</span>
        </div>
      </Popup>
    </ >
  );
}

export default Login; 