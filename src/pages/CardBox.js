import FlashCard from '../components/FlashCard';

const CardBox = props => {
  return (
    <>
      <ul className="cards-list">
        {props.cards.map(card => (
          <FlashCard key={card.card_id} {...card} />
        ))}
      </ul>
    </>
  );
};
export default CardBox;
