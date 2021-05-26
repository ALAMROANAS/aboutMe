'use strict';

let counter = 0;
let score = 0;



function questionNum1() {
  let mycar = prompt('Is BMW is my favorite car?');
  mycar.toLowerCase();
  if (mycar === 'yes' || mycar === 'y') {
    alert('answer correct');
    score++;
  }else if (mycar === 'no' || mycar === 'n') {
    console.log('correct answer');
  }else{
    alert('answer yes or no');
  }
}
function questionNum2() {
  let myage = prompt('do you know what is my age?');
  console.log(myage);
  if (myage === 'yes' || myage === 'y') {
    score++;
    alert('answer correct');
  }else if (myage === 'no' || myage === 'n') {

    console.log('correct answer');
  }else{
    alert('answer yes or no');
  }
}
function questionNum3() {
  let mybook = prompt('do you know my book?');
  console.log(mybook);
  if (mybook === 'yes' || mybook === 'y') {
    score++;
    alert('answer correct');
  }else if (mybook === 'no' || mybook === 'n') {
    console.log('correct answer');
  }else{
    alert('answer yes or no');
  }
}

function questionNum4() {
  let mycontry = prompt('do you know my contry?');
  console.log(mycontry);
  if (mycontry === 'yes' || mycontry === 'y') {
    score++;
    alert('answer correct');
  }else if (mycontry === 'no' || mycontry === 'n') {
    console.log('correct answer');
  }else{
    alert('answer yes or no');
  }
}

function questionNum5() {
  let myfather = prompt('do you know what is my father name?');
  console.log(myfather);
  if (myfather === 'yes' || myfather === 'y') {
    score++;
    alert('answer correct');
  }else if (myfather === 'no' || myfather === 'n') {
    console.log('correct answer');
  }else{
    alert('answer yes or no');
  }
}

function questionNum6() {

  let guessnum = null;
  for (let j=0; j<6; j++){
    guessnum =prompt('guess my lucky number 1 to 10');
    guessnum = Number(guessnum);
    if(guessnum === 8){
      score++;
      alert('correct answer');
      break;
    }else if(guessnum < 8){
      alert('too low');
    }else if(guessnum > 8){
      alert('to high');
    }
    if(j === 3){
      alert('my lucky number is 8');
    }
  }
}

function questionNum7() {
  let favlanguage = ['css','html','javascript'];
  outerloop : for(let j=0 ; j<6 ; j++){
    let useranswer =prompt('guess my favourite programming language');
    for(let j=0 ; j < favlanguage.length ; j++){
      if(useranswer === favlanguage[j]){
        score++;
        alert('correct answer');
        break outerloop;
      }
    }

    counter += 1;
    console.log(counter);
  }
  if(counter === 6){

    alert('my favourite language' + favlanguage);
  }
  alert(`Your score is ${score} out of 7`);
}


questionNum1();
questionNum2();
questionNum3();
questionNum4();
questionNum5();
questionNum6();
questionNum7();
