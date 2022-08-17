import Nav from "components/Nav/Nav";
import { useSession } from "next-auth/react";

const Layout = ({ children }) => {
  const { data: session } = useSession();

  return (
    <div>
      {session && <Nav />}
      {children}
    </div>
  );
};

export default Layout;
