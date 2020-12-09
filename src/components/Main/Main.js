import React from 'react';
import './Main.css';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import SearchPage from '../SearchPage/SearchPage';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
import { SHOW_ARTICLES_ON_PAGE } from '../../utils/config';

function Main({
  pathname,
  onSearchArticles,
  onSavedArticles,
  onDeleteSavedArticle,
  savedArticleList,
  articleList,
  isOpenResultNews,
  setIsOpenResultNews,
  showArticlesOnPage,
  setShowArticlesOnPage,
  isLoading,
  loggedIn,
  onLogin,
  onResetResultSearch,
  setHiddenResultSearch,
  hiddenResultSearch
}) {

  //открываем страницу с карточками, максимум 3-мя
  function handleResultNews() {
    setIsOpenResultNews(true);
    setHiddenResultSearch(false);
    setShowArticlesOnPage(SHOW_ARTICLES_ON_PAGE);
  }

  //паказать еще
  function handleShowMoreArticles() {
    setShowArticlesOnPage(showArticlesOnPage + SHOW_ARTICLES_ON_PAGE);
  }

  React.useEffect(() => {
    if (articleList.length === 0) {
      setIsOpenResultNews(false);
    }
  }, [pathname]);

  return (
    < >
      <main className="main">
        <SearchPage
          onSearchArticles={onSearchArticles}
          onResultNews={handleResultNews}
        />
        {isLoading && <Preloader />}
        {
          isOpenResultNews
          && (
            articleList.length !== 0
              ?
              <NewsCardList
                pathname={pathname}
                articleList={articleList}
                onSavedArticles={onSavedArticles}
                onDeleteSavedArticle={onDeleteSavedArticle}
                savedArticleList={savedArticleList}
                loggedIn={loggedIn}
                onLogin={onLogin}
                onShowMoreArticles={handleShowMoreArticles}
                showArticlesOnPage={showArticlesOnPage}
                onResetResultSearch={onResetResultSearch}
                hiddenResultSearch={hiddenResultSearch}
              />
              :
              !isLoading && <NotFound />
          )
        }
        <About />
      </main>
    </ >
  );
}

export default Main; 