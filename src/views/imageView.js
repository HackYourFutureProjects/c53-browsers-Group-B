/**
 * Create an image element for the question
 * @param {string} src - Image source URL
 * @param {string} alt - Alt text
 * @returns {Element}
 */
export const createImageElement = (src, alt = 'Question image') => {
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  img.classList.add('question-image');
  return img;
};