import {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {loadCards} from '../store/cards/actions';
import FlashCard from '../components/FlashCard';

export const CardBox = ({loadCards, cards, loading, loadError}) => {
  const [numberCorrect, setNumberCorrect] = useState(0);
  useEffect(() => {
    loadCards();
  }, [loadCards]);
  const handleCorrect = e => {
    e.preventDefault();
    setNumberCorrect(previous => previous + 1);
  };
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
              handleCorrect={handleCorrect}
            />
          );
        })}
      </ul>
      {numberCorrect > 0 ? (
        <>
          <h3>Cards Answered Correctly</h3>
          <p>{numberCorrect}</p>
        </>
      ) : (
        <></>
      )}
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
