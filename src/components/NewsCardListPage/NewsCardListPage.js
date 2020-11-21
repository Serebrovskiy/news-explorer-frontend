import React from 'react';
import './NewsCardListPage.css';
import NewsCardList from '../NewsCardList/NewsCardList';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';

function NewsCardListPage({ pathname }) {

  const [isLaunchPreloader, setIsLaunchPreloader] = React.useState(false);
  const [isOpenNewsCardListPage, setIsOpenNewsCardListPage] = React.useState(false);

  //запускаем прелоудер
  function handleLaunchPreloader() {
    setIsLaunchPreloader(true);
    setTimeout(() => handleOpenNewsCardListPage(), 3000);
  }

  //закрываем прелоудер и открываем страницу с карточками
  function handleOpenNewsCardListPage() {
    setIsLaunchPreloader(false);
    setIsOpenNewsCardListPage(true);
  }

  return (
    <section className="newsCardListPage">
      <h1 className="newsCardListPage__title">Результаты поиска</h1>
      <NewsCardList pathname={pathname}/>
      <button type="button" className="newsCardListPage__button-next" onClick={handleLaunchPreloader}>Показать еще</button>
      {isLaunchPreloader && <Preloader />}
      {isOpenNewsCardListPage && <NotFound />}
    </section>
  );
}

export default NewsCardListPage;