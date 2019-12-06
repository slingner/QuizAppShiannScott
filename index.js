
'use strict';

const STORE = {
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


function renderHomePage() {
  const html = `
    <h2>Take a break from programming and dive into the weird world of food!</h2>
    <div>
      <button id="start-quiz">Start Quiz</button>
    </div>
  `;

  $('main').html(html); //accessing the header from index.html and inputing the html variable we just created
}


function questionTemplate(question) {
  return `
    <h2>${question.question}</h2>
    <form action ="answerSubmit" method ="get">
    <fieldset>
      <div class="questionList">
        <input class='answer' type="radio" name='answer' value='0' required"/> 
        <label for="y">${question.answers[0]}</label><br>
      <input class='answer' type="radio" name='answer' value='0' required/>
        <label for="y">${question.answers[1]}</label><br>
          <input class='answer' type="radio" name='answer' value='0' required/>
        <label for="y">${question.answers[2]}</label><br>
          <input class='answer' type="radio" name='answer' value='0' required/>
        <label for="y">${question.answers[3]}</label><br>
      </div>
    </fieldset>
    </form>
    <button id="submit" type = "submit">Submit</button>
    <button id="next-question" type = "button">Next Question</button>
  `;
}

// function statusTemplate() {
//   return `
//   <div class='status-container'>
//     <div class = 'question-number'>
//       <h3>Question 1 of 5</h3>
//     </div class = 'question-number'>
//     <div class = 'score-number'>
//       <h5>Score: 0</h5>
//       <h5>Number Correct: 0</h5>
//       <h5>Number Incorrect: 0</h5>
//     </div class = 'score-number'>
//   </div>
//   `;
// }

// function questionStatus(questions) {
//   const questionNumber = questions.questionNumber;
//   $('.question-number').empty();
//   $('.question-number').append(
//     `<p class= 'question-status'>Question ${questionNumber + 1} out of 10</p>`
//   );
// }

// function scoreStatus(questions) {
//   const scoreNumber = questions.score;
//   $('.score-number').empty();
//   $('.score-number').append(
//     `<p>Score ${totalScore} out of 10</p>`
//   );
//   console.log('scoreStatus ran');
//   console.log(totalScore);
// };

// function answersTemplate(question) {
//   return `
//     <h1>${question.answers}</h1>
//   `;
// }

function questionSelector(questions) {
  const questionNumber = questions.questionNumber; //current question number
  const questionsArray = questions.questions; // all available questions in STORE.questions

  const question = questionTemplate(questionsArray[questionNumber]); // retrieve current question

  return question; // return current question
}


function renderQuestion() {
  const questionString = questionSelector(STORE); //this makes the variable questionString 
  $('main').html(questionString); //put the html from const questionString into the main of index.html
  STORE.questionNumber += 1; //this iterates through the question numbers
  //so every click will trigger the html of the next question and also set the new question number for the next click
}

//on the button id #start-quiz click, return renderQuestion() 
//renderQuestion()
function handleStartQuiz() {
  $('#start-quiz').click(function() {
    renderQuestion();

    // $('header').html(''); //this is hiding the homepage screen
  });
}

function handleNextQuestion() {
  $(document).on('click', '#next-question', function() {
    if(STORE.questionNumber < STORE.questions.length) {
      renderQuestion();
    } else {
      renderFinalPage();
    }
  });
}


function renderFinalPage(question) {
  console.log('renderFinalPage');
}



// function renderSubmit() {
 
// }

// function handleSubmit() {
//   $(document).on('click', '#submit', function() {
//     renderSubmit();
//   });
// }
 

// function handleFinishQuiz

// function renderScoreScreen

//herarchy of how the page loads
function quizHandler() {
  renderHomePage();
  handleStartQuiz();
  //handleSubmitButton();
  handleNextQuestion();
}

$(quizHandler);

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

// Initialize all functions that run the application