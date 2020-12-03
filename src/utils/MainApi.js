// export const BASE_URL = 'https://api.dipl.students.nomoreparties.space';
import { BASE_URL_MAIN } from './config';

const getResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(res);
  }
};

export const getCurrentUser = (token) => {
  return fetch(`${BASE_URL_MAIN}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
  })
    .then(getResponse)
};

export const getArticles = (token) => {
  return fetch(`${BASE_URL_MAIN}/articles`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
  })
    .then(getResponse)
};

export const createArticle = (keyword, title, text, date, source, link, image, token) => {
  return fetch(`${BASE_URL_MAIN}/articles`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ keyword, title, text, date, source, link, image })
  })
    .then(getResponse)
};

export const deleteArticle = (articleId, token) => {
  return fetch(`${BASE_URL_MAIN}/articles/${articleId}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })
    .then(getResponse)
};
