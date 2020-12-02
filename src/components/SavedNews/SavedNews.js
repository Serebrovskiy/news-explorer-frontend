import React from 'react';
import './SavedNews.css';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';

function SavedNews({
  pathname,
  loggedIn,
  currentUser,
  savedArticleList,
  onDeleteSavedArticle
}) {
  return (
    <main className="savedNews">
      <SavedNewsHeader savedArticleList={savedArticleList} currentUser={currentUser} />
      <NewsCardList
        pathname={pathname}
        loggedIn={loggedIn}
        savedArticleList={savedArticleList}
        onDeleteSavedArticle={onDeleteSavedArticle}
      />
    </main>
  );
}

export default SavedNews;