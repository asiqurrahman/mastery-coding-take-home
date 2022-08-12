import { getToken } from "next-auth/jwt";

import Classrooms from "components/Classrooms/Classrooms";
import { createClassroom } from "routes/CREATE";

const classrooms = [
  { id: "c1", name: "classroom 1" },
  { id: "c2", name: "classroom 2" },
  { id: "c3", name: "classroom 3" },
];

const Page = () => {
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

// export async function getServerSideProps(context) {
//   const token = await getToken({ req: context.req });

//   if (!token) {
//     return {
//       redirect: {
//         destination: "/auth",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: { token },
//   };
// }

export default Page;
