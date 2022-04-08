import {useState} from 'react';
import FlashCard from '../components/FlashCard';

const CardBox = props => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const message = 'try to remember, then click';

  return (
    <>
      <div className="cards-list">
        <FlashCard {...props.cards[currentIndex]} />
        <p className="message">{message}</p>
      </div>
    </>
  );
};
export default CardBox;
