// const desc = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(desc);

const { object } = require("zod");

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name:'ginger chai',
    price: 250,
    isAvailable: true,
    OderChai: function(){
        console.log("Chai nahi bani ");
        
    }
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Object.defineProperty(chai,'name', {
//     writable: false,
//     enumerable: false
// })
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
    console.log(`${key}:${value}`);
    }
} 
