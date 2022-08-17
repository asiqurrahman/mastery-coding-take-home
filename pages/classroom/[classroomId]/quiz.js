import { getSession } from "next-auth/react";
import Quiz from "components/Quiz/Quiz";
import { quiz } from "quiz";
import { StyledQuiz } from "components/Styles/Quiz.Styles";
import { useState, useEffect } from "react";
import { submit } from "routes";
import { useRouter } from "next/router";
import { fetchUser } from "routes/READ/fetchUser";
const QuizPage = ({ session, classroomId }) => {

  const router = useRouter();

  const [currentQuiz, setCurrentQuiz] = useState([]);
  const [AllNotAnswered, setAllNotAnswered] = useState(false);

  useEffect(() => {
    let obj = quiz;
    obj.classroomId = classroomId;
    setCurrentQuiz(obj);
  }, [quiz]);

  const setAnswer = (id, choice) => {
    let obj = currentQuiz.questions[id];
    obj.answer = choice;
  };

  const submitQuiz = async (e) => {
    e.preventDefault();
    try {
      // checks to see if every question has been answered
      let allAnswered = currentQuiz.questions.every(
        (question) => question.answer
      );

      //sets not answered state to true
      if (!allAnswered) {
        setAllNotAnswered(true);
        window.scroll({ top: 0, behavior: "smooth" }); // scrolls to top of page to show error
        return;
      }

      // Checks if answers are correct
      let graded = currentQuiz.questions.map((question) => {
        let correctAnswer = question.choices.find((x) => x.isCorrect === true);
        let userAnswer = question.answer;
        if (correctAnswer.id === userAnswer) {
          question.answeredCorrect = true;
        } else {
          question.answeredCorrect = false;
        }
      });
      const response = await submit(session.info.id, currentQuiz, session);
      if(response){
        router.push(`/classroom/${classroomId}`);
      }
    } catch(error){
      alert('something went wrong')
    }
  };

  return (
    <StyledQuiz>
      <div className="quiz-container">
        <h1>{currentQuiz.title}</h1>
        {AllNotAnswered && (
          <div className="not-answered">
            <h2>All Questions Must Be Answered</h2>
          </div>
        )}
        <Quiz
          questions={currentQuiz.questions}
          setAnswer={setAnswer}
          submitQuiz={submitQuiz}
        />
      </div>
    </StyledQuiz>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  
  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  //route protection if student already took quiz
  if (session && session.info.userType == "STUDENT") {
    const student = await fetchUser(session.info.id);
    if (student.results.length > 0) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
  }

  const { query } = context;
  const { classroomId } = query;

  return {
    props: { session, classroomId },
  };
}

export default QuizPage;
