import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export const FlashCard = ({answer, question}) => (
  <>
    <Card>
      <CardContent>
        <Typography variant="h5">{question}</Typography>
        <Typography variant="h5">{answer}</Typography>
        <Button
          variant="contained"
          color="primary"
          data-testid="new-card-submit-button"
        >
          ANSWER
        </Button>
      </CardContent>
    </Card>
  </>
);
export default FlashCard;
