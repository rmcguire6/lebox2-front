import '../App.css';

export const FlashCard = props => {
  return (
    <>
      <button onClick={props.handleClick} className="card">
        {props.isQuestionVisible ? props.question : props.answer}
      </button>
    </>
  );
};

export default FlashCard;
