import {useState} from 'react';
import {connect} from 'react-redux';
import Box from '@material-ui/core/Box';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import {createCard} from '../store/cards/actions';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
export const NewCardForm = ({createCard}) => {
  const classes = useStyles();
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
        <Alert severity="error">
          The card could not be saved. Please try again.
        </Alert>
      )}
      {validationError && <Alert severity="error">Question is required</Alert>}
      <Box display="flex" className={classes.root}>
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
      </Box>
    </form>
  );
};
const mapStateToProps = null;
const mapDispatchToProps = {createCard};
export default connect(mapStateToProps, mapDispatchToProps)(NewCardForm);
