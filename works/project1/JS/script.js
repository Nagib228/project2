"use strict";

let num = 20; //глобальная переменная

function showFirstMessage(text){
    console.log(text);   // function decloration
    let num = 10; //локальная переменная
}

showFirstMessage("Hello world!");
console.log(num);

// function calc(a, b){
//     return (a + b);
// }

// console.log(calc(4, 3));

function ret() {
    let num = 50;
//
//
    return num;
}
const anothernum = ret();
console.log(anothernum);

let logger = function() {
    console.log('Hello'); //function expression
};

logger();

const calc = (a, b) => a + b; //стрелочная фукнция