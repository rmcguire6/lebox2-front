import {useEffect} from 'react';
import {connect} from 'react-redux';
import {loadCards} from '../store/cards/actions';
import FlashCard from '../components/FlashCard';

export const CardBox = ({loadCards, cards, loading, loadError, deleteCard}) => {
  useEffect(() => {
    loadCards();
  }, [loadCards]);

  return (
    <>
      <h2>Cards</h2>
      {loading && <p data-testid="loading-indicator">Loading...</p>}
      {loadError && <p>Cards could not be loaded.</p>}
      <ul>
        {cards.map(card => {
          return (
            <FlashCard
              key={card.card_id}
              answer={card.answer}
              question={card.question}
            />
          );
        })}
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
