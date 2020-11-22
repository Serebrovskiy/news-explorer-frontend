import React from 'react';
import './Register.css';
import Popup from '../Popup/Popup';

function Register({ isOpen, onClose, onChangePopup, onInfoTooltip }) {

  const [isDisabled, setIsDisabled] = React.useState(true);
  const [isErrorTextEmail, setIsErrorTextEmail] = React.useState('');
  const [isErrorTextPassword, setIsErrorTextPassword] = React.useState('');
  const [isErrorTextName, setIsErrorTextName] = React.useState('');
  const inputEmailRef = React.useRef("");
  const inputPasswordRef = React.useRef("");
  const inputNameRef = React.useRef("");


  //десейблим кнопку если все поля невалидны
  function handleCheckValidity() {
    inputEmailRef.current.checkValidity() && inputPasswordRef.current.checkValidity() && inputNameRef.current.checkValidity()
      ?
      setIsDisabled(false) : setIsDisabled(true);

    handleCheckValidityEmail();
    handleCheckValidityPassword();
    handleCheckValidityName();
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

  //показываем ошибку если имя невалидно
  function handleCheckValidityName() {
    inputNameRef.current.checkValidity()
      ?
      setIsErrorTextName('')
      :
      setIsErrorTextName('Введите корректное имя')
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
        onInfoTooltip={onInfoTooltip}
        onSubmit={handleSubmit}
        title='Регистрация'
        buttonName='Зарегистрироваться'
        linkName='Войти'
        isDisabled={isDisabled}
      >
        <div className="register">
          <p className="register__input-title">Email</p>
          <input
            type="text"
            name="email"
            className="register__input"
            placeholder="Введите почту"
            minLength="3"
            maxLength="30"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            onChange={handleCheckValidity}
            ref={inputEmailRef}
            required />
          <span className="register__error-text">{isErrorTextEmail}</span>
          <p className="register__input-title">Пароль</p>
          <input
            type="password"
            name="password"
            className="register__input"
            placeholder="Введите пароль"
            minLength="3"
            maxLength="30"
            onChange={handleCheckValidity}
            ref={inputPasswordRef}
            required />
          <span className="register__error-text">{isErrorTextPassword}</span>
          <p className="register__input-title">Имя</p>
          <input
            type="text"
            name="name"
            className="register__input"
            placeholder="Введите имя"
            minLength="3"
            maxLength="30"
            pattern="^[a-zA-Z0-9а-яА-Я\s-]+$"
            onChange={handleCheckValidity}
            ref={inputNameRef}
            required />
          <span className="register__error-text">{isErrorTextName}</span>
        </div>
      </Popup>
    </ >
  );
}

export default Register; 