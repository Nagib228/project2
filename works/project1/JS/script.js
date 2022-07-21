"use strict";

const options = {
    name: 'test',   // свойство: значение
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){
        console.log(`Test`);  //метод в options
    }
};

options.makeTest();  //вызов функции и метода

const {border, bg} = options.colors;  //ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТА
console.log(border);

//console.log(options['colors']['border']);

// delete options.name;  //удаление свойства

// console.log(options);

// let counter = 0;

// for (let key in options){     //копает options, его свойства = key столько раз,сколько свойств
//     if (typeof(options[key]) == `object`) {
//         for (let i  in options[key]){
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);

console.log(Object.keys(options));  //массив с ключами (свойствами)

console.log(Object.keys(options).length);  //количество эл-тов в массиве

