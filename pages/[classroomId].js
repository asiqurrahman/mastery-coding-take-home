import { getToken } from "next-auth/jwt";

import Classroom from "components/Classrooms/Details/Classroom";

const ClassroomPage = ({ classroom }) => {
  return <Classroom classroom={classroom} />;
};

export async function getServerSideProps(context) {
  //   const token = await getToken({ req: context.req });

  //   if (token) {
  //     return {
  //       redirect: {
  //         destination: "/",
  //         permanent: false,
  //       },
  //     };
  //   }

  const { query } = context;
  const { classroomId } = query;

  const classroom = {
    id: classroomId,
    name: "classroom name",
    students: [
      { id: "s1", name: "student 1", username: "student1" },
      { id: "s2", name: "student 2", username: "student2" },
      { id: "s3", name: "student 3", username: "student3" },
    ],
  };

  return {
    props: { classroom },
  };
}

export default ClassroomPage;
