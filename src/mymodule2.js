// Export means this person can be accessed from other files 
export const person = {
    name: 'John',
    age: 30
}

export function sayHello(){
    return `Hello ${person.name}`;
}

// If we use default we dont have to use curly braces in the app.js
const greeting = 'Hello World';
export default greeting;