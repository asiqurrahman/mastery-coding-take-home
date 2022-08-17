import styled from "styled-components";


export const StyledClassrooms = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;

  .classrooms__container {
    display: grid;
    gap: 1rem;
  }

  .classroom-link {
    padding: 1rem;
    background-color: #2a2e35;
    color: white;
    width: 900px;
    border-radius: 7px;
    transition-duration: 0.3s;
  }

  .classroom-link:hover {
    padding: 1.5rem;
  }

  .flex-end {
    display: flex;
    justify-content: flex-end;
  }

  .classroom__container {
    max-width: 1000px;
    margin: 0 auto;
  }

  //layout
`;