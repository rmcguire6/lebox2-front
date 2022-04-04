import {useState} from 'react';
import FlashCard from '../components/FlashCard';

const CardBox = props => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <div className="cards-list">
        <FlashCard {...props.cards[currentIndex]} />
      </div>
    </>
  );
};
export default CardBox;
