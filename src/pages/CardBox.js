import FlashCard from '../components/FlashCard';

const CardBox = props => (
  <ul>
    {props.cards.map(card => (
      <FlashCard />
    ))}
  </ul>
);

export default CardBox;
