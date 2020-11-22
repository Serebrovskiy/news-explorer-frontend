import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
import image01 from '../../images/image_01.jpg';
import image02 from '../../images/image_02.jpg';
import image04 from '../../images/image_04.jpg';
import image05 from '../../images/image_05.jpg';
import image06 from '../../images/image_06.jpg';
import image07 from '../../images/image_07.jpg';


function NewsCardList({ pathname }) {
  return (
    <section className="newsCardList">
      {
        pathname === "/saved-news"
          ?
          //выводим страницу с сохраненными карточками 
          <div className="newsCardList__area">  
            <NewsCard
              image={image06}
              date="2 августа, 2019"
              title="Национальное достояние – парки"
              text="В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, 
          где и сегодня каждый может приобщиться к природе."
              source="Лента.ру"
              keyword="Природа"
              tooltip="Убрать из сохранённых"
              iconSave={false}
              url="https://lenta.ru"
            />
            <NewsCard
              image={image01}
              date="2 августа, 2019"
              title="Лесные огоньки: история одной фотографии"
              text="Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного 
          из местных чудес природы."
              source="Медуза"
              keyword="Природа"
              tooltip="Убрать из сохранённых"
              iconSave={false}
              url="https://meduza.io"
            />
            <NewsCard
              image={image05}
              date="2 августа, 2019"
              title="«Первозданная тайга»: новый фотопроект Игоря Шпиленка"
              text="Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. В этот раз он отправился 
          в Двинско-Пинежскую тайгу, где..."
              source="Риа"
              keyword="Тайга"
              tooltip="Убрать из сохранённых"
              iconSave={false}
              url="https://ria.ru"
            />
          </div>
          :
          //выводим страницу с карточками из поиска
          <div className="newsCardList__area">
            <NewsCard
              image={image02}
              date="2 августа, 2019"
              title="Национальное достояние – парки"
              text="В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, 
          где и сегодня каждый может приобщиться к природе."
              source="Лента.ру"
              tooltip="Войдите, чтобы сохранять статьи"
              iconSave={true}
              url="https://lenta.ru"
            />
            <NewsCard
              image={image04}
              date="2 августа, 2019"
              title="Лесные огоньки: история одной фотографии"
              text="Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного 
          из местных чудес природы."
              source="Медуза"
              tooltip="Войдите, чтобы сохранять статьи"
              iconSave={true}
              url="https://meduza.io"
            />
            <NewsCard
              image={image07}
              date="2 августа, 2019"
              title="«Первозданная тайга»: новый фотопроект Игоря Шпиленка"
              text="Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. В этот раз он отправился 
          в Двинско-Пинежскую тайгу, где..."
              source="Риа"
              tooltip="Войдите, чтобы сохранять статьи"
              iconSave={true}
              url="https://ria.ru"
            />
          </div>
      }
    </section>
  );
}

export default NewsCardList;