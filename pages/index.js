import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";

import Classrooms from "components/Classrooms/Classrooms";
import { createClassroom } from "routes/CREATE";
import { fetchClassrooms } from "routes/READ";

const Page = ({ fetchedClassrooms, session }) => {
  const [classrooms, setClassrooms] = useState([]);

  useEffect(() => {
    setClassrooms(fetchedClassrooms?.length > 0 ? fetchedClassrooms : []);
  }, [fetchedClassrooms]);

  const handleCreateClassroom = async (value) => {
    // Only teachers should create classrooms
    if (session?.info?.userType !== "TEACHER") return;

    const createdClassroom = await createClassroom(value, session);
    setClassrooms((c) => [...c, createdClassroom]);
  };

  return (
    <div>
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

  const fetchedClassrooms = await fetchClassrooms(session.info.id);

  return {
    props: { fetchedClassrooms, session },
  };
}

export default Page;
