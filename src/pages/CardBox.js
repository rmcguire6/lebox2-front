import {useState} from 'react';
import FlashCard from '../components/FlashCard';

const CardBox = props => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const message = 'try to remember, then click';

  return (
    <>
      <div className="cards-list">
        <FlashCard {...props.cards[currentIndex]} />
        <br />
        <span className="message">{message}</span>
      </div>
    </>
  );
};
export default CardBox;
