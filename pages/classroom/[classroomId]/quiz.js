import Quiz from "components/Quiz/Quiz";
import { quiz } from "quiz";

const QuizPage = () => {
  return (
    <div className="layout">
      <Quiz quiz={quiz} />
    </div>
  );
};

export default QuizPage;
