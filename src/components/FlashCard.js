export const FlashCard = props => {
  return (
    <>
      <li>
        {props.question}
        {props.answer}
      </li>
    </>
  );
};

export default FlashCard;
