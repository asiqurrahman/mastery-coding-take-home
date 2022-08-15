import { getSession } from "next-auth/react";

import Quiz from "components/Quiz/Quiz";
import { quiz } from "quiz";

const QuizPage = () => {
  return (
    <div>
      <div className="flex-end">
        <button
          onClick={(e) => {
            e.preventDefault();
            signOut();
          }}
        >
          Logout
        </button>
      </div>
      <Quiz quiz={quiz} />
    </div>
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

  return {
    props: session,
  };
}

export default QuizPage;
