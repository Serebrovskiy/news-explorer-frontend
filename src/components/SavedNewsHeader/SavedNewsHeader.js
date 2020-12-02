import React from 'react';
import './SavedNewsHeader.css';

function SavedNewsHeader({ savedArticleList, currentUser }) {
  const [savedKeywords, setSavedKeywords] = React.useState([]);

  React.useEffect(() => {

    let startKeywords = savedArticleList.map(el => el.keyword);
    let sortedObjects = [];
    let sortedKeywords = [];
    let finishedKeywords = [];

    //создаем массив объектов определяя колическтво повторов у каждого слова
    for (let i = 0; i < startKeywords.length; i++) {
      const obj = {
        name: startKeywords[i],    // ключевые слова
        reped: 0                   // количество повторяемых слов
      };
      sortedObjects.push(obj);

      sortedObjects.forEach(el => {
        if (el.name === startKeywords[i]) el.reped += 1;
      })
    };

    //сортируем массив объектов по кол-ву повторяемых слов
    sortedObjects.sort((a, b) => {
      if (a.reped < b.reped) return 1;
      if (a.reped > b.reped) return -1;
      return 0;
    });

    //оставляем только ключ. слова
    sortedKeywords = sortedObjects.map(el => el.name);

    //убираем повторяемые слова
    finishedKeywords = sortedKeywords.filter(function (item, pos) {
      return sortedKeywords.indexOf(item) === pos;
    });

    setSavedKeywords(finishedKeywords);

  }, [savedArticleList]);

  return (
    <section className="savedNewsHeader">
      <h3 className="savedNewsHeader__subtitle">Сохранённые статьи</h3>
      <h1 className="savedNewsHeader__title">
        {currentUser.name ? currentUser.name : "Пользователь"}, у вас&nbsp;{savedArticleList.length}
        {`${savedArticleList.length === 1 ? ' сохранённая статья' : ' сохранённых статей'}`}
      </h1>
      {savedKeywords.length === 0 && <span className="savedNewsHeader__keyword">&nbsp;</span>}
      {
        savedKeywords.length > 0 && <p className="savedNewsHeader__keywords-text"> По ключевым словам:&nbsp;
          {savedKeywords.length === 1 &&
            <span className="savedNewsHeader__keyword">
              {savedKeywords[0]}
            </span>
          }
          {savedKeywords.length === 2 &&
            <span className="savedNewsHeader__keyword">
              {savedKeywords[0]}  и  {savedKeywords[1]}
            </span>
          }
          {savedKeywords.length === 3 &&
            <span className="savedNewsHeader__keyword">
              {savedKeywords[0]}, {savedKeywords[1]}  и  {savedKeywords[2]}
            </span>
          }
          {savedKeywords.length > 3 &&
            <span className="savedNewsHeader__keyword">
              {savedKeywords[0]}, {savedKeywords[1]} и {savedKeywords.length - 2}-м другим
            </span>
          }
        </p>
      }
    </section>
  );
}

export default SavedNewsHeader;