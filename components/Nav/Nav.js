import { StyledNav } from "components/Styles/Nav.Styles";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();

  return (
    <StyledNav>
      <nav>
        <div className="person">
          <h2 style={{ marginRight: " 20px" }}>
            {session.info.userType == "TEACHER" ? "Teacher" : "Student"}:
          </h2>
          <h2>{session?.info.username}</h2>
        </div>
        <div className="logout">
          <button
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            Logout
          </button>
        </div>
      </nav>
    </StyledNav>
  );
};

export default Nav;
