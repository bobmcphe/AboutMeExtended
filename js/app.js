 'use strict';
console.log('working')
/*

if( setTimeout >){
  
  }


function = myfunction() {
    var delayInMilliseconds = 1000; //1 second

setTimeout(function() {
  //your code to be executed after 1 second
}, delayInMilliseconds);

//timeout code taken from StackOverflow, https://stackoverflow.com/questions/17883692/how-to-set-time-delay-in-javascript

var name = prompt('What is your name?');
alert('Hello, ' + name);
}

myFunction();

*/

// Question series

function Naming(){
var totalScore = 0;
var name = prompt('What is your name?');
alert('Hello ' + name);
}
//  console.log(name);
Naming()

function play(){
var play = prompt('This is a guessing game, to try to learn a little about the author, are you ready to play?')
if(play.toUpperCase() === 'YES' || play.toUpperCase() ==='Y'){
  alert('Great!');
} else {
  alert('Well, let\'s go ahead, I think you\'ll enjoy it.');
}
}
play()
//  console.log(play);


function book(){
var book = prompt('Do you think Bobby loves to read & collect books? As in over $3000 spent last year on them?');

if(book.toUpperCase() === 'YES' || book.toUpperCase() === 'Y'){
  alert('Yes! You are right!');
  totalScore++;
} else {
  alert('Actually, believe it or not, he is pretty big into books.');
}
}

book()

//  console.log(book);

function school(){
var school = prompt('Does Bobby have more than 3 degrees?');

if(school.toLowerCase() === 'no' || school.toLowerCase() === 'n'){
  alert('You are right; it seems that you are very astute.');
  totalScore++;
} else {
  alert('That would be pretty interesting, but I am afraid it is not the case.');
}
}
school()
//  console.log(school);


function married(){
var married = prompt('Do you think Bobby is married?');

if(married.toLowerCase() === 'yes' || married.toLowerCase() === 'y' ){
  alert('You are correct');
  totalScore++;
} else{
  alert('He is married, in fact.');
}
}
married()
// console.log(married);

function sibs(){
var siblings = prompt('Do you think Bobby has any siblings?');

if(siblings.toUpperCase() === 'YES' || siblings.toUpperCase() === 'Y'){
  alert('Indeed, that is correct');
  totalScore++;
} else {
  alert('Actually, he does have a brother.');
}
}
sibs()

//  console.log(siblings);
function outdoors(){
var outdoors = prompt('Does Bobby love the outdoors?');

if(outdoors.toUpperCase() === 'YES' || outdoors.toUpperCase() === 'Y'){
  alert('That is correct. Sadly, he has little time for it.');
  totalScore++;
} else {
  alert('Bobby is actually an avid outdoorsmans, but sadly has no time for it.');
}
}
outdoors()

//  console.log(outdoors);
function alert1(){
alert('Thank you, ' + name + ' for playing! Just a few more quesitons.');
}
alert1()

// A 4-attempt number guessing game.
function Guessing1(){
  
  var myArray = [0,1,2,3,4,5,6,7,8,9,10];
//var num = myArray[4];
var num = Math.floor((Math.random() * 10) + 1); //taken from W3Schools
var numOfGuesses = 1;

  for(numOfGuesses = 1; numOfGuesses <=4; numOfGuesses++) {
    var guess = prompt('What number am I thinking of?');
    if(num == guess) {
      alert('good job!');
      totalScore++;
      break;
    } else if(guess > num) {
      alert('Try a little lower.');

    } else if(guess < num) {
      alert('Try a little higher.');
    }
   // console.log(guess);
  }
}
Guessing1()
// 6-attempt non-numeric guessing game

// var possibleCarArray = ['Honda', 'Ford','Dodge', 'Chrysler', 'Toyota', 'Jeep', 'Lexus'];
function Guessing2(){
  var simpleArray = ['Honda', 'Dodge', 'Jeep'];
var myCars = simpleArray.includes(['Honda', 'Dodge', 'Jeep']);
var carGuesses = 0;

// ex: if (correctAnswers.includes(UserInput)) { alert('yay');} .includes returns boolean, not string

  for(carGuesses = 1; carGuesses <=6; carGuesses++) {
    var carInput = prompt('What kind of car has Bobby owned? Choose from Honda, Ford, Dodge, Jeep, Chrysler, Lexus.');
    
   // if(carInput.toLowerCase() === myCar.toLowerCase())
    
    if(myCars.toLowerCase() == carInput.toLowerCase()) { //myCars.toLowerCase() is not a function???
      alert('Good job!');
      totalScore++;
      // console.log(carInput);
      break;

    } else if(carInput.toLowerCase() !== myCars.toLowerCase()) {
      alert('Try again.');
      console.log(carInput);
    }
  }
}
Guessing2()

  alert(name + ', your total score is ' + totalScore + '.');

// var userScore = 0;
// var questions = [0,1,2,3,4,5,6,7,8,9,10];
// var answers = ['0', '1', '2', '3', '4'];
// var response = '';

// for (var i = 0; i < questions.length; i++) {
//   response = prompt(questions[i]);
//   if (response.toLocaleLowerCase === answers[i].toLowerCase) {
//     alert('You are correct.');
//     userScore++;
//     console.log(userScore);
//   } else {
//     alert('That is incorrect');
//   }
