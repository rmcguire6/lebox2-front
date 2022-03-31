export const NewCardForm = ({
  handleNewCardChange,
  handleNewCardSubmit,
  newCard,
}) => {
  return (
    <form onSubmit={handleNewCardSubmit}>
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
      <button>Answer</button>
    </form>
  );
};

export default NewCardForm;
