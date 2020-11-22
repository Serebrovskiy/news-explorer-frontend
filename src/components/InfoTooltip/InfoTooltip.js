import React from 'react';
import './InfoTooltip.css';
import { Link } from 'react-router-dom';

function InfoTooltip({ isOpen, onClose }) {
  return (
    <div className={`infoTooltip ${isOpen && "infoTooltip_opened"}`}>
      <div className="infoTooltip__form">
        <button className="infoTooltip__button-close" onClick={onClose} />
        <h2 className="infoTooltip__title">Пользователь успешно зарегистрирован!</h2>
        <Link className="infoTooltip__link" onClick={onClose} to="/">
          <p className="infoTooltip__text-link">Войти</p>
        </Link>
      </div>
    </div>
  );
}

export default InfoTooltip; 