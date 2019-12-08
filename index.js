'use strict';

const STORE = {
  questions: [
    {
      question: 'What is the hottest Pepper in the world?',
      answers: [
        'Dragons Breath',
        'Jalapeno',
        'Ghost Pepper',
        'Shishito'
      ],
      correctAnswer: 'Dragons Breath'
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
  score: 0,
  questionNumberScore: 1,
};


function renderHomePage() {
  const html = `
    <p>Take a break from programming and dive into the weird world of food!</p>
    <div>
      <button id="start-quiz">Start Quiz</button>
    </div>
  `;

  $('main').html(html); //accessing the header from index.html and inputing the html variable we just created
}


function questionTemplate(question) {
  return `
    <legend>${question.question}</legend>
    <form class = "myForm">
      <fieldset>
        <div class="questionList">
          <input aria-label="Answer1" class = 'input-field' type="radio" name='answer' value='${question.answers[0]}' required> 
            <label for="answer">${question.answers[0]}</label><br>
          <input aria-label="Answer2" class = 'input-field' type="radio" name='answer' value='${question.answers[1]}' required>
            <label for="answer">${question.answers[1]}</label><br>
          <input aria-label="Answer3" class = 'input-field' type="radio" name='answer' value='${question.answers[2]}' required>
            <label for="answer">${question.answers[2]}</label><br>
          <input aria-label="Answer4" class = 'input-field' type="radio" name='answer' value='${question.answers[3]}' required>
            <label for="answer">${question.answers[3]}</label><br>
        </div>
      </fieldset>
      <button type = "submit" id = "button1"> Check Your Answer </button>
    </form>
    <div id="Score">Score: ${STORE.score}</div>
    <div id="QuestionNumber">Question Number: ${STORE.questionNumberScore} of 5</div>
  `;
}
//maybe I had the html wrong.. because I switched back to button type again and it also
//works.

function finalpageTemplate() {
  return `
    <fieldset>
        <p>Final Score: ${STORE.score} out of 5.</p>
        <p> 🌶️ 🍄 🍫 🐡 🍿 </p>
    </fieldset>
    <button id="reset" type= "button">Start a New Game</button>
  `;
}

function questionSelector(questions) {
  const questionNumber = questions.questionNumber; //current question number
  const questionsArray = questions.questions; // all available questions in STORE.questions

  const question = questionTemplate(questionsArray[questionNumber]); // retrieve current question

  return question; // return current question
}


function renderQuestion() {
  const questionString = questionSelector(STORE); //this makes the variable questionString 
  $('main').html(questionString); //put the html from const questionString into the main of index.html
}

function restartQuiz() {
  STORE.questionNumber = 0;
  STORE.score = 0;
  STORE.questionNumberScore = 1;
}

//on the button id #start-quiz click, return renderQuestion() 
function handleStartQuiz() {
  $('#main').on('click', '#start-quiz', function() {
    console.log(STORE);
    restartQuiz();
    renderQuestion();
  });
}

// function handleSubmit() {
//   $('#main').on('submit', 'form', function(event) {
//     event.preventDefault();
//     console.log('yowza');
//   });
// }

function handleSubmitAnswer(){
  $('#main').on('submit', 'form', function(event){
    event.preventDefault();
    console.log('clicked');
    checkAnswer();
  });
}

function handleNextQuestion() {
  $('#main').on('click', '#next-question', function() {
    STORE.questionNumber++;
    if(STORE.questionNumber < STORE.questions.length) {
      renderQuestion();
    } else {
      console.log(STORE);
      renderFinalPage();
    }
  });
}

function renderFinalPage() {
  $('main').html(finalpageTemplate);
}

function handleResetButton() {
  $('#main').on('click', '#reset', function() {
    renderHomePage();
  });
}


function correctFeedback() {
  $('#main').html(`
  <div role="correct feedback" aria-live="polite">
    <h3>Correct!</h3>
    <button id="next-question">
    Next
    </button>
  </div>
    `);
}

function incorrectFeedback() {
  $('#main').html(`
  <div role="incorrect feedback" aria-live="polite">
    <h3>Incorrect! The correct answer is ${STORE.questions[STORE.questionNumber].correctAnswer}.</h3>
    <button id="next-question">
    Next
    </button>
  </div>
    `);
}


function checkAnswer() {
  let selectedOption = $('input[type=radio]:checked').val().trim();
  console.log(STORE.questions[STORE.questionNumber].correctAnswer);
  console.log(selectedOption); 
  if (selectedOption === STORE.questions[STORE.questionNumber].correctAnswer) {
    console.log('correct');
    correctFeedback(); 
    STORE.score++;
    STORE.questionNumberScore++;
    //call correct feedback
    //generate nextQuestion button
  } else {
    console.log('incorrect');
    incorrectFeedback();
    STORE.questionNumberScore++;
    //call incorrect infeedback
    //
  }
}

//hierarchy of how the page loads
function quizHandler() {
  renderHomePage();
  handleStartQuiz();
  handleSubmitAnswer(); 
  handleNextQuestion();
  handleSubmitAnswer(); 
  // handleSubmit();
  handleResetButton();
 
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