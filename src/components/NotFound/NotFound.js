import React from 'react';
import './NotFound.css';
import notFoundImage from '../../images/not-found_v1.svg';

function NotFound() {
  return (
    <section className="notFound">
      <img className="notFound__image" src={notFoundImage} alt="card" />
      <h1 className="notFound__title">Ничего не найдено</h1>
      <p className="notFound__subtitle">К сожалению по вашему запросу ничего не найдено.</p>
    </section>
  );
}

export default NotFound;