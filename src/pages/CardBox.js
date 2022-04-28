import {useEffect, useState} from 'react';
import {updateCard} from '../services/api';
import FlashCard from '../components/FlashCard';
import FinalScreen from '../components/FinalScreen';
import ActionBox from '../components/ActionBox';

const CardBox = props => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numberOfCards, setNumberOfCards] = useState(0);
  const [isQuestionVisible, setIsQuestionVisible] = useState(true);
  const [showEndMessage, setShowEndMessage] = useState(false)

  useEffect(() => {
    setNumberOfCards(props.cards.length);
  }, [numberOfCards, props.cards]);
  const handleClick = () => {
    setIsQuestionVisible(v => !v);
  };
  const handleYes = () => {
    setIsQuestionVisible(v => !v);
    const currentCard = props.cards[currentIndex];
    updateCard(currentCard.card_id).then(() =>
      props.setCards(
        props.cards.filter(card => card.card_id !== currentCard.card_id),
      ),
    );
    if (numberOfCards - 1> currentIndex) {
      setCurrentIndex(c => c + 1);
    } else {
      setShowEndMessage(true)
    }
  };
  return (
    <>
      <div className="cards">
        {showEndMessage? <FinalScreen number={numberOfCards}/> :
        <>
        <span className="message">Number of cards left: {numberOfCards - currentIndex}</span>
        <br />
          <FlashCard
          handleClick={handleClick}
          isQuestionVisible={isQuestionVisible}
          {...props.cards[currentIndex]}
        />
        <br />
        <span className="message">
          {isQuestionVisible
            ? 'try to remember, then click'
            : 'did you remember it?'}
        </span>
        {isQuestionVisible ? null : (
          <ActionBox handleNo={handleClick} handleYes={handleYes} />
        )}
        </>
      }
      </div>
    </>
  );
};
export default CardBox;
