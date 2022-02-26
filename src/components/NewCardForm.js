import {useState} from 'react';
import {connect} from 'react-redux';
import {createCard} from '../store/cards/actions';

export const NewCardForm = ({createCard}) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [validationError, setValidationError] = useState(false);
  const [serverError, setServerError] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    if (question && answer) {
      setValidationError(false);
      setServerError(false);
      createCard(question, answer)
        .then(() => {
          setQuestion('');
          setAnswer('');
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
      {serverError && <p>The card could not be saved. Please try again.</p>}
      {validationError && <p>Question and answer are required</p>}
      <input
        value={question}
        onChange={e => setQuestion(e.target.value)}
        placeholder="Add a Question"
      />
      <br />
      <input
        value={answer}
        onChange={e => setAnswer(e.target.value)}
        placeholder="Add an Answer"
      />
      <button data-testid="new-card-submit-button">ADD</button>
    </form>
  );
};
const mapStateToProps = null;
const mapDispatchToProps = {createCard};
export default connect(mapStateToProps, mapDispatchToProps)(NewCardForm);
