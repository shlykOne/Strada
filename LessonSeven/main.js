/*
function sayHi(name = 'Пользователь'){
    const currentName = 'Приветствую,' + name + '!'
    console.log(currentName)
}
sayHi('Евгений'); // Приветствую, Евгений!
sayHi('Илья');    //Приветствую, Илья!
sayHi();// undefined

function checkAge(age){
    if(age<18){
        console.log('you are not allowed')
    }else if(age>=18){
        console.log('you are welcome')
    }
}
checkAge(25);


let name = 'Ilya';
function checkName(){
    let name = 'Evgeniy';
    console.log(name);
}
console.log(name)// Ilya
checkName(); // Evgeniy

function sum(a, b) { 
	return a + b; 
}
let result = sum(1, 2);
console.log(result); // 3


function sum(a,b){
    return a + b
}
console.log(sum(2,5));

function user (name){
    let message = 'Приветствуем вас,' + name + '!';
    console.log(message);
}
user('Evgeniy');

function sayHi(name){
    let message = 'Приветствую вас,' + name + '!';
    console.log(message);
}
sayHi('Evgeniy'); // Приветствую вас, Evgeniy


function sayHi(name = 'Пользователь'){
    let message = 'Привет,' + name
    console.log(message);
}
sayHi('Evgeniy'); // Привет, Evgeniy
sayHi(); // Привет, Пользователь

function checkAge(age){
    if (age < 18){
        console.log('you are not allowed')
    }else if (age>=18) {
        console.log('you are welcome!')
    }
}
checkAge(10); // not allowed
checkAge(23); // welcome
checkAge(18); // welcome
checkAge(2); // not allowed

let name = 'Ilya'
function checkName(){
    let name = 'Evgeniy';
    console.log(name);
}
checkName(); // Evgeniy
console.log(name); //Ilya


function sum (a,b){
    return a + b ; 
}
let result = sum(1,2);
console.log(result);

function checkAge(age){
    return (age > 18) ? true : confirm ('А родители разрешили?')
}
function checkAge(age){
    return (age > 18) || confirm ('А родители разрешили')
}

function min(a,b){
    if(a<b){
        return a
    }else{
        return b
    }
}
let result = min(1, 1);
console.log(result); //-1

function pow (x,n){
    return x ** n
}
//let result = pow(3,2)
//let result = pow (3,3);
let result = pow(1, 100);
console.log(result);

function pow(){
    let x = prompt('Укажите число X')
    let n = prompt('Укажите число n')
    return x ** n
}
let result = pow();
alert(result);



function calc(operation, a , b){
    if (operation === 'add'){
        return a + b
    }else if (operation === 'multi'){
        return a * b
    }else if(operation === 'subs'){
        return a - b
    }
}
//let result = calc('add',2 ,5) //7
//let result = calc('multi', 10, 2); //20
let result = calc('subs', 10, 2); // 8
console.log(result);


*/
function calc(){
let a = +prompt('Укажите первое число')
let b = +prompt('Укажите второе число')
let operation = prompt('Укажите знак')
if(operation === '+'){
    return a + b
}else if (operation === '-'){
    return a - b 
}else if(operation === '*'){
    return a * b
}else if(operation === 'null' || operation === ''){
    alert('Не указаны')
}

}
let result = calc();
alert(result);

