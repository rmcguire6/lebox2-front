import {useState} from 'react';
export const FlashCard = ({answer, question}) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    setIsAnswerVisible(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>{question}</p>
        {isAnswerVisible ? (
          <>
            <p>{answer}</p>
            <p>Correct?</p>
          </>
        ) : (
          <button type="submit" data-testid="answer-submit-button">
            Answer
          </button>
        )}
      </form>
      {isAnswerVisible && (
        <form>
          <button type="submit">Yes</button>
          <button type="submit">No</button>
        </form>
      )}
    </>
  );
};
export default FlashCard;
