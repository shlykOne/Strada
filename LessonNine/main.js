/*
let a = 5+1;
switch(a){
    case 3:
        alert('Маловато')
        break;
    case 4:
        alert('В точку!')
        break
    case 5:
        alert('Многовато')
        break
    default:
        alert('Нет никаких значени')
}

let a = 1 + 2;
switch(a){
    case 3:
        alert('Маловато')
    case 4: 
        alert('В точку')
        break
    case 5: 
        alert ('Многовато')
    default: 
        alert('Нет никаких значении')
}

let a = '1'
let b = 0
switch(+a){
    case b + 1:
        alert('Выполняется')
        break
    default:
        alert('Не выполняется')
}

let a = 3 + 3;
switch(a){
    case 2:
    case 4:
        alert('Маловато')
        break
    case 5:
    case 6:
        alert('Еще чуть-чуть')
        break 
    case 7: 
        alert('В точку')
        break
}

let message = prompt('Укажите число')
switch(message){
    case '1':
    case '2':
        alert('Один или два')
        break
    case 3:
        alert('Никогда не выполнится')
        break
    default:
        alert('Неизвестное значение ')
}

alert('Вам сейчас нужно угадать число')
let message = prompt('Укажите число');
switch(message){
    case '1':
    case '2':
        alert('Маловато')
        break
    case '3':
    case '4':
        alert('Еще чуть-чуть')
        break
    case '5': 
        alert('В точку')
        break
    default:
        alert('Вы не угадали значения')
}

let message = prompt('Укажите браузер');
if(message == 'Edge'){
    alert( "You ve got the Edge! " )
}else if(message == 'Chrome'
    ||message == 'Firefox'
    ||message == 'Safari' 
    ||message == 'Opera' ) {
        alert( 'Okay we support these browsers too' );
}else{
    alert( 'We hope that this page looks ok!' );
}

const number = +prompt('Введите число между 0 и 3', '')
switch(number){
    case 0:
        alert('Вы указали число 0')
        break
    case 1:
        alert('Вы указали число 1')
        break
    case 2:
    case 3:
        alert('Вы ввели число 2 или 3 ')
        break
}*/


function calc (operation, a, b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        console.log('Вы не указали значении')
    }
    switch(operation){
        case 'add':
            return a + b;
        case 'multi':
            return a * b;
        case 'subs':
            return a - b
    }
}
console.log(calc());