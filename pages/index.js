import { getToken } from "next-auth/jwt";

import Classrooms from "components/Classrooms/Classrooms";

const classrooms = [
  { id: "c1", name: "classroom 1" },
  { id: "c2", name: "classroom 2" },
  { id: "c3", name: "classroom 3" },
];

const Page = () => {
  return <Classrooms classrooms={classrooms} />;
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
