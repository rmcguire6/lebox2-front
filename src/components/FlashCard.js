import {useState} from 'react';
import '../App.css';

export const FlashCard = props => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const handleClick = () => {
    setIsAnswerVisible(v => !v);
  };
  return (
    <>
      <button onClick={handleClick} className="card">
        {isAnswerVisible ? props.answer : props.question}
      </button>
    </>
  );
};

export default FlashCard;
