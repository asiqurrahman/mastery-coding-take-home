import Choices from "./Choices";
const Quiz = ({ questions, setAnswer, submitQuiz, completed}) => {
  return (
    <form onSubmit={(e) => submitQuiz(e)}>
      {questions?.map((question, index) => (
        <div
          className={`question ${
            question.userAnswer === null ? "not-answered" : " "
          }`}
          key={question.id}
        >
          <div className="question-title">
            <h3>
              {index + 1}: {question.content}
            </h3>
          </div>
          <Choices
            choices={question?.choices}
            id={index}
            setAnswer={setAnswer}
          />
          {completed && (
            <h3
              className={question.answeredCorrect ? "correct" : "wrong"}
            >{`Answered ${question.answeredCorrect ? "Correct" : "Wrong"}`}</h3>
          )}
        </div>
      ))}
      {!completed && (
        <div className="submit">
          <button>Submit</button>
        </div>
      )}
    </form>
  );
};

export default Quiz;
