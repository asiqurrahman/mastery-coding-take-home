import { getSession } from "next-auth/react";

import Classrooms from "components/Classrooms/Classrooms";
import { createClassroom } from "routes/CREATE";
import { fetchClassrooms } from "routes/READ";

// const classrooms = [
//   { id: "c1", name: "classroom 1" },
//   { id: "c2", name: "classroom 2" },
//   { id: "c3", name: "classroom 3" },
// ];

const Page = ({classrooms}) => {
  const handleCreateClassroom = async (value) => {
    await createClassroom(value);
  };

  return (
    <Classrooms
      classrooms={classrooms}
      handleCreateClassroom={handleCreateClassroom}
    />
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
  
  const classrooms = await fetchClassrooms(session.info.id);

  return {
    props: { classrooms },
  };
}

export default Page;
