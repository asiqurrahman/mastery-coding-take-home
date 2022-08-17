
const Choices = ({choices, id, setAnswer}) => {
  return (
    <div className="choices">
      {choices.map((choice) => (
        <div>
          <label>
            <input type="radio" name={`answer-${id}`} onClick={() => setAnswer(id, choice.id)}/>
            <span class="label-text">{choice.content}</span>
          </label>
        </div>
      ))}
    </div>
  );
}

export default Choices