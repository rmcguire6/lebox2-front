import '../App.css';
export const FlashCard = props => {
  return (
    <>
      <p className="card">{props.question}</p>
    </>
  );
};

export default FlashCard;
