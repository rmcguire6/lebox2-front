import FlashCard from '../components/FlashCard';

const CardBox = props => (
  <ul className="cards-list">
    {props.cards.map(card => (
      <FlashCard question={card.question} />
    ))}
  </ul>
);

export default CardBox;
