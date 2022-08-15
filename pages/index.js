import { useState, useEffect } from "react";
import { getSession } from "next-auth/react";

import Classrooms from "components/Classrooms/Classrooms";
import { fetchUser } from "routes/READ";
import { createClassroom } from "routes/CREATE";

const Page = ({ fetchedUser }) => {
  const [classrooms, setClassrooms] = useState([]);

  useEffect(() => {
    setClassrooms(fetchedUser?.classrooms);
  }, [fetchedUser]);

  const handleCreateClassroom = async (value) => {
    const createdClassroom = await createClassroom(value);

    console.log(createdClassroom);
  };

  return (
    <div className="layout">
      <Classrooms
        classrooms={classrooms}
        handleCreateClassroom={handleCreateClassroom}
      />
    </div>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  try {
    const fetchedUser = await fetchUser(session.info.id);

    return {
      props: { session, fetchedUser },
    };
  } catch (error) {
    return {
      props: {
        errorMessage: error.message,
      },
    };
  }
}

export default Page;
