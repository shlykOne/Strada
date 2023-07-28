/*
const phoneBook = {
    list:{
        'Evgeniy': 294814,
        'Ilya': 847491
    }
}
const fullName = 'Evgeniy'
console.log(phoneBook.list[fullName])


const phoneBook = {
    list:{
        'Evgeniy': 847461,
        'Ilya': 945874
    },
    add(name, number){
        this.list[name] = number
    },
    delete(name){
        delete this.list[name] //delete phoneBook = 'Ilya'
    }
}
console.log(phoneBook.list)
phoneBook.add('Artem', 948174)
console.log(phoneBook.list)
phoneBook.delete('Ilya')
console.log(phoneBook.list)



const phoneBook = {
    list:{
        'Evgeniy': 947712,
        'Ilya': 958712
    },
    delete(name){
        delete this.list[name]
    },
    add(name, number){
        this.list[name] = number
    }
}
console.log(phoneBook.list)
phoneBook.delete('Ilya')
console.log(phoneBook.list)
phoneBook.add('Ilya', 847124)
console.log(phoneBook.list)

const phoneBook = {
    list:{
        'Evgeniy': 484731,
        'Ilya': 947431
    }
}
console.log('Evgeniy' in phoneBook.list) // True 
console.log('Artem' in phoneBook.list) // false


const phoneBook = {
    list:{
        'Evgeniy': 847161,
        'Ilya': 846124
    }
}
for(const name in phoneBook.list){
        console.log(name + '-' + phoneBook.list[name])
}


const phoneBook = {
    list:{
        'Evgeniy': 484712,
        'Ilya': 847142
    }
}
console.log(phoneBook.list)
phoneBook.list['Evgeniy'] = 255668 // изменение значения в записи
phoneBook.list['Artem'] = 472831 // добавление значения в записи 
phoneBook.list['John Smith'] = 494712
delete phoneBook.list['Artem'] // Удаление записи 'Аrtem'

console.log(phoneBook.list.Evgeniy) // нотация с точкой 
console.log(phoneBook.list['John Smith'])


let user = { name: "John" };

let admin = user; // копируется ссылка


let user = { name: 'John'};
let admin = user;
admin.name = 'Evgeniy'; //Измененно по ссылке из переменной 'admin'

console.log(user.name)

const user = {name: 'Evgeniy'}
const currentUser = user
currentUser.name = 'Yoshinaka'
console.log(user.name)
console.log(currentUser.name)
user.name = 'Evgeniy'
console.log(user.name)
console.log(currentUser.name)

let a = {
    name: 'Evgeniy'
}
let b = a 
console.log (a == b)
console.log (a === b )

let a = {}
let b = {}
console.log(a == b)
console.log(a === b)

let user = {
    name: 'Evgeniy',
    age: 23
}
let clone = {}
for (let key in user){
    clone[key] = user[key]
}

console.log(clone)

let user = {
    name:'Evgeniy'
}
let location = {
    country: 'Moscow'
}
let action = {
    hobby: 'JS'
}

Object.assign(user, location, action)

console.log(user)

let user = {
    name: 'Evgeniy'
};
let location = {
    country: 'Russia',
    City: 'Moscow'
};
let action = { 
    hobby:'Learn JS'
}
Object.assign(user, location, action)
console.log(user)
let clone = Object.assign({}, user)

console.log(user)
console.log(clone)

let phoneBook = {
    list:{
        'Evgeniy': 394812,
        'Ilya': 581734
    }
}
console.log('Evgeniy' in phoneBook.list)
console.log('Artem' in phoneBook.list)


let phoneBook = {
    list:{
        'Evgeniy': 284751,
        'Ilya': 857139
    }
}
for(let name in phoneBook.list){
    console.log(name + '-' + phoneBook.list[name])
}


let data = {name: 'Evgeniy'}
let username = data
console.log(data)
console.log(username)
console.log(data == username)
console.log(data === username)


let phoneBook = {
    name: 'Evgeniy'
};
let clone = {}
for(let key in phoneBook){
    clone[key] = phoneBook[key]
}
clone.name = 'Evgen'
console.log(clone)
console.log(phoneBook)

let about = {
    Name: 'Evgeniy',
    Age: 23,
    National: 'Russian'
};
let info = {
    hobby: 'Learn JS'
};
Object.assign(about, info)
console.log(about)*/

let info = {
    name:'Evgeniy',
    sizes: {
        height: 200,
        width: 50
    }
}
let clone = Object.assign({}, info)

console.log(clone.sizes === info.sizes)
clone.sizes.height = 180
console.log(info.sizes)