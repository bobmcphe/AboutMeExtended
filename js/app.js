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
var totalScore = 0;
var name = prompt('What is your name?');
alert('Hello ' + name);
//  console.log(name);


var play = prompt('This is a guessing game, to try to learn a little about the author, are you ready to play?')
if(play.toUpperCase() === 'YES' || play.toUpperCase() ==='Y'){
  alert('Great!');
} else {
  alert('Well, let\'s go ahead, I think you\'ll enjoy it.');
}
//  console.log(play);



var book = prompt('Do you think Bobby loves to read & collect books? As in over $3000 spent last year on them?');

if(book.toUpperCase() === 'YES' || book.toUpperCase() === 'Y'){
  alert('Yes! You are right!');
  totalScore++;
} else {
  alert('Actually, believe it or not, he is pretty big into books.');
}
//  console.log(book);


var school = prompt('Does Bobby have more than 3 degrees?');

if(school.toLowerCase() === 'no' || school.toLowerCase() === 'n'){
  alert('You are right; it seems that you are very astute.');
  totalScore++;
} else {
  alert('That would be pretty interesting, but I am afraid it is not the case.');
}
//  console.log(school);

var married = prompt('Do you think Bobby is married?');

if(married.toLowerCase() === 'yes' || married.toLowerCase() === 'y' ){
  alert('You are correct');
  totalScore++;
} else{
  alert('He is married, in fact.');
}
// console.log(married);

var siblings = prompt('Do you think Bobby has any siblings?')
if(play.toUpperCase() === 'YES' || play.toUpperCase() === 'Y'){
  alert('Indeed, that is correct');
  totalScore++;
} else {
  alert('Actually, he does have a brother.');
}

//  console.log(siblings);

var outdoors = prompt('Does Bobby love the outdoors')
if(outdoors.toUpperCase() === 'YES' || play.toUpperCase() === 'Y'){
  alert('That is correct. Sadly, he has little time for it.');
  totalScore++;
} else {
  alert('Bobby is actually an avid outdoorsmans, but sadly has no time for it.');
}
//  console.log(outdoors);

alert('Thank you, ' + name + ' for playing! Just a few more quesitons.');

// A 4-attempt number guessing game.
var myArray = [0,1,2,3,4,5,6,7,8,9,10];
var num = myArray[4];
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
    console.log(guess);
  }

// 6-attempt non-numeric guessing game

var carArray = ['Honda', 'Ford','Dodge', 'Chrysler', 'Toyota', 'Jeep', 'Lexus'];
var myCar = carArray[0, 2, 5];
var carGuesses = 0;

  for(carGuesses = 1; carGuesses <=6; carGuesses++) {
    var carInput = prompt('What kind of car has Bobby owned? Choose from Honda, Ford, Dodge, Jeep, Chrysler, Lexus');
    
    if(carInput.toLowerCase() === myCar.toLowerCase()) {
      alert('good job!');
      totalScore++;
      // console.log(carInput);
      break;
    } else if(carInput.toLowerCase() !== myCar.toLowerCase()) {
      alert('Try again.');
      console.log(carInput);
    }
  }

  alert('Your total score is ' + totalScore);

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