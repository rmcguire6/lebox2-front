import '../App.css';

export const FinalScreen = props => {
  return (
    <div className="container">
      <p>Congratulations!</p>
      <p className="final-message">
        You answered {props.number} cards correctly.
      </p>
      <p>Remember to memorize again tomorrow!</p>
    </div>
  );
};
export default FinalScreen;
