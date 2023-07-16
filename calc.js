function calc (operation, a, b){
    if(operation === 'add'){
        return a + b;
    }else if(operation === 'multi'){
        return a * b;
    }else if (operation === 'subs'){
        return a - b
    }
}
console.log(calc('add', 5, 3)) //8
console.log(calc('multi', 5, 5)) //25
console.log(calc('subs', 10, 2)) //8