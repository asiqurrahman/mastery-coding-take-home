import { useState, useEffect } from "react";
import { getSession } from "next-auth/react";

import Classroom from "components/Classrooms/Details/Classroom";
import { addStudentToClassroom } from "routes/UPDATE";

const ClassroomPage = ({ classroom }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    setStudents(classroom?.students);
  }, [classroom]);

  const handleAddStudent = async (values) => {
    const addedStudent = await addStudentToClassroom(classroom?.id, values);
    setStudents((s) => [...s, addedStudent]);
  };

  return (
    <Classroom
      classroom={classroom}
      students={students}
      handleAddStudent={handleAddStudent}
    />
  );
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

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
