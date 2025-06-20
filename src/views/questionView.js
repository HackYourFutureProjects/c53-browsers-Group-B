import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { SCORE_DISPLAY_ID } from '../constants.js';
import {createImageElement} from './imageView.js'

/**
 * Create a full question element including score and question number
 * @param {object} question - question object with 'text' and optional 'image'
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
  const wrapper = document.createElement('div')
  wrapper.classList.add('question-wrapper') //this id for styling
  // const element = document.createElement('div');

  //Left image
  const leftCol = document.createElement('div')
  leftCol.classList.add('question-left')
  const image = createImageElement(question.image || '', question.text)
  leftCol.appendChild(image)

  //Right: content
  const rightCol = document.createElement('div')
  rightCol.classList.add('question-right')
  
  //Add a number for h1 before a question
  // I use String.raw just to get fancy colors for the HTML in VS Code.
  rightCol.innerHTML = String.raw`  
    <h2>${questionNumber}. ${question.text}</h2>

    <ul id="${ANSWERS_LIST_ID}">
    </ul>

    <button id="${NEXT_QUESTION_BUTTON_ID}">
      Next question
    </button>
    <div id="${SCORE_DISPLAY_ID}">Score: ${score}/${totalQuestions}</div>
  `;

  wrapper.appendChild(leftCol)
  wrapper.appendChild(rightCol)

  return wrapper;
};
