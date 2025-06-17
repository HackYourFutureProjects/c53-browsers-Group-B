/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

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
