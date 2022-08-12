import { useState, useEffect } from "react";
import { AddStudentForm } from "./Forms/AddStudentForm";

const Classroom = ({ classroom, students, handleAddStudent }) => {
  const [addStudent, setAddStudent] = useState(false);

  const onSubmit = async (values) => {
    await handleAddStudent(values);
    setAddStudent(false);
  };

  return (
    <div className="classroom__container">
      <h1>{classroom?.name}</h1>
      <ul>
        {students?.map((student) => (
          <li key={student?.id}>{student?.name}</li>
        ))}
      </ul>
      {!addStudent && (
        <div className="flex-end">
          <button onClick={(e) => setAddStudent(true)}>+ Add Student</button>
        </div>
      )}
      {addStudent && <AddStudentForm onSubmit={onSubmit} />}
    </div>
  );
};

export default Classroom;
