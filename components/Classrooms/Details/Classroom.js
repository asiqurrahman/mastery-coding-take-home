import { useState } from "react";
import { getSession, useSession } from "next-auth/react";
import { AddStudentForm } from "./Forms/AddStudentForm";
import { StyledClassroom } from "components/Styles/Classroom.Styles";
import Student from "./Student";
const Classroom = ({ classroom, students, handleAddStudent }) => {
  const { data: session } = useSession();

  const [addStudent, setAddStudent] = useState(false);

  console.log(students)
  const onSubmit = async (values) => {
    await handleAddStudent(values);
    setAddStudent(false);
  };

  return (
    <StyledClassroom>
      <div className="classroom__container">
        <h1>{classroom?.name}</h1>
        <div className="flex-end">
          <h2>Students</h2>
        </div>
        <ul>
          {students?.map((student) => (
            <Student student={student}/>
          ))}
        </ul>
        {session?.info?.userType !== "STUDENT" && (
          <>
            {!addStudent && (
              <div className="flex-end" style={{marginTop: '20px'}}>
                <button onClick={(e) => setAddStudent(true)}>
                  + Add Student
                </button>
              </div>
            )}
            {addStudent && <AddStudentForm onSubmit={onSubmit} />}
          </>
        )}
      </div>
    </StyledClassroom>
  );
};

export default Classroom;
