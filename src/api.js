import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:8000',
});
const api = {
  loadCards() {
    return client.get('/test_cards/').then(response => response.data);
  },
};

export default api;
