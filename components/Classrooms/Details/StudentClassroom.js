import { StyledStudentRoom } from "components/Styles/StudentClassroom.Styles";
import { useEffect, useState, useMemo} from "react";
import { quiz } from "quiz";
import Link from "next/link";
import Quiz from "components/Quiz/Quiz";
import SubmittedQuiz from "./SubmittedQuiz";

const StudentClassroom = ({ classroom, student }) => {
  const [quizComplete, setQuizComplete] = useState(false);
  const [showScore, setShowScore] = useState(false)

  useEffect(() => {
    const quiz = student.results;
    if (quiz.length > 0) {
      setQuizComplete(true);
    }
  }, [student]);
  
  return (
    <StyledStudentRoom>
      <div className="student-classroom">
        <h1>Welcome to class {student.firstname}</h1>
        <h2 style={{ marginTop: "20px" }}>Quizes:</h2>
        {quizComplete ? (
          <SubmittedQuiz quiz={student.results[0]}/>
        ) : (
          <Link href={`/classroom/${classroom}/quiz`}>
            <div className="quiz-container not-complete">
              <div>
                <h2>{quiz.title}</h2>
                <h3>Total questions: {quiz.questions.length}</h3>
              </div>
              <div>
                <p>Not Submitted</p>
              </div>
            </div>
          </Link>
        )}
      </div>
    </StyledStudentRoom>
  );
};

export default StudentClassroom;
