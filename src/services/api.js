import axios from 'axios';

export const saveCard = card => axios.post('/api/cards', card);

export const loadCards = () => axios.get('/api/cards');
