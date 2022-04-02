import axios from 'axios';

export const saveCard = card =>
  axios.post('http://localhost:3000/api/cards', card);

export const loadCards = () => axios.get('http://localhost:3000/api/cards');
