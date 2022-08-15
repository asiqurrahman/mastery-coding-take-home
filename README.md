# Frontend Take Home Assessment

For this assessment you will be building out a teacher/student app that allows students to take a quiz and view their results. Teachers should also be able to view the students' results in their classroom. You are free to use any libraries/packages you'd like.

If you have any questions or need clarification, please reach out to jmartinez@masterycoding.com

# Instructions

Fork this repo or clone the repo into a new project, and make sure to install all dependencies. To run the frontend server run `npm run dev` or `yarn dev` and you should be good to go.

The frontend is running on Next.js and implements file based routing. If you are unfamiliar with file based routing checkout the docs here: https://nextjs.org/docs/routing/introduction

After starting the frontend server, create a teacher inside the auth page, create a classroom, and then add a student or students to that classroom. Logout, sign in as a student and you can get started in the quiz page.

# Requirements/Tasks

Your job for this assessment is to implement a quiz taking feature for students, and allowing teachers to read their students submitted quizzes. This should take you about 3/4 hours to implement the quiz feature, reading results, and add styling, with the styling portion being the least focused. Student submit quiz route has been added for you inside: routes/UPDATE/Users/submit.js

Student Flow Checklist:

- Student can start quiz
- Student can submit a quiz
- Student should be able to read their own result of submitted quiz
- Student should not be able to retake a submitted quiz

Teacher Flow Checklist:

- Teacher can view results of submitted quizzes
- Teacher should be able to view all students in their classroom and view which students have submitted and which students have not submitted the quiz

If you have extra time feel free to add other bonus features you think would enhance the app. Some examples:

- Add site wide navigation
- Add error handling
- Teacher can take a mock quiz
- Any other enhancements you can think of to improve the app.
- Animations

# Submit Assessment

To turn your assessment in email jmartinez@masterycoding.com and include a link to your repo.

# Guide

To submit a quiz, the route has been created for you inside: routes/UPDATE/Users/submit.js
You must supply the body like so

```javascript
{
classroomId: {classroomId},
title: {quizTitle},
questions: [
 {
      id: "q1",
      content: "What does CSS stand for?",
      choices: [
        {
          id: "c1",
          content: "Colorful Style Sheets",
        },
        {
          id: "c2",
          content: "Creative Style Sheets",
        },
        {
          id: "c3",
          content: "Cascading Style Sheets",
          isCorrect: true,
        },
        {
          id: "c4",
          content: "Computer Style Sheets",
        },
      ],
	  answer: {answeredContent},
	  answeredCorrect: {boolean}
    },
	....
]
}
```

Quiz data:

```javascript
{
  title: "HTML/CSS/JavaScript Quiz",
  questions: [
    {
      id: "q1",
      content: "What does CSS stand for?",
      choices: [
        {
          id: "c1",
          content: "Colorful Style Sheets",
        },
        {
          id: "c2",
          content: "Creative Style Sheets",
        },
        {
          id: "c3",
          content: "Cascading Style Sheets",
          isCorrect: true,
        },
        {
          id: "c4",
          content: "Computer Style Sheets",
        },
      ],
    },
    {
      id: "q2",
      content: "What does HTML stand for?",
      choices: [
        {
          id: "c1",
          content: "High Terminal Machine Language",
        },
        {
          id: "c2",
          content: "Hyper Text Markup Language",
          isCorrect: true,
        },
        {
          id: "c3",
          content: "Hyper Text Meaning Language",
        },
        {
          id: "c4",
          content: "High-speed Transfer Marking Logic",
        },
      ],
    },
    {
      id: "q3",
      content: "Who developed the first version of HTML in 1990?",
      choices: [
        {
          id: "c1",
          content: "Hakon Wium Lie",
        },
        {
          id: "c2",
          content: "Bill Gates",
        },
        {
          id: "c3",
          content: "Margaret Hamilton",
        },
        {
          id: "c4",
          content: "Tim Berners Lee",
          isCorrect: true,
        },
      ],
    },
    {
      id: "q4",
      content: "Which HTML tag is used to define an internal style sheet?",
      choices: [
        {
          id: "c1",
          content: "<script>",
        },
        {
          id: "c2",
          content: "<style>",
          isCorrect: true,
        },
        {
          id: "c3",
          content: "<css>",
        },
      ],
    },
  ],
};

```
