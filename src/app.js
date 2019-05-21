// const greeting = 'Hello World';
// console.log(greeting);

// const getData = async (url) => {
//   const response = await fetch(url);
//   const result = await response.json();
//   console.log(result);
// };

// getData('https://jsonplaceholder.typicode.com/posts');

// Common JS Module Syntax:
//const person = require('./mymodule1');
//console.log(person.name);

// ES2015 Module:
// import { person } from './mymodule2';

// console.log(person.name);

// Function:
//import { person, sayHello } from './mymodule2';
// console.log(person.name);
// console.log(sayHello());

// Or you can import everything out:
//import * as mod from './mymodule2';
// console.log(mod.person.name);
// console.log(mod.sayHello());

// When we use default in the module.js we can do:
import greeting from './mymodule2';
console.log(greeting);