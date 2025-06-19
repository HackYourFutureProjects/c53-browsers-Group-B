/**
 * Create the Final Result Page Element
 * @param {number} score - Number of correct answers
 * @param {number} total - Total number of questions
 * @returns {Element}
 */
export const createFinalResultElement = (score, total) => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <h1>Quiz Completed</h1>
    <p>You scored ${score} out of ${total}</p>
    <button id="restart-quiz-button">Restart Quiz<button>`;
  return element;
};
