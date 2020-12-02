// export const BASE_URL = 'https://api.dipl.students.nomoreparties.space';
import { BASE_URL_MAIN } from './config';

export const register = (password, email, name) => {
  return fetch(`${BASE_URL_MAIN}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password, email, name })
  })
    .then((res) => {
      if (res.status === 409) {
        throw new Error('Такой пользователь уже есть');
      }
      if (!res.ok) {
        throw new Error('Вам отказано в регистрации');
      }
      return res.json();
    })
    .then((res) => {
      return res;
    })
};

export const authorize = (password, email) => {
  return fetch(`${BASE_URL_MAIN}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password, email })
  })
    .then((res => {
      if (res.status === 400) {
        throw new Error('Введены некорректные данные');
      }
      if (res.status === 401) {
        throw new Error('Данные переданы с ошибкой или не полностью');
      }
      return res.json();
    })
    )
    .then((data) => {
      if (data.token) {
        localStorage.setItem('token', data.token);
        return data;
      } else {
        return;
      }
    })
};

export const getContent = (token) => {
  return fetch(`${BASE_URL_MAIN}/users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
    .then(res => res.json())
};