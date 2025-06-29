/*let a = 10;
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
*/

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
