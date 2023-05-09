/*Question arrey*/
const QUESTION = [{"question": "Koja tvrdnja je tacna u vezi linija na putu",  "answer1" : "A- Pomocna traka je jedna vozna traka","answer2": "Jedna saobracajna traka nemora biti markirana ", "correct": "Jedna saobracajna traka nemora biti markirana "}, 
{"question": "Ti imas vozacku dozvolu na probno vrijeme.Sta vazi?",  "answer1" : "Ja moram ponovo polagati i teoriju i voznju ako vozacka dozvola bude oduzeta u tome vremenu", "answer2": "-Vozacka dozvola se oduzima samo na 2 mjeseca ako dobijes kaznu za parkiranje", "correct":"Ja moram ponovo polagati i teoriju i voznju ako vozacka dozvola bude oduzeta u tome vremenu"},
{"question": "Sta predstavlja laki kamion??",  "answer1" : " Kamion koji ima totalnu tezinu do 3,5 tone ", "answer2": " Kamion koji ima bruto tezinu do 3,5 tone ", "correct":" Kamion koji ima totalnu tezinu do 3,5 tone "},
{"question": "Koja vozila smijes ti voziti ako imas B kategoriju?",  "answer1" : " Buss sa 10 putnika", "answer2": " Kamion sa totalnom tezinom 3,1 tonu", "correct":" Kamion sa totalnom tezinom 3,1 tonu"},
{"question": "What kind of creature can Remus Lupin turn into?",  "answer1" : "Dementore", "answer2": "Werewolf", "correct":"Werewolf"},
{"question": "What kind of monster did attack the students and other in the seconde book?",  "answer1" : "A Fenix bird", "answer2": "A Snake", "correct":"A Snake"},
{"question": "Aragon is Hagrids friend but what kind of creature is he?",  "answer1" : "Spider", "answer2": "Dog", "correct":"Spider"},
{"question": "Who becomes Harrys girlfriend in the 6th book?",  "answer1" : "Ginny", "answer2": "Kathy", "correct":"Ginny"},
{"question": "Who is Sirius Black?",  "answer1" : "Harrys godfather", "answer2": "Voldemorts alter ego", "correct":"Harrys godfather"},
{"question": "Wich positions does Harry have in quiddich?",  "answer1" : "Chaser", "answer2": "Seeker", "correct":"Seeker"},
{"question": "Wich spell can make things fly?",  "answer1" : "Avada kadavra", "answer2": "Wingardium leviosa", "correct":"Wingardium leviosa"},];

/*Questioncount and counter for correct answers*/
let currentQuestion = 0;
let correctQuestion = 0;

/*Defining answer buttons and questionsarea aswell as start, next and reset buttons*/
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let submit = document.getElementById("submit");
let questionarea = document.getElementById('question-area');
let reset = document.getElementById("reset");
let start = document.getElementById("start");
let next = document.getElementById("next");

/*calling events when clicked on*/
answer1.addEventListener('click', selectedAnswer);
answer2.addEventListener('click', selectedAnswer);
reset.addEventListener('click', restart);
start.addEventListener('click', displayNextQuestion);
next.addEventListener('click', displayNextQuestion);

/*function that starts the game, when pressed on a question area
 will appear and the start button will not be shown more*/
startGame(); /*calling the function*/
function startGame(){
  document.getElementById("question-area").classList.add('hide');
  document.getElementById("start").classList.remove('hide');
} 
/*The first function calls the startbutton when user clicks on the startbutton questionarea will be shown and
game will start*/
/* In this function question and answers will be shown and the user can click on wichever answer he/she think is correct. ext
question will be shown directly after*/
function displayNextQuestion() {
  let q = QUESTION[currentQuestion];
  document.getElementById("question-area").classList.remove('hide');
  document.getElementById("start").classList.add('hide');
  document.getElementById("question").innerText = q.question;
  document.getElementById("answer1").innerText = q.answer1;
  document.getElementById("answer2").innerText = q.answer2;
  } 

/*This fuction manages the correction of user answers and also scorecount.
 When all the questions are answerd user will be redirected to next function*/
function selectedAnswer(Event) {
  selectedAnswer = Event.currentTarget.innerText;
  let q = QUESTION[currentQuestion];
  if (selectedAnswer === q.correct) 
    { let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
    correctQuestion ++;
    }
  currentQuestion++;
  if (currentQuestion < QUESTION.length ) {
    document.getElementById("next").classList.remove('hide');
    
    } else {
      document.getElementById("resultSection").classList.remove('hide');
      document.getElementById("question-area").classList.add("hide");
      
    }
  }
/* When all the questions been answerd user can choose to restart the game*/
function restart() {
  currentQuestion = 0;
  correctQuestion = 0;
  document.getElementById("score").innerText = 0;
  document.getElementById("resultSection").classList.add('hide');
  document.getElementById("question-area").classList.remove("hide");
  displayNextQuestion();
  }
