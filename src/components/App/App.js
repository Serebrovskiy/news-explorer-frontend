import './App.css';
import React, { useCallback } from 'react';
import { Route, Switch, useLocation, useHistory, Redirect, } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Register from '../Register/Register';
import Login from '../Login/Login';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import * as auth from '../../utils/Auth';
import * as news from '../../utils/NewsApi';
import * as mainNews from '../../utils/MainApi';
import { PLACEHOLDER_IMAGE, SHOW_ARTICLES_ON_PAGE } from '../../utils/config';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function App() {
  const { pathname } = useLocation();
  const history = useHistory();

  const [isOpenPopupLogin, setIsOpenPopupLogin] = React.useState(false);
  const [isOpenPopupRegister, setIsOpenPopupRegister] = React.useState(false);
  const [isOpenPopupInfo, setIsOpenPopupInfo] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [messageError, setMessageError] = React.useState('');
  const [articles, setArticles] = React.useState(JSON.parse(localStorage.getItem('articles')) || []);
  const [savedArticles, setSavedArticles] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isOpenResultNews, setIsOpenResultNews] = React.useState(false);
  const [showArticlesOnPage, setShowArticlesOnPage] = React.useState(SHOW_ARTICLES_ON_PAGE);
  const [hiddenResultSearch, setHiddenResultSearch] = React.useState(false);


  //попап авторизации
  function handleLoginClick() {
    setIsOpenPopupLogin(true);
    setIsOpenPopupRegister(false);
    setIsOpenPopupInfo(false);
  }

  //попап регистрации 
  function handleRegisterClick() {
    setIsOpenPopupRegister(true);
    setIsOpenPopupLogin(false);
  }

  //попап с информацией 
  function handleInfoClick() {
    setIsOpenPopupInfo(true);
    setIsOpenPopupRegister(false);
    setIsOpenPopupLogin(false);
  }

  //закрываем все попапы
  function closePopups() {
    setIsOpenPopupLogin(false);
    setIsOpenPopupRegister(false);
    setIsOpenPopupInfo(false);
  }

  //получаем статьи из поиска
  function handleSearchArticles(request) {
    setIsLoading(true);
    news
      .getNewsArticles(request)
      .then((res) => {
        const localStorageArticles = (res.articles.map((item, key) => ({
          id: key,
          title: item.title,
          description: item.description,
          urlToImage: item.urlToImage ? item.urlToImage : PLACEHOLDER_IMAGE,
          url: item.url,
          publishedAt: item.publishedAt,
          source: item.source.name,
          keyword: request
        })));

        setArticles(localStorageArticles);
        localStorage.setItem("articles", JSON.stringify(localStorageArticles));
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  //получаем сохраненные статьи
  const handleGetSavedArticles = useCallback(() => {
    {
      Promise.all([auth.getContent(localStorage.token), mainNews.getArticles(localStorage.token)])
        .then(res => {
          setCurrentUser(res[0]);
          return res[1].filter((elem) => elem.owner === res[0]._id ? elem : null);
        })
        .then(res => {
          setSavedArticles(res.map(item => ({
            id: item._id,
            title: item.title,
            description: item.text,
            urlToImage: item.image,
            url: item.link,
            publishedAt: item.date,
            source: item.source,
            keyword: item.keyword
          })));
        })
        .catch((err) => console.error(err));
    }
  }, []);

  //сохраняем статью
  function handleSavedArticles(article) {
    if (loggedIn) {
      mainNews
        .createArticle(
          article.keyword,
          article.title,
          article.description,
          article.publishedAt,
          article.source,
          article.url,
          article.urlToImage,
          localStorage.token,
        )
        .then((res) => {
          article = {
            id: res._id,
            title: res.title,
            description: res.text,
            urlToImage: res.image,
            url: res.link,
            publishedAt: res.date,
            source: res.source,
            keyword: res.keyword
          }
          setSavedArticles([...savedArticles, article]);
        })
        .catch((err) => console.error(err));
    }
  }

  //удаляем статью
  function handleDeleteSavedArticle(article) {
    mainNews
      .deleteArticle(article.id, localStorage.token)
      .then((articleForDelete) => {
        const newArticles = savedArticles.filter((elem) => elem.id === article.id ? null : articleForDelete
        );
        setSavedArticles(newArticles);
      })
      .catch((err) => console.error(err));
  }

  function handleRegister(password, email, name) {
    auth
      .register(password, email, name)
      .then((res) => {
        if (res.statusCode !== 400) {
          history.push('/');
          handleInfoClick();
        }
      })
      .catch((err) => {
        console.error(err);
        setMessageError(err.message);
      });
  }

  function handleLogin(password, email) {
    return auth
      .authorize(password, email)
      .then((data) => {
        if (!data) {
          throw new Error('Что-то пошло не так!');
        }
        if (data.token) {
          setLoggedIn(true);
          localStorage.setItem('token', data.token);
          tokenCheck();
        }
      })
      .then(() => {
        history.push('/saved-news')
      })
      .catch((err) => {
        setMessageError(err.message);
      });
  }

  function tokenCheck() {
    if (localStorage.token) {
      auth.getContent(localStorage.token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            history.push('/saved-news');
            handleGetSavedArticles();
            closePopups();
          } else {
            localStorage.removeItem('token')
            setLoggedIn(false)
            setCurrentUser({})
          }
        })
        .catch(err => console.error(err));
    }
  }

  //выходим из аккаунта, результат поиска не закрываем
  function onSignOut() {
    localStorage.removeItem('token');
    setLoggedIn(false);
    history.push('/');
  }

  //очищаем блок с результатами
  function onResetResultSearch() {
    setHiddenResultSearch(true)
    setTimeout(function(){
      setIsOpenResultNews(false);
      setArticles([]);
      localStorage.removeItem('articles');
    }, 2000);
  }

  //сбрасываем ошибки попапах
  const messageErrorReset = useCallback(() => {
    setMessageError('');
  }, [isOpenPopupLogin, isOpenPopupRegister]);

  React.useEffect(() => {
    tokenCheck();
    if (localStorage.articles) {
      setIsOpenResultNews(true);
    } else {
      setIsOpenResultNews(false);
    }
  }, []);

  //закрытие попапа через Escape
  React.useEffect(() => {
    const handleEscClose = (evt) => {
      if (evt.key === "Escape") closePopups();
    }
    document.addEventListener("keydown", handleEscClose);
    return () => document.removeEventListener("keydown", handleEscClose);
  }, []);

  //закрытие попапа щелчком вне формы
  React.useEffect(() => {
    const handleMouseClose = (evt) => {
      if (evt.target.classList.contains("popup_opened")) closePopups();
    }
    document.addEventListener("mousedown", handleMouseClose);
    return () => document.removeEventListener("mousedown", handleMouseClose);
  }, []);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header
          onLogin={handleLoginClick}
          pathname={pathname}
          loggedIn={loggedIn}
          onChangeLoggedIn={setLoggedIn}
          currentUser={currentUser}
          onSignOut={onSignOut}
        />
        <Login
          isOpen={isOpenPopupLogin}
          onClose={closePopups}
          onChangePopup={handleRegisterClick}
          onLogin={handleLogin}
          messageError={messageError}
          messageErrorReset={messageErrorReset}
        />
        <Register
          isOpen={isOpenPopupRegister}
          onClose={closePopups}
          onChangePopup={handleLoginClick}
          onInfoTooltip={handleInfoClick}
          onRegister={handleRegister}
          messageError={messageError}
          messageErrorReset={messageErrorReset}
        />
        <InfoTooltip
          isOpen={isOpenPopupInfo}
          onClose={closePopups}
          onLogin={handleLoginClick}
        />
        <Switch>
          <ProtectedRoute
            exact path="/saved-news"
            loggedIn={loggedIn}
            currentUser={currentUser}
            pathname={pathname}
            savedArticleList={savedArticles}
            onDeleteSavedArticle={handleDeleteSavedArticle}
            component={SavedNews}
            onChangePopup={handleLoginClick}
          />
          <Route exact path="/">
            <Main
              pathname={pathname}
              loggedIn={loggedIn}
              onSearchArticles={handleSearchArticles}
              onSavedArticles={handleSavedArticles}
              onDeleteSavedArticle={handleDeleteSavedArticle}
              savedArticleList={savedArticles}
              articleList={articles}
              setArticles={setArticles}
              isOpenResultNews={isOpenResultNews}
              setIsOpenResultNews={setIsOpenResultNews}
              showArticlesOnPage={showArticlesOnPage}
              setShowArticlesOnPage={setShowArticlesOnPage}
              isLoading={isLoading}
              onLogin={handleLoginClick}
              onResetResultSearch={onResetResultSearch}
              setHiddenResultSearch={setHiddenResultSearch}
              hiddenResultSearch={hiddenResultSearch}
            />
          </Route>
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
