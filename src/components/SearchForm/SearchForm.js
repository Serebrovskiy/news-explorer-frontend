import React from 'react';
import './SearchForm.css';

function SearchForm({ onSearchArticles, onResultNews }) {

  const [request, setRequest] = React.useState('');
  const [error, setError] = React.useState(false);


  function handleInputSearchChange(evt) {
    setError(false);
    setRequest(evt.target.value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (request !== '') {
      onSearchArticles(request);
      onResultNews();
      setRequest('');
    };
  }

  function showError() {
    (request === '') ? setError(true) : setError(false);
  }

  //стираем ошибку через 2 сек
  // React.useEffect(() => {
  //   setTimeout(setError, 2000);
  // }, [error]);

  return (
    <form className="searchForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="searchForm__input"
        onChange={handleInputSearchChange}
        placeholder={`${error ? "" : "Введите тему новости"}`}
        value={request}
        required
      />
      <button type="submit" className="searchForm__button" onClick={showError}>Искать</button>
      {error && <span className="searchPage__message-error">Нужно ввести ключевое слово</span>}
    </form>
  );
}

export default SearchForm;