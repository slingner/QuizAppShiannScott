'use strict';

const STORE = {
  questions: [
    {
      question: 'What is the hottest Pepper in the world?',
      answers: [
        'Carolina Reaper',
        'Jalapeno',
        'Ghost Pepper',
        'Shishito'
      ],
      correctAnswer: 'Carolina Reaper',
      descriptionOfAnswer: 'As of August, 2013, Guinness World Records stated that Smokin’ Ed’s Carolina Reaper® is officially the world’s hottest chile pepper. Originally named the \'HP22BNH7\', this pepper is bred by cultivator Ed Currie, who runs PuckerButt Pepper Company in Fort Mill, South Carolina.',
    },
    {
      question: 'What is the most poisonous mushroom?',
      answers: [
        'Death-Cap',
        'Chanterelle',
        'Cortinarius',
        'Destroying Angel'
      ],
      correctAnswer: 'Death-Cap',
      descriptionOfAnswer: 'Amanita phalloides, commonly known as the death cap, is a deadly poisonous basidiomycete fungus, one of many in the genus Amanita.',
    },
    {
      question: 'What did the Mayans and the Aztecs use as a form of currency?',
      answers: [
        'Silver',
        'Dollars',
        'Wheat',
        'Cocoa beans',
      ],
      correctAnswer: 'Cocoa beans',
      descriptionOfAnswer: 'The first people to grow cacao trees were the Maya, one of the oldest civilizations on the American continent. They used the cocoa beans as a barter currency to exchange for food or clothes, as well as for preparing a bitter drink, known as Xocoatl.',
    },
    {
      question: 'What is the most poisonous fish?',
      answers: [
        'Pirahna',
        'Scorpion',
        'Lionfish',
        'Pufferfish',
      ],
      correctAnswer: 'Pufferfish',
      descriptionOfAnswer: 'Almost all pufferfish contain tetrodotoxin, a substance that makes them foul tasting and often lethal to fish. To humans, tetrodotoxin is deadly, up to 1,200 times more poisonous than cyanide. There is enough toxin in one pufferfish to kill 30 adult humans, and there is no known antidote.',
    },
    {
      question: 'What was the first food to ever be microwaved?',
      answers: [
        'Egg',
        'Cookie',
        'Spaghetti',
        'Popcorn',
      ],
      correctAnswer: 'Popcorn',
      descriptionOfAnswer: "The first food deliberately cooked with a microwave was popcorn, and the second was an egg, which exploded in the face of one of the experimenters.",
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
          <input aria-label="Answer1" onclick="" id='rad1' type="radio" name='answer' value='${question.answers[0]}' required> 
            <label for="rad1" onclick="">${question.answers[0]}</label><br>
          <input aria-label="Answer2 " onclick="" id='rad2' type="radio" name='answer' value='${question.answers[1]}' required>
            <label for="rad2" onclick="">${question.answers[1]}</label><br>
          <input aria-label="Answer3" onclick="" id='rad3' type="radio" name='answer' value='${question.answers[2]}' required>
            <label for="rad3" onclick="">${question.answers[2]}</label><br>
          <input aria-label="Answer4" onclick="" id='rad4' type="radio" name='answer' value='${question.answers[3]}' required>
            <label for="rad4" onclick="">${question.answers[3]}</label><br>
        </div>
      </fieldset>
      <button type="submit" id="button1"> Check Your Answer </button>
    </form>
    <div id="Score">Score: ${STORE.score} correct out of 5</div>
    <div id="QuestionNumber">Question Number: ${STORE.questionNumberScore} out of 5</div>
  `;
}


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
  <div class = "feedback" role="correct feedback" aria-live="polite">
    <h3>${STORE.questions[STORE.questionNumber].correctAnswer} is the correct answer!</h3>
    <h3>${STORE.questions[STORE.questionNumber].descriptionOfAnswer}</h3>
    <img src="https://media.giphy.com/media/26BRy3p4oVFc6UOXe/giphy.gif" id = "correctGif" alt="Correct Gif" style="width:200px;height:200px;">
    <button id="next-question">
    Next
    </button>
  </div>
    `);
}

function incorrectFeedback() {
  $('#main').html(`
  <div class = "feedback" role="incorrect feedback" aria-live="polite">
    <h3>Incorrect! The correct answer is ${STORE.questions[STORE.questionNumber].correctAnswer}.</h3>
    <h3>${STORE.questions[STORE.questionNumber].descriptionOfAnswer}</h3>
    <img src="https://media.giphy.com/media/l46C6poYXoMy5Sy8E/giphy.gif" id = "incorrectGif" alt="Incorrect Gif" style="width:200px;height:200px;">
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
  handleResetButton();
}

$(quizHandler);
