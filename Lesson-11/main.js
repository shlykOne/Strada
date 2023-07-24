/*
const info = {
    'Evgeniy': 2552,
    'igor': 1845,
    'Artem': 27809,
    'John Smith': 255668
}
//console.log(info); - возвращает в консоль все ключи с их знач
//console.log(info.Evgeniy) // 2552
//console.log(info["John Smith"]) // 255668
info['John Smith'] = 1234 // Изменение значение ключа
info["Ilya"] = 2552 // Добавление нового ключа со знач

delete info ['John Smith']; // Удаление записи John Smith
console.log(info)

const info = {
    list:{
        'Evgeniy': 2552,
        'Ilya': 255668,
        'Anton': 12443,
        'Artem': 255120
    },
    log(){
        console.log(this.list)
    }
}
info.log()
const info = {
    list:{
    'UserName': 'puppy1234',
    'Password': 1234
    }, 
    add(name, number){
        this.list[name] = number
    }
}const fullname = 'UserName'
console.log(info.list[fullname]);
console.log(info.list['UserName']);

const phoneBook = {
    list:{
        'Evgeniy': 940341,
        'Ilya': 473138,
        'Artem': 987819
    },
    add(name, number){
        this.list[name] = number
    },
    delete(name){
        delete this.list[name]
    }
}
phoneBook.add('Igor', 984192)
console.log(phoneBook.list)
phoneBook.delete['Artem']
console.log(phoneBook.list)

const phoneBook = {
    list:{
        'Evgeniy': 259481,
        'Igor': 876152,
        'Artem': 143651
    },
    add(name, number){
        this.list[name] = number
    },
    delete(name){
        delete this.list[name]
    }
}
console.log(phoneBook.list)
phoneBook.add('Ilya', 255668)
console.log(phoneBook.list)
phoneBook.delete('Igor')
phoneBook.delete('Artem')
console.log(phoneBook.list)

const info = {
    list:{
        'UserOne':'value 1',
        'UserTwo':'value 2'
}
}
if(info.list.UserOne){
    console.log('Its UserOne')
}
if(info.list.userThree){
    console.log('Its User Three') // Не будет отображаться т.к false 
}
console.log(info.list.userThree);

const obj = {
    list:{
    'UserOne': 'Value1',
    'UserTwo': 'Value2'
    
}
}
obj.list['UserFour'] = undefined
console.log(obj.list)
console.log('UserOne' in obj.list) // True
console.log('UserThree' in obj.list) // false 
console.log('UserFour' in obj.list) // True


const phoneBook = {
    list:{
        'Evgeniy': 865197,
        'Ilya': 972610,
        'Artem': 927971
    }
}
console.log('Evgeniy' in phoneBook.list)\

const phoneBook = {
    list:{
        'Evgeniy': 291481,
        'Igor': 491841,
        'Ilya': 491857
    }
}
for(const name in phoneBook.list){
    console.log(name + "-" +  phoneBook.list[name])
}
const phoneBook = {
    list:{
        'Evgeniy': 927121,
        'Ilya': 947102,
        'Artem': 787182
    }
}
console.log(phoneBook)
phoneBook.list['Vladimir'] = 976726 // добавление записи (ключ-значение)
phoneBook.list['Evgeniy'] = 291768 // Изменение записи (значение ключа)
delete phoneBook.list['Artem']

console.log(phoneBook)


const phoneBook = {
    list:{
        'Evgeniy': 948712,
        'Artem': 8472912
    },
    log(){
        console.log(this.list)
    }
}
phoneBook.log()
const fullname = 'Evgeniy'
console.log(phoneBook.list[fullname]) // 

const contact = {
    list:{
        'Evgeniy': 364623,
        'Ilya': 847261
    },
    add(name,number){
        this.list[name] = number;
    },
    delete(name){
        delete this.list[name]
    }
}
contact.add('Artem', 746718)
console.log(contact.list)
contact.delete('Ilya')
console.log(contact.list)

const phoneBook = {
    list:{
        'Evgeniy': 847231,
        'Ilya': 847261
    }
}
console.log('Evgeniy' in phoneBook.list)
console.log('Artem' in phoneBook.list)
*/
const phoneBook = {
    list:{
        'Evgeniy': 384741,
        'Ilya': 847291
    }
}
for(const name in phoneBook.list){
    console.log(name + "-" + phoneBook.list[name])
}
