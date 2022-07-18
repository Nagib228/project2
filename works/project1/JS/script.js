"use strict";

const str = 'text';

const arr = [1, 2, 4];

//console.log(arr.length); // length это свойство

console.log(str[2]);

console.log(str.toLocaleUpperCase());//method
console.log(str.toLocaleLowerCase()); //method

const fruit = 'Some fruit';

console.log(fruit.indexOf('fruit')); //method (с какой позиции начинается, если -1 то нет такого куска)

const logg = 'Hello world!';

console.log(logg.slice(6, 11)); // method (вырезка без включения) c 1 или 2 аргументами

console.log(logg.substring(6, 11)); //method (тоже что и slice, но не поддерживает отрицательные значения)

console.log(logg.substr(6, 5)); // method (сколько символов,начиная с 7 вырезать(сейчас стоит 5))

const num = 12.2;
console.log(Math.round(num)); //method округления чисел

const test = "12.2px";
console.log(parseInt(test)); //method перевода в тип Int
console.log(parseFloat(test)); //method перевода в тип Float
