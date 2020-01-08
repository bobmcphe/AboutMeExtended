 'use strict';
// console.log('working')
// /*

// if( setTimeout >){
  
//   }


// function = myfunction() {
//     var delayInMilliseconds = 1000; //1 second

// setTimeout(function() {
//   //your code to be executed after 1 second
// }, delayInMilliseconds);

// //timeout code taken from StackOverflow, https://stackoverflow.com/questions/17883692/how-to-set-time-delay-in-javascript

// var name = prompt('What is your name?');
// alert('Hello, ' + name);
// }

// myFunction();

// */

// // Question series

// var name = prompt('What is your name?');
// alert('Hello ' + name);
// //  console.log(name);


// var play = prompt('This is a guessing game, to try to learn a little about the author, are you ready to play?')
// if(play.toUpperCase() === 'YES' || play.toUpperCase() ==='Y'){
//   alert('Great!');
// } else {
//   alert('Well, let\'s go ahead, I think you\'ll enjoy it.');

// //  console.log(play);



// var book = prompt('Do you think Bobby loves to read & collect books? As in over $3000 spent last year on them?');

// if(book.toUpperCase() === 'YES' || book.toUpperCase() === 'Y'){
//   alert('Yes! You are right!');
// } else {
//   alert('Actually, believe it or not, he is pretty big into books.');
// }
// //  console.log(book);


// var school = prompt('Does Bobby have more than 3 degrees?');

// if(school.toLowerCase() === 'no' || school.toLowerCase() === 'n'){
//   alert('You are right; it seems that you are very astute.');
// } else {
//   alert('That would be pretty interesting, but I am afraid it is not the case.');
// }
// //  console.log(school);

// var married = prompt('Do you think Bobby is married?');

// if(married.toLowerCase() === 'yes' || married.toLowerCase() === 'y' ){
//   alert('You are correct');
// } else{
//   alert('He is married, in fact.');
// }
// // console.log(married);

// var siblings = prompt('Do you think Bobby has any siblings?')
// if(play.toUpperCase() === 'YES' || play.toUpperCase() === 'Y'){
//   alert('Indeed, that is correct');
// } else {
//   alert('Actually, he does have a brother.');
// }
// }
// //  console.log(siblings);

// var outdoors = prompt('Does Bobby love the outdoors')
// if(outdoors.toUpperCase() === 'YES' || play.toUpperCase() === 'Y'){
//   alert('That is correct. Sadly, he has little time for it.');
// } else {
//   alert('Bobby is actually an avid outdoorsmans, but sadly has no time for it.');
// }
// //  console.log(outdoors);

// alert('Thank you, ' + name 'for playing!');

var myArray = [0,1,2,3,4,5,6,7,8,9,10];
var num = myArray[4];

var guess = prompt('What number am I thinking of?')
if(num === guess) {
  alert('good job!');

} else if(guess > num) {
  alert('Try a little lower.');

} else if(guess < num) {
  alert('Try a little higher.');
}
console.log(guess);

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
//   } }