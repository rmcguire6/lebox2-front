import {useEffect} from 'react';
import Card from '../../components/Card/Card';
export const CardBox = ({loadCards, cards}) => {
  useEffect(() => {
    loadCards();
  }, [loadCards]);
  return (
    <>
      <h2>Cards</h2>
      <ul>
        {cards.map(card => (
          <Card key={card.cardId} question={card.question} />
        ))}
      </ul>
    </>
  );
};
export default CardBox;
