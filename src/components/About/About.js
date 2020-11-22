import React from 'react';
import './About.css';
import avatar from '../../images/avatar.jpg';

function About() {
  return (
    <section className="about">
      <img src={avatar} className="about__avatar" alt='Аватар' />
      <div className="about__container">
        <h1 className="about__title">Об авторе</h1>
        <p className="about__text">Это блок с описанием автора проекта. Здесь следует указать, как вас зовут, чем вы занимаетесь,
        какими технологиями разработки владеете.</p>
        <p className="about__text">Также можно рассказать о процессе обучения в Практикуме, чему вы тут научились, и чем можете помочь потенциальным заказчикам.</p>
      </div>
    </section>
  );
}

export default About;