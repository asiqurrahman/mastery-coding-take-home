import { getToken } from "next-auth/jwt";
import { getSession } from "next-auth/react";

const Page = () => {
  return <div>Page</div>;
};

export async function getServerSideProps(context) {
  const token = await getToken({ req: context.req });

  if (!token) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: { token },
  };
}

export default Page;
