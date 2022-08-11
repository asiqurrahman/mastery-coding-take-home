import { useState, useEffect } from "react";
import { AddStudentForm } from "./Forms/AddStudentForm";

const Classroom = ({ classroom }) => {
  const [addStudent, setAddStudent] = useState(false);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    setStudents(classroom?.students);
  }, [classroom]);

  const handleAddStudent = (e) => {
    e.preventDefault();
    setAddStudent(true);
  };

  const onSubmit = (values) => {
    const student = {
      ...values,
      id: Math.random(),
      name: `${values.firstname} ${values.lastname}`,
    };
    setStudents((students) => [...students, student]);
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
          <button onClick={handleAddStudent}>+ Add Student</button>
        </div>
      )}
      {addStudent && <AddStudentForm onSubmit={onSubmit} />}
    </div>
  );
};

export default Classroom;
