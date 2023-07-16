function calc(operation, a, b){
    switch(operation){
        case "add":
            return a + b
        case 'multi':
            return a * b
        case 'subs':
            return a - b
    }
}
console.log(calc('add', 10, 8)) //18
console.log(calc('multi', 6, 3)) //18
console.log(calc('subs', 20, 2)) //18
