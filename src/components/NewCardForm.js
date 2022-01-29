import {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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
export default NewCardForm;
