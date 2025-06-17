/*
 The constants file is used to store anything 
 that multiple files use, that should ALWAYS be the same
 
 It is an industry standard to make these variables fully capitalised
*/

export const USER_INTERFACE_ID = 'user-interface';
export const START_QUIZ_BUTTON_ID = 'start-quiz-button';
export const ANSWERS_LIST_ID = 'answers-list';
export const NEXT_QUESTION_BUTTON_ID = 'next-question-button';

export let CURRENT_QUESTION_NUM = 0;
export let QUESTIONS_QTY = 0; // The total number of quiz questions (questions in the current round, if implemented)
export let CORRECT_ANSWERS_QTY = 0; // In the quiz (questions in the current round, if implemented)
export const QUESTIONS = [
  {
    question: 'Which city is considered the most beautiful in the Netherlands?',
    answers: [
      { text: 'Rotterdam', correct: false },
      { text: 'Amsterdam', correct: true },
      { text: 'Utrecht', correct: false },
      { text: 'The Hague', correct: false },
    ],
  },

  {
    question: 'In which city can you find the famous "dancing houses"?',
    answers: [
      { text: 'Haarlem', correct: false },
      { text: 'Amsterdam', correct: true },
      { text: 'Eindhoven', correct: false },
      { text: 'The Groningen', correct: false },
    ],
  },

  {
    question: 'What is the most popular traditional Dutch dish?',
    answers: [
      { text: 'Herring with onions', correct: false },
      { text: 'Fries with mayonnaise', correct: false },
      { text: 'Stroopwafel (syrup waffles)', correct: true },
      { text: 'Bitterballen (fried meatballs)', correct: false },
    ],
  },

  {
    question:
      'Which city is called the "city of the future" because of its modern architecture?',
    answers: [
      { text: 'Maastricht', correct: false },
      { text: 'Rotterdam', correct: true },
      { text: 'Leiden', correct: false },
      { text: 'Delft', correct: false },
    ],
  },

  {
    question: 'What is the most popular Dutch supermarket chain?',
    answers: [
      { text: 'Jumbo', correct: false },
      { text: 'Albert Heijn', correct: true },
      { text: 'Lidl', correct: false },
      { text: 'Dirk', correct: false },
    ],
  },

  {
    question:
      'Which city is the political capital of the Netherlands, where the government is located?',
    answers: [
      { text: 'Amsterdam', correct: false },
      { text: 'Rotterdam', correct: false },
      { text: 'Utrecht', correct: false },
      { text: 'The Hague', correct: true },
    ],
  },

  {
    question: 'What is the most popular means of transport among locals?',
    answers: [
      { text: 'Bicycles', correct: true },
      { text: 'Buses', correct: false },
      { text: 'Electric scooters', correct: false },
      { text: 'Cars', correct: false },
    ],
  },

  {
    question: 'What is the name of the famous tulip park that opens in spring?',
    answers: [
      { text: 'Keukenhof', correct: true },
      { text: 'Vondelpark', correct: false },
      { text: 'Hoge Veluwe', correct: false },
      { text: 'Giethoorn', correct: false },
    ],
  },

  {
    question: 'Which of these cheeses are originally from the Netherlands?',
    answers: [
      { text: 'Cheddar', correct: false },
      { text: 'Limburger', correct: false },
      { text: 'Gouda', correct: true },
      { text: 'Parmesan', correct: false },
    ],
  },

  {
    question:
      'Which Dutch city is famous for its canals and is often called "Little Amsterdam"?',
    answers: [
      { text: 'Utrecht', correct: false },
      { text: 'Haarlem', correct: false },
      { text: 'Leiden', correct: true },
      { text: 'Maastricht', correct: false },
    ],
  },

  {
    question: 'Which Dutch airport is one of the largest in Europe?',
    answers: [
      { text: 'Schiphol', correct: true },
      { text: 'Eindhoven', correct: false },
      { text: 'Rotterdam', correct: false },
      { text: 'Maastricht', correct: false },
    ],
  },

  {
    question:
      'Which holiday is celebrated in the Netherlands on April 27, when everyone wears orange?',
    answers: [
      { text: 'Independence Day', correct: false },
      { text: 'Amsterdam Day', correct: false },
      { text: 'Tulip Day', correct: false },
      { text: "King's Day", correct: true },
    ],
  },
];
