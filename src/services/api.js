import axios from 'axios';
const client = axios.create({
  baseURL: 'http://localhost:8000',
});
export const saveCard = card => client.post('/test_cards/', card);

export const loadCards = token =>
  client.get('/cards/', {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });

export const updateCard = card_id => client.put(`/test_cards/{card_id}`);

export const saveUser = ({username, email, password}) =>
  client.post('/users/', {username, email, password, cards_per_day: 0});

export const signInUser = formData =>
  client.post('/login/', formData, {
    headers: {
      'Content-type': 'multipart/form-data',
    },
  });
