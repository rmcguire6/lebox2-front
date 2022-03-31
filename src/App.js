import {useState} from 'react';
import CardBox from './pages/CardBox';
import NewCardForm from './components/NewCardForm';
const App = () => {
  const [cards, setCards] = useState([]);
  const [newCard, setNewCard] = useState({question: ''});
  const handleNewCardChange = e => {
    setNewCard({question: e.target.value});
  };
  return (
    <>
      <h1>Welcome to the Leitner Box</h1>
      <CardBox cards={cards} />
      <NewCardForm
        newCard={newCard}
        handleNewCardChange={handleNewCardChange}
      />
    </>
  );
};
export default App;
