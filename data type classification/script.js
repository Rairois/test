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
console. log(arr[0])

// alert("Hello World!");  выводим на экран

/* let answer = confirm("Are you here?"); // предлагает выбор между OK и ОТМЕНА

console. log(answer); */

let answer = prompt ("Есть ли вам 18?","Да");

console. log(typeof(answer)); // typeof - позволяет проверять данные на тип

console. log("arr" + "-object");