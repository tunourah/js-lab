
//  q1

let haightoftranglar = 10;
let widht = 22;

console.log( `The area of the rectangle is ${haightoftranglar * widht}`);  


// q2

let temperature = 40;
let Celsius = (temperature - 32) * 5/9;
let Fahrenheit = (temperature * 9/5) + 32;
console.log(`The temperature ${temperature} °F is ${Celsius.toFixed(2)} degrees Celsius and ${temperature} °C is ${Fahrenheit} degrees Fahrenheit`);


// q3

let hours = 10;
let seconds = hours * 60 * 60;
console.log(`The number of seconds in ${hours} hours is ${seconds} seconds`);

// q4
/*
 * REQUIREMENTS
 * 1. Your code should have two variables -  `thingOne` and `thingTwo`
 * 2. Your code should only have one `console.log` statement
 * 3. Your code should print out the values of `thingOne` and `thingTwo` using concatenation
 * 4. Your code should contain semicolons at the end of each line
 */

let wordOne = "thingOne";
let wordTwo = "thingTwo";
let totalWords = wordOne +" "+ wordTwo;
console.log(totalWords);

// q5

let bill = 10.25 + 3.99 + 7.15;
let tip = bill * 0.15;
let total = bill + tip;
console.log(`The total bill is $${total}`);

// q6
let adjective1 = "amazing";
let adjective2 = "fun";
let adjective3 = "entertaining";
let madLib = `The Intro to JavaScript course is ${adjective1}. James and Julia are so ${adjective2}. I cannot wait to work through the rest of this ${adjective3} content!`
console.log(madLib);


//q7

let firstName =  " Julia";
 let interest = "cats " ;
let  hobby = "play video games ";

let  awesomeMessage = `Hi, my name is ${firstName}. I love ${interest}. In my spare time, I like to ${hobby}.`