import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { initFinalResultPage } from './finalResultPage.js'; // Import final result page

let CORRECT_ANSWERS_QTY = 0; // In the quiz (questions in the current round, if implemented)

function setStatusClass(element, correct) {
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

function selectAnswer(e) {
  const selectedAnswer = e.target;
  const correct = selectedAnswer.parentElement.dataset.correct === 'true';
  if (correct) {
    CORRECT_ANSWERS_QTY++;
  }
  setStatusClass(selectedAnswer, correct);
}

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    // Setting the attribute correct/incorrect answer to each buttton(list element)
    if (key === currentQuestion.correct) {
      answerElement.dataset.correct = true;
    } else {
      answerElement.dataset.correct = false;
    }
    answerElement.addEventListener('click', selectAnswer);

    answersListElement.appendChild(answerElement);
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex++;

  if (quizData.currentQuestionIndex >= quizData.questions.length) {
    initFinalResultPage(); // Show results when finished
  } else {
    initQuestionPage(); // Go to next question
  }
};
