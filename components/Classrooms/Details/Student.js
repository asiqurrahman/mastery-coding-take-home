import Quiz from "components/Quiz/Quiz";
import {useState, useMemo } from "react";
import gradeQuiz from "Functions/gradeQuiz";
const Student = ({ student }) => {
  const [showScore, setShowScore] = useState(false);

  const grad = useMemo(() => {
    if(student.results[0]){
        return gradeQuiz(student.results[0].questions);
    }
  }, [student]);

    console.log(student)
  const show = () => {
    if (student.results[0]) {
      setShowScore(!showScore);
    }
  };
  return (
    <div
      onClick={() => show()}
      key={student?.id}
      className={
        student?.results[0] ? "student completed" : " student not-completed"
      }
    >
      <div className="basic-info">
        <h2>
          {student?.firstname} {student?.lastname}
        </h2>
        <h2>{student?.results[0] ? "submitted" : "Not Submitted"}</h2>
      </div>
      {showScore && (
        <div className="completed-quiz">
          <h2>Student Received {grad.percentage}%</h2>
          <h2>They answered {grad.amountCorrect} / {grad.amountOfQuestions} questions correct</h2>
          <hr />
          <Quiz questions={student.results[0].questions} completed={true} />
        </div>
      )}
    </div>
  );
};

export default Student;
