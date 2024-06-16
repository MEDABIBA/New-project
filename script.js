/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы



P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;

function ShowMyDB(hidden){
  if (!hidden){
    console.log(personalMovieDB)
  }
};

function start() { 
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
};

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for(let i = 0; i < 2; i++){
    const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', '');

      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done')
        }   
        else {
            i--;
            console.log('error')
        };

        if( 10 > personalMovieDB.count){
            console.log('просмотрено довольно мало фильмов')
        }
        else if ( 10 < personalMovieDB.count && 30 > personalMovieDB.count){
            console.log('Вы классический зритель')
        }
        else if ( 30 < personalMovieDB.count){
            console.log('Вы киноман')
        }
        else {
            console.log('Произошла ошибка')
        }
};
ShowMyDB(personalMovieDB.privat);

function writeYourGenres () {
  for ( let i = 1; i <= 3; i++){
    let favoriteGenre =  prompt(`Ваш любимый жанр под номером ${i}`)
    personalMovieDB.genres[i - 1] = favoriteGenre
  }

}
writeYourGenres()



