import styled from "styled-components";


export const StyledQuiz = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  .quiz-container {
    width: 1000px;
  }

  .question {
    background-color: #f9f9fd;
    margin: 1rem;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .not-answered {
    text-align: center;
    background-color: red;
    color: white;
    margin: 1rem;
  }

  label {
    display: flex;
    align-items: center;
    margin: 15px 0px 0px 25px;
    width: 44vw;
  }

  input {
    cursor: pointer;
  }

  .label-text {
    margin-left: 10px;
  }

  .submit {
    text-align: center;
  }

  .submit button {
    font-size: 1.5em;
    margin-bottom: 2rem;
    padding: 0.5rem;
    color: whitesmoke;
    border-radius: 7px;
    background-color: green;
    cursor: pointer;
  }
`;