import {useState} from 'react';
import {saveCard} from './services/api';
import CardBox from './pages/CardBox';
import NewCardForm from './components/NewCardForm';
const App = () => {
  const [cards, setCards] = useState([]);
  const [newCard, setNewCard] = useState({question: ''});
  const handleNewCardChange = e => {
    setNewCard({question: e.target.value});
  };
  const handleNewCardSubmit = e => {
    e.preventDefault();
    setNewCard(previousState => {
      return {...previousState, answer: '?'};
    });
    console.log(newCard);
    saveCard(newCard).then(({data}) =>
      setCards(previousState => {
        return {...previousState, newCard};
      }),
    );
  };
  return (
    <>
      <h1>Welcome to the Leitner Box</h1>
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
