import React from 'react';
import './NewsCard.css';

function NewsCard({
  article,
  iconSave,
  tooltipMessage,
  savedArticleList,
  onSavedArticles,
  onDeleteSavedArticle,
  loggedIn,
  onLogin
}) {

  //корректируем оформление даты статьи
  const datePublished =
    new Date(article.publishedAt)
      .toLocaleString('ru', {
        month: 'long',
        day: 'numeric',
      }) + ', ' +
    new Date(article.publishedAt)
      .toLocaleString('sv', {
        year: 'numeric',
      })

  function handleSavedArticle() {
    onSavedArticles(article);
  }

  function handleDeleteArticleMark() {
    const deleteArt = savedArticleList.find((el) => el.url === article.url)
    onDeleteSavedArticle(deleteArt);
  }

  function handleDeleteArticle() {
    onDeleteSavedArticle(article);
  }

  return (
    <div className="newsCard">
      {

        loggedIn
          ?
          iconSave  //меняем иконку в зависимости от раздела
            ?
            savedArticleList.some((el) => el.url === article.url)  //проверяем есть ли сохраненные в поиске
              ?
              <button //снимаем флажек с сохраненной статьи и удаляем её
                type="button"
                className="newsCard__button newsCard__button_save-mark"
                onClick={handleDeleteArticleMark}
              />
              :
              <button //сохраняем статью и залваем флажек
                type="button"
                className="newsCard__button newsCard__button_save"
                onClick={handleSavedArticle}
              />
            :
            <button //удаляем из сохраненных
              type="button"
              className="newsCard__button newsCard__button_remove"
              onClick={handleDeleteArticle}
            />
          :
          <button //отправляем на авторизацию
            type="button"
            className="newsCard__button newsCard__button_disable"
            onClick={onLogin}
          />

      }
      <div className="newsCard__tooltip">{tooltipMessage}</div>
      <div className={`${!iconSave ? "newsCard__keyword" : "newsCard__keyword_hidden"}`}>{article.keyword}</div>
      <a href={article.url} className="newsCard__link" rel="noreferrer" target="_blank">
        <img className="newsCard__image" src={article.urlToImage} alt={article.title} />
        <div className="newsCard__container">
          <p className="newsCard__date">{datePublished}</p>
          <h1 className="newsCard__title">{article.title}</h1>
          <p className="newsCard__text">{article.description}</p>
        </div>
        <p className="newsCard__source">{article.source}</p>
      </a>

    </div>
  );
}

export default NewsCard;