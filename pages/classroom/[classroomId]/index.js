import { useState, useEffect } from "react";
import { signOut } from "next-auth/react";
import { getSession } from "next-auth/react";

import Classroom from "components/Classrooms/Details/Classroom";
import { addStudentToClassroom } from "routes/UPDATE";
import { fetchClassroom } from "routes/READ";

const ClassroomPage = ({ classroom, classroomId, session }) => {
  const [currentClassroom, setCurrentClassroom] = useState({});
  const [students, setStudents] = useState([]);

  useEffect(() => {
    setCurrentClassroom(classroom);
  }, [classroom]);

  useEffect(() => {
    setStudents(currentClassroom?.students);
  }, [currentClassroom]);

  const handleAddStudent = async (values) => {
    // Only teachers should create classrooms
    if (session?.info?.userType !== "TEACHER") return;

    await addStudentToClassroom(classroomId, values);
    const classroom = await fetchClassroom(classroomId);
    setCurrentClassroom(classroom);
  };

  return (
    <div className="layout">
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
      <Classroom
        classroom={currentClassroom}
        students={students}
        handleAddStudent={handleAddStudent}
      />
    </div>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const { query } = context;
  const { classroomId } = query;

  const classroom = await fetchClassroom(classroomId, session);

  return {
    props: { classroom, classroomId, session },
  };
}

export default ClassroomPage;
