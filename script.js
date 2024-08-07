/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => { 
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
  while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }},

   rememberMyFilms: () => {
    for(let i = 0; i < 2; i++){
      const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
        b = prompt('На сколько оцените его?', '');
  
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
              personalMovieDB.movies[a] = b;
              console.log('done')
          }   
          else {
              i--;
              console.log('error')
          };
  }},

  detectPersonalLevel: () => {
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
}},
  
 ShowMyDB: (hidden) => {
  if (!hidden){
    console.log(personalMovieDB)
  }
},

toggleVisibleMyDB: function (){
  if (personalMovieDB.privat){
    personalMovieDB.privat = fasle;
  } else {
    personalMovieDB.privat = true;
  }
},

writeYourGenres: () => { 
  for ( let i = 1; i <= 3; i++){
    
    let genre = prompt(`Ваш любимый жанр под номером ${i}`);
    if (genre == '' || genre == null){
      i--;
    } else {
      personalMovieDB.genres[i - 1] = genre
    }
  }
  personalMovieDB.genres.forEach((item, i) =>{
    console.log(`Любимый жанр ${i + 1} - это ${item}`)
  });
  
}

}




