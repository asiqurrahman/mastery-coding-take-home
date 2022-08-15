import { getSession } from "next-auth/react";

import Auth from "components/Auth/Auth";

const AuthPage = () => {
  return <Auth />;
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default AuthPage;
