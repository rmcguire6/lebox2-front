import '../App.css';
export const NewCardForm = ({
  handleNewCardChange,
  handleNewCardSubmit,
  newCard,
}) => {
  return (
    <>
      <h2>Add a Card</h2>
      <form className="newCard" onSubmit={handleNewCardSubmit}>
        <input
          type="text"
          name="question"
          value={newCard.question}
          className="question"
          autoFocus
          onChange={handleNewCardChange}
          placeholder="Add a Question"
        />
        <br />
        <input
          type="text"
          name="answer"
          value={newCard.answer}
          className="answer"
          onChange={handleNewCardChange}
          placeholder="Add an Answer"
        />
        <br />
        <button className="newCard_button">Submit</button>
      </form>
    </>
  );
};

export default NewCardForm;
