import axios from 'axios';
const client = axios.create({
  baseURL: 'http://localhost:8000',
});
export const saveCard = card => client.post('/test_cards/', card);

export const loadCards = () => client.get('/test_cards/');

export const updateCard = card_id => client.put(`/test_cards/{card_id}`);
