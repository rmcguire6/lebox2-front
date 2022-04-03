import {useState, useEffect} from 'react';
import {saveCard, loadCards} from './services/api';
import CardBox from './pages/CardBox';
import NewCardForm from './components/NewCardForm';

const App = () => {
  const [cards, setCards] = useState([]);
  const [newCard, setNewCard] = useState({question: '', answer: ''});
  const [loadingError, setLoadingError] = useState(false);

  useEffect(() => {
    loadCards()
      .then(({data}) => setCards(data))
      .catch(() => setLoadingError(true));
  });
  const handleNewCardChange = e => {
    const {name, value} = e.target;
    setNewCard({
      ...newCard,
      [name]: value,
    });
  };

  const handleNewCardSubmit = e => {
    e.preventDefault();
    saveCard(newCard).then(({data}) =>
      setCards(previousState => {
        return {...previousState, data};
      }),
    );
  };

  return (
    <>
      <h1>Welcome to the Leitner Box</h1>
      {loadingError ? <span className="error">Cards didn't load</span> : null}
      <CardBox cards={cards} />
      <NewCardForm
        newCard={newCard}
        handleNewCardChange={handleNewCardChange}
        handleNewCardSubmit={handleNewCardSubmit}
      />
    </>
  );
};
export default App;
