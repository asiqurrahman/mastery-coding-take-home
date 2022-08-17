
const Choices = ({choices, id, setAnswer}) => {
  return (
    <div className="choices">
      {choices.map((choice, index) => (
        <div key={index}>
          <label>
            <input type="radio" name={`answer-${id}`} onClick={() => setAnswer(id, choice.id)}/>
            <span className="label-text">{choice.content}</span>
          </label>
        </div>
      ))}
    </div>
  );
}

export default Choices