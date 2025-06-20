import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { SCORE_DISPLAY_ID } from '../constants.js';

/**
 * Create a full question element including score and question number
 * @param {string} question - Question text
 * @param {number} score - Current score
 * @param {number} totalQuestions - Total number of questions in the quiz
  * @param {number} questionNumber - The current question number (e.g. 1, 2, 3...)
 * @returns {Element}
 */
export const createQuestionElement = (
  question,
  score,
  questionNumber,
  totalQuestions
) => {

  const element = document.createElement('div');

  //Add a number for h1 before a question
  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`  
    <h1>${questionNumber}. ${question}</h1>

    <ul id="${ANSWERS_LIST_ID}">
    </ul>

    <button id="${NEXT_QUESTION_BUTTON_ID}">
      Next question
    </button>
    <div id="${SCORE_DISPLAY_ID}">Score: ${score}/${totalQuestions}</div>
  `;

  return element;
};
