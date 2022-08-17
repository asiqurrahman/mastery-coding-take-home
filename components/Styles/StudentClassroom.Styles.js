import styled from "styled-components";


export const StyledStudentRoom = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  .student-classroom {
    width: 1000px;
    cursor: pointer;
  }

  .quiz-container {
    display: flex;
    justify-content: space-between;
    width: 900px;
    margin-top: 2rem;
    padding: 1rem;
    background-color: #f9f9fd;
    border-radius: 7px;
  }

  .quiz-container p {
    font-size: 1.2em;
    font-weight: bold;
    color: #c21807;
  }

  .complete {
    border: 5px solid green;
    flex-direction: column;
  }

  .complete p {
    color: green;
  }

  .quiz-info {
    display: flex;
    justify-content: space-between;
  }

  .not-complete {
    border: 5px solid #c21807;
  }

  .completed-quiz {
    margin-top: 1rem;
    background-color: #1f222a;
    color: #b2becd;
    border-radius: 20px;
    padding: 1rem;
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