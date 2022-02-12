import {useState} from 'react';
export const FlashCard = ({answer, question}) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    setIsAnswerVisible(true);
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>{question}</p>
      {isAnswerVisible && (
        <>
          <p>{answer}</p>
          <p>Correct?</p>

          <button type="submit">YES</button>
          <button type="submit"> NO</button>
        </>
      )}
      <br />
      <button type="submit" data-testid="answer-submit-button">
        ANSWER
      </button>
    </form>
  );
};
export default FlashCard;
