import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import gitIcon from '../../images/git-icon.svg';
import emailIcon from '../../images/email-icon.svg';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">© 2020 Supersite, Powered by News API</p>
      <div className="footer__container">
        <ul className="footer__nav-list">
          <li className="footer__nav-item">
            <NavLink exact to="/" className="footer__nav-link" >Главная</NavLink>
          </li>
          <li className="footer__nav-item" >
            <a href="https://praktikum.yandex.ru" className="footer__nav-link" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
          </li>
        </ul>
        <ul className="footer__icon-list">
          <li className="footer__icon-item">
            <a href="https://github.com/Serebrovskiy" className="footer__column-link" target="_blank" rel="noreferrer">
              <img className="footer__social-icon" src={gitIcon} alt="GitHub link" />
            </a>
          </li>
          <li className="footer__icon-item">
            <a href="mailto: aleksandr-web@yandex.ru" className="footer__column-link" target="_blank" rel="noreferrer">
              <img className="footer__social-icon" src={emailIcon} alt="email link" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;