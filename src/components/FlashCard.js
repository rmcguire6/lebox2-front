import {useState} from 'react';
export const FlashCard = ({answer, question, handleCorrect}) => {
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
        <>
          <form onSubmit={handleCorrect}>
            <button type="submit">Yes</button>
          </form>
          <form>
            <button type="submit">No</button>
          </form>
        </>
      )}
    </>
  );
};

export default FlashCard;
