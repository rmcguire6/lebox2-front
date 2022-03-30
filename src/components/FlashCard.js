import {useState} from 'react';

export const FlashCard = ({answer, question}) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    setIsAnswerVisible(v => !v);
  };
  const handleCorrect = e => {
    e.preventDefault();
  };
  const handleWrong = () => {
    setIsAnswerVisible(false);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        {isAnswerVisible ? <p>{answer}</p> : <p>{question}</p>}

        <button type="submit" className="answer-submit-button">
          {isAnswerVisible ? 'Correct?' : 'Answer'}
        </button>
      </form>
      {isAnswerVisible && (
        <>
          <div>
            <form onSubmit={handleCorrect}>
              <button type="submit">Yes</button>
            </form>

            <form onSubmit={handleWrong}>
              <button type="submit">No</button>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default FlashCard;
