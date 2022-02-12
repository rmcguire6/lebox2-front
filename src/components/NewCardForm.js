import {useState} from 'react';
import {connect} from 'react-redux';
import {createCard} from '../store/cards/actions';

export const NewCardForm = ({createCard}) => {
  // const classes = useStyles();
  const [question, setQuestion] = useState('');
  const [validationError, setValidationError] = useState(false);
  const [serverError, setServerError] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    if (question) {
      setValidationError(false);
      setServerError(false);
      createCard(question)
        .then(() => {
          setQuestion('');
        })
        .catch(() => {
          setServerError(true);
        });
    } else {
      setValidationError(true);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      {serverError && (
        <p severity="error">The card could not be saved. Please try again.</p>
      )}
      {validationError && <p severity="error">Question is required</p>}
      <input
        value={question}
        onChange={e => setQuestion(e.target.value)}
        placeholder="Add a Card"
      />
      <button data-testid="new-card-submit-button">ADD</button>
    </form>
  );
};
const mapStateToProps = null;
const mapDispatchToProps = {createCard};
export default connect(mapStateToProps, mapDispatchToProps)(NewCardForm);
