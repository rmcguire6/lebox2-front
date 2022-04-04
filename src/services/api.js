import axios from 'axios';
const client = axios.create({
  baseURL: 'http://localhost:8000',
});
export const saveCard = card => client.post('/test_cards/', card);

export const loadCards = () => client.get('/test_cards/');
