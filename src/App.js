import {useState, useEffect} from 'react';
import {loadCards, saveCard} from './services/api';
import CardBox from './pages/CardBox';
import NewCardForm from './components/NewCardForm';
import './App.css';
const App = () => {
  const [cards, setCards] = useState([]);
  const [newCard, setNewCard] = useState({question: '', answer: ''});
  const [loadingError, setLoadingError] = useState('');
  const [submissionError, setSubmissionError] = useState('');
  useEffect(() => {
    loadCards()
      .then(({data}) => setCards(data))
      .catch(() => setLoadingError('Cards did not load'));
  }, []);
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
    console.log(newCard);
    saveCard(newCard)
      .then(({data}) => setCards(previousState => previousState.concat(data)))
      .catch(() => setSubmissionError('New card submission failed'));
    setNewCard({question: '', answer: ''});
  };

  return (
    <>
      <div className="container">
        <h1>Welcome to the Leitner Box</h1>
        {loadingError ? (
          <span className="loading-error">{loadingError}</span>
        ) : (
          <CardBox cards={cards} />
        )}
        <NewCardForm
          newCard={newCard}
          handleNewCardChange={handleNewCardChange}
          handleNewCardSubmit={handleNewCardSubmit}
        />
        {submissionError ? (
          <span className="submission-error">{submissionError}</span>
        ) : null}
      </div>
    </>
  );
};
export default App;
