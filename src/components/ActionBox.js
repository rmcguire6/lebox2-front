import '../App.css';

export const ActionBox = props => {
  return (
    <div className="container">
      <div className="box">
        <button className="no card red" onClick={props.handleNo}>
          No, try again
        </button>
        <button className="yes card green" onClick={props.handleYes}>
          Yes, I did!
        </button>
      </div>
    </div>
  );
};

export default ActionBox;
