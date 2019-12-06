// const parent = document.getElementsByClassName('parent')[0];
'use strict';


const store = {
  questions: [
    {
      question: 'What is the hottest Pepper in the world?',
      answers: [
        'Dragon’s Breath',
        'Jalapeno',
        'Ghost Pepper',
        'Shishito'
      ],
      correctAnswer: 'Dragon’s Breath'
    },
    {
      question: 'What is the most poisonous mushroom?',
      answers: [
        'Death Cap',
        'Chanterelle',
        'Amanita',
        'Destroying Angel'
      ],
      correctAnswer: 'Death Cap'
    },
    {
      question: 'As early as 250 A.D., ancient civilizations of Mexico and South America, specifically The Mayans and the Aztecs, used this as a form of currency?',
      answers: [
        'Silver',
        'Dollars',
        'Wheat',
        'Cocoa beans',
      ],
      correctAnswer: 'Cocoa beans'
    },
    {
      question: 'What did the Mayans and the Aztecs use as a form of currency?',
      answers: [
        'Silver',
        'Dollars',
        'Wheat',
        'Cocoa beans',
      ],
      correctAnswer: 'Cocoa beans'
    },
    {
      question: 'What is the most poisonous fish?',
      answers: [
        'Pirahna',
        'Scorpion',
        'Lionfish',
        'Puffer',
      ],
      correctAnswer: 'Puffer'
    },
    {
      question: 'What was the first food to ever be microwaved?',
      answers: [
        'Egg',
        'Cookie',
        'Spaghetti',
        'Popcorn',
      ],
      correctAnswer: 'Popcorn'
    },
  ],
  questionNumber: 0,
  score: 0
};

/**
 *
 * Your app should include a render() function, that regenerates
 * the view each time the store is updated. See your course
 * material, consult your instructor, and reference the slides
 * for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 */



const parent = $('.parent');
$(parent).html('<h2> Starting with jQuery </h2>');

// parent.innerHTML = `<h2>Start Quiz</h2>`