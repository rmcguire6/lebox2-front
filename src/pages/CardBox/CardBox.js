import {useEffect} from 'react';
import {connect} from 'react-redux';
import {loadCards} from '../../store/cards/actions';

import FlashCard from '../../components/FlashCard/FlashCard';
export const CardBox = ({loadCards, cards}) => {
  useEffect(() => {
    loadCards();
  }, [loadCards]);
  return (
    <>
      <h2>Cards</h2>
      <ul>
        {cards.map(card => (
          <FlashCard key={card.cardId} question={card.question} />
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = state => ({
  cards: state.cards.records,
});
const mapDispatchToProps = {loadCards};
export default connect(mapStateToProps, mapDispatchToProps)(CardBox);
