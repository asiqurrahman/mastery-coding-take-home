import styled from "styled-components";


export const StyledClassroom = styled.div`
  display: flex;
  justify-content: center;

  .classroom__container {
    width: 900px;
  }

  .classroom__container ul {
    list-style-type: none;
  }

  .student {
    padding: 1rem;
    margin-top: 1rem;
    background-color: #f9f9fd;
    color: black;
    border-radius: 7px;
    transition-duration: 0.3s;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
      rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
      rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    cursor: pointer;
  }

  .completed {
    border: 2px solid green;
  }

  .not-completed {
    border: 2px solid red;
  }

  .flex-end {
    display: flex;
    justify-content: flex-end;
  }

  .completed-quiz {
    margin-top: 1rem;
    background-color: #1f222a;
    color: #b2becd;
    border-radius: 20px;
    padding: 1rem;
  }

  .basic-info {
    display: flex;
    justify-content: space-between;
  }

  .choices input {
    display: none;
  }

  .question {
    margin: 1rem;
  }

  .correct {
    color: green;
  }

  .wrong {
    color: red;
  }
`;