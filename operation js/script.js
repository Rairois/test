'use strict';


var number = 5;
var string = "Hello!"
var sym = Symbol();
var boolean = true;
null; // что,то что не существует
undefined; // объект существует но значения не имеет
var obj ={};

console.log(4/0);
console.log('string'*9)

let something; // объект без значения
console.log(something);

let persone = {
    name: "John", 
    age: 25,
    isMarried: false
};

console.log(persone.name);
console.log(persone["name"]); // 2 способ 

let arr = ['plum','orange.jpg','apple.bmp'];
console. log(arr[0]);

// alert("Hello World!");  выводим на экран

/* let answer = confirm("Are you here?"); // предлагает выбор между OK и ОТМЕНА

console. log(answer); */
/* let answer = +prompt("Есть ли вам 18?","Да");

console. log(typeof(answer));

console. log(typeof(null));

console. log("arr" + "-object"); */


let incr = 10,
    decr = 10;

    console. log(++incr);
    console. log(--decr);

    console. log(5%2); // получаем остаток от 5/2=1
    console. log("2" == 2); // === сравнение по типам данных

    let isChecked = true;
        isClose = true;

    console. log(isChecked && isClose); // оператор И 
    console. log(isChecked || isClose); // оператор ИЛИ