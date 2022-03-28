import {useState} from 'react';

export const FlashCard = ({answer, question, handleCorrect, card_id}) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    setIsAnswerVisible(v => !v);
  };
  const handleWrong = e => {
    e.preventDefault();
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
            <form onSubmit={e => handleCorrect(e)}>
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
