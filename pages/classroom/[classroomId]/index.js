import { useState, useEffect } from "react";
import { getSession } from "next-auth/react";
import Classroom from "components/Classrooms/Details/Classroom";
import { addStudentToClassroom } from "routes/UPDATE";
import { fetchClassroom } from "routes/READ";
import { fetchUser } from "routes/READ/fetchUser";
import StudentClassroom from "components/Classrooms/Details/StudentClassroom";

const ClassroomPage = ({ classroom, classroomId, session, access, student }) => {
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
    const classroom = await fetchClassroom(classroomId, session);
    setCurrentClassroom(classroom);
  };

  return (
    <div className="layout">
      {access == "TEACHER" ? (
        <Classroom
          classroom={currentClassroom}
          students={students}
          handleAddStudent={handleAddStudent}
        />
      ) : (
        <StudentClassroom classroom={classroomId} student={student}/>
      )}
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

  const access = session.info.userType

  const { query } = context;
  const { classroomId } = query;

  let classroom = []
  let student = []

  if(access == "TEACHER"){
    classroom = await fetchClassroom(classroomId, session);
  }

  if(access == "STUDENT"){
    student = await fetchUser(session.info.id)
  }

  return {
    props: { classroom, classroomId, session, access, student},
  };
}

export default ClassroomPage;
