import { useState, useEffect } from "react";

import Classroom from "components/Classrooms/Details/Classroom";
import { addStudentToClassroom } from "routes/UPDATE";
import { fetchClassroom } from "routes/READ";

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
  const { query } = context;
  const { classroomId } = query;

  const classroom = await fetchClassroom(classroomId);

  return {
    props: { classroom },
  };
}

export default ClassroomPage;
