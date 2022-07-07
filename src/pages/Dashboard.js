import {useContext, useState, useEffect} from 'react';
import jwt_decode from 'jwt-decode';
import {getUser, loadCards, saveCard} from '../services/api';
import CardBox from './CardBox';
import NewCardForm from '../components/NewCardForm';
import {AuthContext} from 'App';

const Dashboard = () => {
  const [user, setUser] = useState({});
  const [cards, setCards] = useState([]);
  const [newCard, setNewCard] = useState({
    subject: '',
    question: '',
    answer: '',
  });
  const [loadingError, setLoadingError] = useState('');
  const [submissionError, setSubmissionError] = useState('');
  const {token} = useContext(AuthContext);

  useEffect(() => {
    const decodedToken = jwt_decode(token);
    const user_id = decodedToken.user_id;
    getUser(user_id)
      .then(({data}) => setUser(data))
      .catch(err => console.log('err', err));
    loadCards(token)
      .then(({data}) => setCards(data))
      .catch(() => setLoadingError('Cards did not load'));
    }, [token]);
  useEffect(() => {
    setCards(cards);
  }, [cards]);

  const handleNewCardChange = e => {
    const {name, value} = e.target;
    setNewCard({
      ...newCard,
      [name]: value,
    });
  };

  const handleNewCardSubmit = e => {
    e.preventDefault();
    saveCard(token, newCard)
      .then(({data}) => setCards(previousState => previousState.concat(data)))
      .catch(() => setSubmissionError('New card submission failed'));
    setNewCard({subject: '', question: '', answer: ''});
  };

  return (
    <>
      {loadingError ? (
        <span className="loading-error">{loadingError}</span>
      ) : (
        <CardBox cards={cards} user={user} />
      )}
      <NewCardForm
        newCard={newCard}
        handleNewCardChange={handleNewCardChange}
        handleNewCardSubmit={handleNewCardSubmit}
      />
      {submissionError ? (
        <span className="submission-error">{submissionError}</span>
      ) : null}
    </>
  );
};
export default Dashboard;
