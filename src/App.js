import {useState} from 'react';
import {saveCard} from './services/api';
import CardBox from './pages/CardBox';
import NewCardForm from './components/NewCardForm';
const App = () => {
  const [cards, setCards] = useState([]);
  const [newCard, setNewCard] = useState({question: ''});
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
