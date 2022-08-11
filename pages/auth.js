import { getToken } from "next-auth/jwt";

import Auth from "components/Auth/Auth";

const AuthPage = () => {
  return <Auth />;
};

export async function getServerSideProps(context) {
  const token = await getToken({ req: context.req });

  if (token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { token },
  };
}

export default AuthPage;
