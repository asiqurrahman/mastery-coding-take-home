import styled from "styled-components";


export const StyledNav = styled.div`
  background-color: #1f2833;
  height: 75px;

  nav {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
  }

  .person {
    display: flex;
  }

  .logout button {
    all: unset;
    color: black;
    background-color: #ffffff;
    padding: 10px;
    font-size: 1em;
    border-radius: 7px;
    cursor: pointer;
  }
`;