import '../App.css';

export const FinalScreen = props => {
  return (
    <div className="container">
      <p>Congratulations {props.user.username}!</p>
      <p className="final-message">
        You answered{' '}
        {props.number > 1 ? (
          <span>{props.number} cards</span>
        ) : (
          <span>{props.number} card </span>
        )}{' '}
        correctly.
      </p>
      <p>Remember to memorize again tomorrow!</p>
    </div>
  );
};
export default FinalScreen;
