import React from 'react';
import './SavedNews.css';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';

function SavedNews({ pathname }) {
  return (
    <main className="savedNews">
      <SavedNewsHeader />
      <NewsCardList pathname={pathname} />
    </main>
  );
}

export default SavedNews;