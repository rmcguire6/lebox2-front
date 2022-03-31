import {useState} from 'react';
import CardBox from './pages/CardBox';
import NewCardForm from './components/NewCardForm';
const App = () => {
  const [cards, setCards] = useState([]);
  return (
    <>
      <h1>Welcome to the Leitner Box</h1>
      <CardBox cards={cards} />
      <NewCardForm />
    </>
  );
};

export default App;
