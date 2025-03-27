const BASE_URL = process.env.REACT_APP_BASE_URL;

export const endpoints = {
    GET_SERIES: BASE_URL + "/getSeries",
    GET_CARDS: BASE_URL + "/getCards",
    GET_CONTENT: BASE_URL + "/getContent",
}