/****************** 
    BASIC JAVASCRIPT SYNTAX AND CODE
*****************/

//=======DECLARE VARIABLES=======//

/* 
JavaScript provides 7 basic datatypes
undefined, null, boolean, string, symbol,
number and object
*/

/* 
NOTE: var is globally scoped and 
let and const are scoped at a block level
*/

//_____ var way of declaration _____ //
var myName = "Max";
myName = 8; // Javascript is a dynamic language
//_____ let way of declaration _____ //
let myName2 = "Max123";
//_____ const is an immutable declaration _____//
const pi = 3.14;
// pi = 100;      // this would give us an error

// ========= CONSOLE METHODS ========= //
console.log("Hello World"); // prints
// read mozilla documentation on console

// _______ typeof method _______ //
console.log(typeof pi); // gives number

// ========== Strings =========== //
//___concatenation
const name = "Max";
console.log("Hello " + name + " Welcome");
// gives Hello Max Welcome

//___template strings
console.log(`My name is ${name}`);
// use backtics

//___length property
console.log(name.length); // outputs 3

//___toUpperCase()/ ___toLowerCase()
console.log(name.toUpperCase());

//___substring
const string_name = "Hello World";
console.log(string_name.substring(0, 5));
// outputs first 5 characters

//___split  (splits string into an array)
const s = "technology,computers, code";
console.log(s.split("")); //splits each letter
console.log(s.split(", ")); //splits word wise as seperator is ,

// ============== ARRAYS ============== //
// ___create array
//array constructor
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);
//brackets
const fruits = ["apples", "oranges", "grapes", 10, true];
console.log(fruits);

//access one of fruits
console.log(fruits[0]); //apples

//add to array
fruits[5] = "watermelons";
fruits.push("strawberries");
fruits.unshift("mangos");

fruits.pop(); //removes last one off

console.log(Array.isArray(fruits));
// check if array

console.log(fruits.indexOf("oranges"));
// indexOf oranges recieved

// ============ OBJECT LITERALS ============== //

/* 
Basically this is a dictionary as in python
 */

const person = {
  firstName: "Max",
  lastName: "Nobody",
  age: 18,
  hobbies: ["swimming", "drawing"],
  address: {
    street: "Street 1",
    city: "city_1",
    state: "State_1",
  },
};
console.log(person.firstName);
console.log(person.hobbies.indexOf("swimming"));
console.log(person.hobbies[1]);

// pulling information from object
const { firstName, lastName } = person;
console.log(firstName, lastName);
const {
  address: { city },
} = person;
console.log(city);

// add property
person.email = "lol@lol.lol";
console.log(person);

// ========= TO JSON FORMAT ========== //
const todos = [
  {
    id: 1,
    text: "to do 1",
    isCompleted: true,
  },
  {
    id: 2,
    text: "to do 2",
    isCompleted: true,
  },
  {
    id: 3,
    text: "to do 3",
    isCompleted: false,
  },
];

const toJSON = JSON.stringify(todos);
console.log(toJSON);
console.log(typeof toJSON); // STRING

// =========== LOOPS ============ //
// for loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// while loop
let i = 0;
while (i < 10) {
  console.log("While Loop " + i);
  i++;
}

// LOOP Through Arrays
for (let todo of todos) {
  console.log(todo.text);
}

// forEach, map, filter
//forEach
todos.forEach(function (todo) {
  console.log(todo.text);
});
//map
const todoText_map = todos.map(function (todo) {
  return todo.text;
});
console.log(todoText_map);
//filter
const todoText_filter = todos.filter(function (todo) {
  return todo.isCompleted === true;
});
console.log(todoText_filter);

// ========== CONDITIONALS ============= //
//____ if else statements
const x = 10;
if (x == 10) {
  console.log("x is 10");
}
// Note == matches only the value and not the datatype
/*
 What that statement means is if we change
const x = 10 to const x = "10", the == would 
still hold true
 */
const y = "10";
if (y == 10) {
  console.log("x is 10");
}

/*  
=== Matches also the datatype
*/
const z = "10";
if (z === 10) {
  console.log("x is 10");
} else {
  console.log("x is not 10");
}

//_____ternary operators
const xa = 10;
const color = xa >= 10 ? "red" : "green";
console.log(color); // shows red

/* What this means is if x > 10, set color = red else set it to green */
switch (color) {
  case "red":
    console.log(`COLOR is ${color}`);
    break;
  case "blue":
    console.log(`COLOR is ${color}`);
    break;
  default:
    console.log("color is not red or blue");
    break;
}

// ============== Functions =============== //
// using function keyword
function addNums(num1 = 1, num2 = 1) {
  return num1 + num2;
}
console.log(addNums());
console.log(addNums(4, 6));

// using fat arrow
const addNums2 = (num1, num2) => {
  return num1 + num2;
};
console.log(addNums2(12, 34));

// ========== OBJECT ORIENTED PROGRAMMING ========= //

//___Using constructor function with prototypes
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob); //like self in python
  this.getBirthYear = () => {
    return this.dob.getFullYear();
  };
  this.getName = () => {
    return `${this.firstName} ${this.lastName}`;
  };
}

const person1 = new Person("Max", "Dan", "11-17-2001"); // mm-dd-yyyy format
console.log(person1);
console.log(person1.firstName);
console.log(person1.dob);
console.log(person1.getBirthYear());
console.log(person1.getName());
// prototypes object
Person.prototype.getBirthYear = () => {
  return this.dob.getFullYear();
};
Person.prototype.getFullYear = () => {
  return this.firstName;
};
console.log(person1.getBirthYear());
console.log(person1.getName());

//___ ES6 Classes
class Person1 {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  getBirthYear() {
    return this.dob.getFullYear();
  }

  getFullName() {
    return this.firstName;
  }
}

const person3 = new Person1("Dan", "Manny", "3-3-1993");
console.log(person3);
