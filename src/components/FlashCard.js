import {useState} from 'react';
import {Box, Button, Typography} from '@material-ui/core';
export const FlashCard = ({answer, question}) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    setIsAnswerVisible(true);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5">{question}</Typography>
      {isAnswerVisible && (
        <>
          <Typography variant="h5">{answer}</Typography>
          <Box>
            <Typography variant="h6">Correct?</Typography>
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              size="small"
              data-testid="yes-submit-button"
            >
              YES
            </Button>
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              size="small"
              data-testid="no-submit-button"
            >
              NO
            </Button>
          </Box>
        </>
      )}
      <Button
        type="submit"
        variant="outlined"
        color="primary"
        size="small"
        data-testid="answer-submit-button"
      >
        ANSWER
      </Button>
    </form>
  );
};
export default FlashCard;
