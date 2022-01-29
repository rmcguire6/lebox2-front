import {useState} from 'react';
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {createCard} from '../store/cards/actions';
export const NewCardForm = ({createCard}) => {
  const [question, setQuestion] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    createCard(question);
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        value={question}
        onChange={e => setQuestion(e.target.value)}
        placeholder="Add a Card"
        fullWidth
        variant="filled"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        data-testid="new-card-submit-button"
      >
        ADD
      </Button>
    </form>
  );
};
const mapStateToProps = null;
const mapDispatchToProps = {createCard};
export default connect(mapStateToProps, mapDispatchToProps)(NewCardForm);
