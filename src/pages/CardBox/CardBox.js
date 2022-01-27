import {useEffect} from 'react';
import {connect} from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import {loadCards} from '../../store/cards/actions';

import FlashCard from '../../components/FlashCard/FlashCard';
export const CardBox = ({loadCards, cards, loading}) => {
  useEffect(() => {
    loadCards();
  }, [loadCards]);
  return (
    <>
      <h2>Cards</h2>
      {loading && <CircularProgress data-testid="loading-indicator" />}
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
  loading: state.cards.loading,
});
const mapDispatchToProps = {loadCards};
export default connect(mapStateToProps, mapDispatchToProps)(CardBox);
