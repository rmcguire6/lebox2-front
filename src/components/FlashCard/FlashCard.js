import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export const FlashCard = ({question}) => (
  <>
    <Card>
      <CardContent>
        <Typography variant="h5">{question}</Typography>
      </CardContent>
    </Card>
  </>
);
export default FlashCard;
