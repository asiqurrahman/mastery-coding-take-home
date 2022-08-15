import { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { AddClassroomForm } from "./Forms/AddClassroomForm";

const Classrooms = ({ classrooms, handleCreateClassroom }) => {
  const { data: session } = useSession();
  const [addClassroomForm, setAddClassroomForm] = useState(false);

  const onSubmit = async (value) => {
    if (!value || value?.length == 0) return;
    await handleCreateClassroom(value);
    setAddClassroomForm(false);
  };

  return (
    <div className="classrooms__container">
      {classrooms?.map((classroom) => (
        <Link
          href={
            session?.info?.userType == "TEACHER"
              ? `/classroom/${classroom?.id}`
              : `/classroom/${classroom?.id}/quiz`
          }
          passHref
          key={classroom?.id}
        >
          <a className="classroom-link">{classroom?.name}</a>
        </Link>
      ))}
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
  );
};

export default Classrooms;
