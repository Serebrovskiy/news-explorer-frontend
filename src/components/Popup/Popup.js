import React from 'react';
import './Popup.css';

function Popup({ isOpen, onClose, onChangePopup, onInfoTooltip, onSubmit, title, buttonName, linkName, isDisabled, children }) {

  return (
    < >
      <div className={`popup ${isOpen && "popup_opened"}`}>
        <form className="popup__form" onSubmit={onSubmit}>
          <button type="button" className="popup__button-close" onClick={onClose} />
          <h2 className="popup__title">{title}</h2>
          {children}
          <button
            type="submit"
            className={`popup__button ${isDisabled && "popup__button_disabled"}`}
            disabled={isDisabled}
            onClick={onInfoTooltip}
          >
            {buttonName}
          </button>
          <p className="popup__text">или&nbsp;
            <span className="popup____text-link" onClick={onChangePopup}>
              {linkName}
            </span>
          </p>
        </form>
      </div>
    </ >
  );
}

export default Popup; 