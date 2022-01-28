import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
export const NewCardForm = () => {
  return (
    <form>
      <TextField placeholder="Add a Card" fullWidth variant="filled" />
      <Button variant="contained" color="primary">
        ADD
      </Button>
    </form>
  );
};
export default NewCardForm;
