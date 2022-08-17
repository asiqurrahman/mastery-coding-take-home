import { useState } from "react";
import Link from "next/link";
import { AddClassroomForm } from "./Forms/AddClassroomForm";
import { StyledClassrooms } from "components/Styles/Classrooms.Styles";
const Classrooms = ({ classrooms, handleCreateClassroom, session}) => {
  const [addClassroomForm, setAddClassroomForm] = useState(false);

  const onSubmit = async (value) => {
    if (!value || value?.length == 0) return;
    await handleCreateClassroom(value);
    setAddClassroomForm(false);
  };

  return (
    <StyledClassrooms>
      <div className="classrooms__container">
        <h2>Classrooms:</h2>
        {classrooms?.map((classroom) => (
          <Link
            href={`/classroom/${classroom?.id}`}
            passHref
            key={classroom?.id}
          >
            <a className="classroom-link">{classroom?.name}</a>
          </Link>
        ))}
        {session.info.userType == "TEACHER" && (
          <div>
            {" "}
            {addClassroomForm ? (
              <AddClassroomForm onSubmit={onSubmit} />
            ) : (
              <div className="flex-end">
                <button onClick={() => setAddClassroomForm(true)}>
                  + Create Classroom
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </StyledClassrooms>
  );
};

export default Classrooms;
