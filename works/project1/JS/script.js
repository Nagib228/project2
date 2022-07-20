"use strict";

function first() {
    // Do something
    setTimeout(function(){
        console.log(1); // после задержки вывод 1
    }, 500);  //задержка 500 ms
}

function second() {
    console.log(2);
}

first();
second(); //результаты в разное время (из-за задержки)

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();  //callback function (последовательность)
}

function done() {
    console.log(`Я прошёл этот урок!`);
}

learnJS(`JavaScript`, done); //выполни done тогда,когды ты дойдёшь до callback (встаёт на место callback)
