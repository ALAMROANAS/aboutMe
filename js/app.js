'use strict';

alert('hi');
let mycar = prompt('do you know which my favorite car?');
console.log (mycar);

mycar.toLowerCase();

if (mycar === 'yes' || mycar === 'y'){
 alert('answer correct');   
}else if (mycar === 'no' || mycar === 'n'){
    console.log('correct answer');
}else{
    alert('answer yes or no')
}
let myage = prompt('do you know what is my age?');
console.log(myage);
if (myage === 'yes' || myage === 'y') {
    alert('answer correct');   
   }else if (myage === 'no' || myage === 'n') {
       console.log('correct answer');
   }else{
    alert('answer yes or no')
   }

let mybook = prompt('do you know my book?');
console.log(mybook);
if (mybook === 'yes' || mybook === 'y') {
    alert('answer correct');   
   }else if (mybook === 'no' || mybook === 'n') {
       console.log('correct answer');
   }else{
    alert('answer yes or no')
   }

let mycontry = prompt('do you know my contry?');
console.log(mycontry);
if (mycontry === 'yes' || mycontry === 'y') {
    alert('answer correct');   
   }else if (mycontry === 'no' || mycontry === 'n') {
       console.log('correct answer');
   }else{
    alert('answer yes or no')
   }

let myfather = prompt('do you know what is my father name?');
console.log(myfather);
   if (myfather === 'yes' || myfather === 'y') {
    alert('answer correct');   
   }else if (myfather === 'no' || myfather === 'n') {
       console.log('correct answer');
   }else{
    alert('answer yes or no')
   }

let score= 0;
let guessnum = null;
for (let j=0; j<6; j++){
    guessnum =prompt('guess my lucky number 1 to 10');
    guessnum = Number(guessnum);
    if(guessnum === 8){
        score++;
        alert('correct answer');
        break;
    }else if(guessnum < 8){
        alert('too low')
    }else if(guessnum > 8){
        alert('to high');
    }
    if(j === 3){
        alert('my lucky number is 8')
    }
}

let favlanguage = ['css','html','javascript'];
outerloop : for(let j=0 ; j<6 ; j++){
    let useranswer =prompt('guess my favourite language');
    for(let j=0 ; j < favlanguage.length ; j++){
        if(useranswer === favlanguage[j]){
        alert('correct answer');
        console.log(useranswer);
        console.log(j);
        break outerloop;
        }
    }
}
 if( j === 5){
    alert('my favourite language' + favlanguage);
}
