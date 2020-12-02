import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({
  pathname,
  articleList,
  savedArticleList,
  onSavedArticles,
  onDeleteSavedArticle,
  isOpenResultNews,
  loggedIn,
  onLogin,
  onShowMoreArticles,
  showArticlesOnPage
}) {
  
  return (
    <section className="newsCardList">
      {
        pathname === "/saved-news"
          ?
          //выводим страницу с сохраненными карточками 
          <ul className="newsCardList__area">
            {
              savedArticleList.map(elem =>
                <NewsCard
                  article={elem}
                  key={elem.id}
                  iconSave={false}
                  tooltipMessage="Убрать из сохранённых"
                  loggedIn={loggedIn}
                  onDeleteSavedArticle={onDeleteSavedArticle}
                />
              ).reverse()
            }
          </ul>
          :
          //выводим страницу с карточками из поиска
          isOpenResultNews &&
          <>
            <h1 className="newsCardList__title">Результаты поиска</h1>
            <ul className="newsCardList__area">
              {
                articleList.slice(0, showArticlesOnPage).map(elem =>
                  <NewsCard
                    article={elem}
                    key={elem.id}
                    iconSave={true}
                    tooltipMessage="Войдите, чтобы сохранять статьи"
                    savedArticleList={savedArticleList}
                    onSavedArticles={onSavedArticles}
                    onDeleteSavedArticle={onDeleteSavedArticle}
                    loggedIn={loggedIn}
                    onLogin={onLogin}
                  />
                )
              }
            </ul>
            {
              articleList.length > (showArticlesOnPage)
              &&
              <button
                type="button"
                className="newsCardList__button-next"
                onClick={onShowMoreArticles}
              >
                Показать еще
              </button>
            }
          </>
      }
    </section>
  );
}

export default NewsCardList;