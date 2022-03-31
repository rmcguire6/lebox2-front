export const NewCardForm = ({handleNewCardChange, newCard}) => {
  return (
    <form>
      <input
        className="question"
        type="text"
        value={newCard.question}
        autoFocus
        onChange={handleNewCardChange}
        placeholder="Add a Question"
      />
      <br />
      <input type="text" placeholder="Add an Answer" />
    </form>
  );
};

export default NewCardForm;
