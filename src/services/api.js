import axios from 'axios';

export const saveCard = card =>
  axios.post('http://localhost:3000/api/cards', card);
