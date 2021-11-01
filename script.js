
//name
let hi = prompt("Hi, I'm internett. What is your name?")

//pick number1
let randomnum1 = Math.floor(Math.random() * 10 ) + 1;
let quest1 = prompt("Hi, " + hi + ". Let's pick a number from 1-10.");
let answ1 = parseInt(quest1);

  if(randomnum1 === answ1) {
    alert("Nice! Same as me.")
  } else {
    alert("Good number, I will go for number " + randomnum1 + ".")
  }

//number + number
let quest2 = prompt("What is your number + my number?");
let answ2 = parseInt(quest2);

  if (answ2 === answ1 + randomnum1) {
    alert("Correct, you can math!")
  } else {
    alert("Nice try, but the correct answer is " + (answ1 + randomnum1) + ", please try again!");
  }

//pick number2
let randomnum2 = Math.floor(Math.random() * 10 ) + 1;
let quest3 = prompt("Pick a new number from 1-10.");
let answ3 = parseInt(quest3);

 if (answ3 === randomnum2 && answ1 === randomnum1) {
   alert("Nice, same as me again!")
 } else if (answ3 === randomnum2) {
   alert("Nice, same as me!")
 } else if (answ1 === randomnum1) {
   alert("Good number! This time my number is " + randomnum2 + ".")
 } else {
   alert("Good number! My number is " + randomnum2 + ".")
 }

//numbers + numbers
let quest4 = prompt("What is both yours and mine numbers combined?");
let answ4 = parseInt(quest4);
let link = " https://mastmo.github.io/handleliste/";
let message = "Gratulerer! her er premien din:" + link;

  if (answ4 === randomnum1 + randomnum2 + answ1 + answ3) {
    alert("Very good " + hi + ", you can math well!");
    document.write(message);
  } else {
    alert(hi + ", that not correct. Please try one more time.")
  }
