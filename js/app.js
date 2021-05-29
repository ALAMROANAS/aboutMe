'use strict';


let username = prompt('whats your name?');
alert('welcome' + username);



let score = 0;



function questionNum1() {
  let mycar = prompt(' bmw is my favorite car?');
  mycar=mycar.toLowerCase();
  if (mycar === 'yes' || mycar === 'y') {
    alert('answer correct');
    score++;
  }else if (mycar === 'no' || mycar === 'n') {
    alert('incorrect answer');
    // console.log('correct answer');
  }else{
    alert('answer yes or no');
  }
}


function questionNum2() {
  let myage = prompt('do you think my age is 35?');
  myage=myage.toLowerCase();
  // console.log(myage);
  if (myage === 'yes' || myage === 'y') {
    score++;
    alert('answer correct');
  }else if (myage === 'no' || myage === 'n') {
    alert('you should know');
    // console.log('correct answer');
  }else{
    alert('answer yes or no');
  }
}
function questionNum3() {
  let lovebirds = prompt('do you think i love birds?');
  lovebirds=lovebirds.toLowerCase();
  // console.log(lovebirds);
  if (lovebirds === 'yes' || lovebirds === 'y') {
    score++;
    alert('yes i do');
  }else if (lovebirds === 'no' || lovebirds === 'n') {
    alert('are you kidding me?');
    // console.log('correct answer');
  }else{
    alert('answer yes or no');
  }
}

function questionNum4() {
  let mycontry = prompt('do you think i am from amman??');
  mycontry=mycontry.toLowerCase();
  // console.log(mycontry);
  if (mycontry === 'yes' || mycontry === 'y') {
    alert('incorrect answer');
  }else if (mycontry === 'no' || mycontry === 'n') {
    alert('yes i am from alkarak');
    score++;
    // console.log('correct answer');
  }else{
    alert('answer yes or ');
  }
}

function questionNum5() {
  let games = prompt('do you think i hate games?');
  games=games.toLowerCase();
  // console.log(games);
  if (games === 'yes' || games === 'y') {
    alert('you dont know nothing about me');
  }else if (games === 'no' || games === 'n') {
    alert('lets play pubg together');
    score++;
    // console.log('correct answer');
  }else{
    alert('answer yes or no');
  }
}

function questionNum6(){
  for (let j=0; j<=5; j++){
    let guessnum =prompt('guess my lucky number from 1 to 10');
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
    if(j === 5){
      alert('you lost my lucky number is 8');
    }
  }
}

function questionNum7() {
  let favlanguage = ['css','html','javascript'];
  outerloop : for(let j=0 ; j<6 ; j++){
    let useranswer =prompt('guess my fav programming language');
    for(let i=0 ; i < favlanguage.length ; i++){
      if(useranswer === favlanguage[i]){
        score++;
        alert('correct answer');
        break outerloop;
      }
    }
    if(j===5){
      alert('you lost my fav language are' + favlanguage);
    }
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
