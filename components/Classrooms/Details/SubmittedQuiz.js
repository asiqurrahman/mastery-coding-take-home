import {useState, useMemo } from "react";
import Quiz from "components/Quiz/Quiz";
import gradeQuiz from "Functions/gradeQuiz";
const SubmittedQuiz = ({ quiz }) => {
  const [showScore, setShowScore] = useState(false);

  const grad = useMemo(() => {
    return gradeQuiz(quiz.questions);
  }, [quiz]);

  return (
    <div
      className="quiz-container complete"
      onClick={() => setShowScore(!showScore)}
    >
      <div className="quiz-info">
        <div>
          <h2>{quiz.title}</h2>
          <h3>Total questions: {quiz.questions.length}</h3>
        </div>
        <div>
          <p>Completed</p>
        </div>
      </div>
      {showScore && (
        <div className="completed-quiz">
          <div className="score">
            <h2>Score: {grad.percentage}%</h2>
            <h3>
              You got {grad.amountCorrect} / {grad.amountOfQuestions} questions
              correct
            </h3>
          </div>
          <Quiz questions={quiz.questions} completed={true} />
        </div>
      )}
    </div>
  );
};

export default SubmittedQuiz;
