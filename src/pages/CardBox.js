import {useEffect} from 'react';
import {connect} from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';
import {loadCards} from '../store/cards/actions';
import FlashCard from '../components/FlashCard';

export const CardBox = ({loadCards, cards, loading, loadError}) => {
  useEffect(() => {
    loadCards();
  }, [loadCards]);
  return (
    <>
      <h2>Cards</h2>
      {loading && <CircularProgress data-testid="loading-indicator" />}
      {loadError && <Alert severity="error">Cards could not be loaded.</Alert>}
      <ul>
        {cards.map(card => (
          <FlashCard
            key={card.cardId}
            answer={card.answer}
            question={card.question}
          />
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = state => ({
  cards: state.cards.records,
  loading: state.cards.loading,
  loadError: state.cards.loadError,
});
const mapDispatchToProps = {loadCards};
export default connect(mapStateToProps, mapDispatchToProps)(CardBox);
