import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Nav from "components/Nav/Nav";
import Layout from "components/Layout/Layout";
const MyApp = ({ Component, pageProps }) => {

  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </>
  );
};

export default MyApp;
