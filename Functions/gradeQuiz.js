export const gradeQuiz = (questions) => {

  let amountCorrect = questions.filter(
    (question) => question.answeredCorrect == true
  );
  let percentage = (amountCorrect.length / questions.length) * 100; // calculates percentage correct
  let removedDecimals = Math.trunc(percentage);

  let grade = {
    amountOfQuestions: questions.length,
    amountCorrect: amountCorrect.length,
    percentage: removedDecimals,
  };

  return grade;
};

export default gradeQuiz
