"use strict";

const numberOfFiles = +prompt("Сколько фильмов Вы посмотрели?", "");


const personalMovieDB = {
    count: numberOfFiles,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
let i = 0;
do {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = +prompt("На сколько оцените его?", "");
    i++;
    if (a != null && b != null && a != '' && b != '' && a.length < 50){
        personalMovieDB.movies[a] = b; 
        console.log("Done");
    } else {
        console.log('error');
        i--;
    }
} while (i < 2);

if (personalMovieDB.count < 10){
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log("Вы классичесий зритель");
} else if (personalMovieDB.count >= 30){
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);