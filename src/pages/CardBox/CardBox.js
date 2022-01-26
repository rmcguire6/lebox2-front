import {useEffect} from 'react';
import {connect} from 'react-redux';
import {loadCards} from '../../store/cards/actions';

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

const mapStateToProps = state => ({
  cards: state.cards.records,
});
const mapDispatchToProps = {loadCards};
export default connect(mapStateToProps, mapDispatchToProps)(CardBox);
