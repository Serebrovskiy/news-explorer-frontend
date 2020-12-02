import {
  BASE_URL_PROXY,
  API_KEY,
  DATE_TO,
  DATE_FROM,
  PAGE_SIZE,
} from './config';


export const getNewsArticles = (request) => {

  return fetch(`${BASE_URL_PROXY}?q=${request}&apiKey=${API_KEY}&from=${DATE_FROM}&to=${DATE_TO}&pageSize=${PAGE_SIZE}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(new Error("Что-то пошло не так"));
    });
};