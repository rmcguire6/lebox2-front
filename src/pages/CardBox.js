import {useContext, useEffect, useState} from 'react';
import FlashCard from '../components/FlashCard';
import FinalScreen from '../components/FinalScreen';
import ActionBox from '../components/ActionBox';
import {AuthContext} from 'App';
import {updateCard} from 'services/api';

const CardBox = props => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numberOfCards, setNumberOfCards] = useState(0);
  const [isQuestionVisible, setIsQuestionVisible] = useState(true);
  const [showEndMessage, setShowEndMessage] = useState(false);
  const {token} = useContext(AuthContext);

  useEffect(() => {
    setNumberOfCards(props.cards.length);
  }, [numberOfCards, props.cards]);
  const handleClick = () => {
    setIsQuestionVisible(v => !v);
  };
  const handleYes = () => {
    setIsQuestionVisible(v => !v);
    const currentCard = props.cards[currentIndex];
    if (currentCard.level < 7)
      currentCard.level = currentCard.level + 1;
    updateCard(token, currentCard)
      .then(({data}) => console.log('returned', data))
      .catch(err => console.log('error', err));
    if (numberOfCards - 1 > currentIndex) {
      setCurrentIndex(c => c + 1);
    } else {
      setShowEndMessage(true);
    }
  };
  const handleNo = () => {
    setIsQuestionVisible(v => !v);
    const currentCard = props.cards[currentIndex];
    currentCard.level = 1
    updateCard(token, currentCard)
      .then(({data}) => console.log('returned', data))
      .catch(err => console.log('error', err));
  };
  return (
    <>
      <div className="cards">
        {showEndMessage ? (
          <FinalScreen number={numberOfCards} />
        ) : (
          <>
            <span className="message">
              Number of cards left: {numberOfCards - currentIndex}
            </span>
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
              <ActionBox handleNo={handleNo} handleYes={handleYes} />
            )}
          </>
        )}
      </div>
    </>
  );
};
export default CardBox;
