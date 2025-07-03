/*ДЗ №1

let a = 10;
alert(a);
a = 20;
alert(a);

let yearIphone = 2008;
alert ("Год выпуска iPhone: " + yearIphone);

let creator = "Брендан Эйх";
alert (`Имя создателя языка JavaScript - ${creator}`);

let b = 10;
let c = 2;
//alert (`${b + c}, ${b - c}, ${b * c}, ${b / c}`);
let result = c ** 5;
//alert (result);

a = 9;
b = 2; 
result = a % b;
alert (result);

// задача 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert (num);

//№8
let age = prompt("Сколько тебе лет?");
alert (age);

const user = {
  name: "Igor",
  age: 29,
  isAdmin: false,
};
user["city of residence"] = "Mersin";
user.age = 30;
delete user["city of residence"];

let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);

info = prompt("Как ваше имя?");
alert(`Привет, ${info}!`);


// ДЗ №2

//задача 1
let password = String("пароль");
let inputPassword = String(prompt("Введите пароль"));

if (inputPassword === password) {
  alert("Пароль введен верно");
} else {
  alert("Пароль введен неправильно");
}

//задача 2
let c = Number(prompt("Введи число"));
if (c > 0 && c < 10) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

// задача 3
let d = 3;
let e = 127;

if (d > 100 || e > 100 ) {
  console.log("Верно");
} else {
  console.log("Неверно");
}
  

// задача 4
let a = '2';
let b = '3';
alert(+a + +b);

//задача 5
let monthNumber = Number(prompt('Номер месяца'));
switch (monthNumber) {
  case 12:
  case 1:
  case 2:
    console.log('зима');
    break;
  case 3:
  case 4:
  case 5:
    console.log('весна');
    break;
  default:
    console.log('другое время года');
    break;
}

//задача 7
let a = Number(prompt('Введите число'));

if (!a == true) {
  a = prompt('Введено не число. Введите число');
} else if (a % 2 == 0) {
alert('Четное');
} else {
  alert('Нечетное');
}*/

//задача 8 и 9
let clientOS = 1; // 0 — iOS, 1 — Android
let clientDeviceYear = 2009;

if (clientOS === 0 && clientDeviceYear >= 2015) {
  console.log("Установите версию приложения для iOS по ссылке");
} else if (clientOS === 0 && clientDeviceYear < 2015) {
  console.log("Установите облегченную версию приложения для iOS по ссылке");
} else if (clientOS === 1 && clientDeviceYear >= 2015) {
  console.log("Установите версию приложения для Android по ссылке");
} else if (clientOS === 1 && clientDeviceYear < 2015) {
  console.log("Установите облегченную версию приложения для Android по ссылке");
} else {
  console.log("Не удалось определить операционную систему");
}
