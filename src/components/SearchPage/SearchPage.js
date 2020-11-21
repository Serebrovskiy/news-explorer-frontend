import React from 'react';
import './SearchPage.css';
import SearchForm from '../SearchForm/SearchForm';

function SearchPage({ onLaunchPreloader }) {
  return (
    < >
      <section className="searchPage">
        <h1 className="searchPage__title">Что творится в мире?</h1>
        <h3 className="searchPage__subtitle">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</h3>
        <SearchForm onLaunchPreloader={onLaunchPreloader} />
      </section>
    </ >
  );
}

export default SearchPage; 