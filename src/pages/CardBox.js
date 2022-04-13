import {useState} from 'react';
import FlashCard from '../components/FlashCard';

const CardBox = props => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isQuestionVisible, setIsQuestionVisible] = useState(true);
  const handleClick = () => {
    setIsQuestionVisible(v => !v);
  };
  return (
    <>
      <div className="cards-list">
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
      </div>
    </>
  );
};
export default CardBox;
