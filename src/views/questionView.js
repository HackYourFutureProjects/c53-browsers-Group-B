import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { SCORE_DISPLAY_ID } from '../constants.js';

/**
 * Create a full question element including score
 * @param {string} question - Question text
 * @param {number} score - Current score
 * @returns {Element}
 */
export const createQuestionElement = (question, score) => {
  const element = document.createElement('div');

  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
  <div id="${SCORE_DISPLAY_ID}">Score: ${score}</div>
    <h1>${question}</h1>

    <ul id="${ANSWERS_LIST_ID}">
    </ul>

    <button id="${NEXT_QUESTION_BUTTON_ID}">
      Next question
    </button>
  `;

  return element;
};
