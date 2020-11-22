import React from 'react';
import './SearchForm.css';

function SearchForm({ onLaunchPreloader }) {
  return (
    <div className="searchForm">
     <input type="text" className="searchForm__input" placeholder="Введите тему новости" />
     <button type="button" className="searchForm__button" onClick={onLaunchPreloader}>Искать</button>
    </div>
  );
}

export default SearchForm;