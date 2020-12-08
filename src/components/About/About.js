import React from 'react';
import './About.css';
import avatar from '../../images/avatar.jpg';

function About() {
  return (
    <section className="about">
      <img src={avatar} className="about__avatar" alt='Аватар' />
      <div className="about__container">
        <h1 className="about__title">Об авторе</h1>
        <p className="about__text">Меня зовут Серебровский Александр. Я фронтенд-разработчик. Данный проект является дипломной работой в рамках обучения в Янедкс.Практикуме</p>
        <p className="about__text">В работе использую следующие технологий: HTML5, CSS3, JavaScript, React, Node.js, Express, Mongoose, MongoDB, Git</p>
        <p className="about__text">С остальными работами можно познакомиться на моем&nbsp;
          <a href="https://github.com/Serebrovskiy" className="about__text-link" target="_blank" rel="noreferrer">github</a>, а связаться со мной по&nbsp;
          <a href="mailto:aleksandr-web@yandex.ru" className="about__text-link" target="_blank" rel="noreferrer">email</a>.
        </p>
        <p className="about__text">Спасибо за внимание.</p>
      </div>
    </section>
  );
}

export default About;