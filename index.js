// vraiable :
// 1.Number
// string

// let name = "matt";
// console.log(name);

// rowls
// cannot be a reserved keyword
// should be meaningful
//them cannot start number(nam1)
// cannot contain a spacee or hyphen (_ -)
//are case-sensitive
let interestRate = 1;
interestRate = 5;
console.log(interestRate);
//primitves
// let name = 'alina';
// let age = 22;
// let isApproved = false;
//  // bolean
// let firstname = undefined;
// let selectedColor = null;
// let person = {
//     name : 'alina',
//     age : 23,
// lastName : 'asrzad'

// };
// //bracket notation
// person['name'] = 'sara';
// //dot notation *
// person.lastName = 'sam  '
// console.log(person.name )
let selectedColors = ["red", "blue "];
selectedColors[2] = 3;
console.log(selectedColors.length);

//********************************************* */

function greet(name, lastName) {
  console.log("hi" + " " + name + "  " + lastName);
}
greet("Alina", "asrzad");
//***************************** */
function square(number) {
  return number * number + number - 3;
}

console.log(square(4));
//  ***           ****          ***         ***       ****      ***
let x = 6;
let y = 3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x % y);
console.log(x / y);
console.log(x ** y);
//***********************************
//  */
// if a customer has more than 100 points
// they are a 'gold' customer, otherwise
// they are 'silver' customer

let points = 20;
let type = points > 100 ? "gold" : "silver";
console.log(type);

// ***************88          ************
console.log(false && true);
console.log(true && true);
console.log(true && true);
console.log(false && true);

//***************************** */
console.log(false || 2);

// ********************           ***                 *******         ****//

// alert("hello")

// ************           *******
//              **********
let hour = 23;
if (hour >= 6 && hour < 12) {
  console.log("good morning");
} else if (hour > 12 && hour < 18) {
  console.log(" good afternoon");
} else console.log("good evening");
// ******   *****  ****   ****    *****     *****                              ***
let role = "state";
switch (role) {
  case "guest":
    console.log("dead");
    break;
  case "state":
    console.log("a live");
    break;
  default:
    console.log("unknown");
}
//  ***       ***         ***       ***       ***
for (let i = 1; i <= 4; i++) {
  console.log("hello world", i);
}

// *******        ******      ***
// let i = 0 ;
// while (i <= 5 ){
//   if (i % 2 !== 0)
// console.log(i)
//   i++
// }
// *****          ***         ***         ***
let i = 0;
do {
  if (i % 2 !== 0) console.log(i);
  i++;
} while (i <= 5);
// ********************************************

let r = 5;
do {
  if (r % 2 !== 0) console.log(r);
  i++;
} while (i <= 5);
// ***        ***       ***
// let s = 0;
// while (s<= 20){
//   if (s === 2) break;
//   console.log(s);
//   i++;
// }
//****     ***      ***     *** */
function Getnum(num1, num2) {
  if (num1 > num2) {
    console.log("number 1 " + num1 + "is bigger");
  } else if (num2 > num1) {
    console.log("number2 " + num2 + " is bigger");
  }
}
Getnum(56, 4);

//**    ***    ***    ****    **** */
function GetSpeed(speed) {
  const speedLimit = 70;
  const kmpoint = 5;
  const waypoint = 12;
  if (speed <= speedLimit) console.log("OK");
  else {
    let points = Math.floor((speed - speedLimit) / kmpoint);
    if (points >= waypoint) console.log(" licenses suspended ");
    else console.log("POINTS IS " + points);
  }
}

GetSpeed(97);
///***          ****           */
//factory function
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}
const circle1 = createCircle(3);
console.log(circle1);

// constructor function

function Circle(radius) {
  this.radius = this.radius;
  this.draw = function () {
    console.log('draw');
  };
}
const Crcle =  new Circle(2);
console.log(Crcle);

//ARRAYS
let numbers = [1,2,3,4,5,6,7,8,9,10];
//first
numbers.unshift(1,2)
numbers.splice(1,3,'fb')
numbers.push(3)
numbers.indexOf(2,4)
console.log(numbers)