import axios from 'axios';
const client = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});
export const saveCard = (token, card) =>
  client.post('/cards/', card, {headers: {Authorization: 'Bearer ' + token}});

export const loadCards = token =>
  client.get('/cards/', {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });

export const updateCard = (token, card) =>
  client.put(`/cards/${card.card_id}`, card, {
    headers: {Authorization: 'Bearer ' + token},
  });

export const saveUser = ({username, email, password}) =>
  client.post('/users/', {username, email, password});

export const signInUser = formData =>
  client.post('/login/', formData, {
    headers: {
      'Content-type': 'multipart/form-data',
    },
  });

export const getUser = id => client.get(`/users/${id}/`);

export const updateUser = (id, updates) => client.put(`/users/${id}/`, updates);
