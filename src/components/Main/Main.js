import React from 'react';
import './Main.css';
import About from '../About/About';
import NewsCardListPage from '../NewsCardListPage/NewsCardListPage';
import SearchPage from '../SearchPage/SearchPage';
import Preloader from '../Preloader/Preloader';

function Main({ pathname }) {

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
    < >
      <main className="main">
        <SearchPage onLaunchPreloader={handleLaunchPreloader} />
        {isLaunchPreloader && <Preloader />}
        {isOpenNewsCardListPage && <NewsCardListPage pathname={pathname}/>}
        <About />
      </main>
    </ >
  );
}

export default Main; 