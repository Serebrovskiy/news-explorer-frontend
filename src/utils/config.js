export const API_KEY = '701085ec01404ea88b3ae55407e60f9f';

//export const BASE_URL_MAIN = 'https://api.dipl.students.nomoreparties.space';
// export const BASE_URL_MAIN = 'http://localhost:3000';
export const BASE_URL_MAIN = 'https://134-0-118-249.cloudvps.regruhosting.ru';
export const BASE_URL_NEWS = 'https://newsapi.org/v2/top-headlines';
export const BASE_URL_PROXY = 'https://nomoreparties.co/news/v2/everything';

export const PLACEHOLDER_IMAGE = 'https://adhara.hr/web/wp-content/uploads/2015/05/adhara-nutricionizam-news.jpg';

export const SHOW_ARTICLES_ON_PAGE = 3;

const dateTo = new Date().toLocaleString('sv', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
});

const dateFrom = new Date(
    Date.now() - (24 * 3600 * 1000 * 7)
).toISOString().slice(0, 10);

export const DATE_TO = dateTo;
export const DATE_FROM = dateFrom;
export const PAGE_SIZE = 100;

