const monthlyRent=500

let yearlyRent= monthlyRent * 12

console.log(monthlyRent, yearlyRent);

yearlyRent =1;
console.log(monthlyRent, yearlyRent)

const firstName ="Katia";
const myAge ="30"
const lastName ="Sfihi"
const sentence = `Hello ${firstName} ${lastName}! How are you. I am ${myAge}`

console.log(sentence)

const isTheSkyBlue = false

let greeting;

if(isTheSkyBlue) {
    greeting="good weather";
} else {
    greeting="bad weather";
}


console.log(greeting)




if (2 + 2 === 4) {
console.log("Hooray! Math still works")
} else {
    console.log("panic?")
}

const friendsAtYourParty=10 

if (friendsAtYourParty === 0) {
    console.log("x");
} else if (friendsAtYourParty <=4) {
    console.log("y");
} else {
    console.log("z");
}

let friendsAtYourParties = 0;

while (friendsAtYourParties < 10) {
    //friendsAtYourParties = friendsAtYourParties +1;
    friendsAtYourParties+= 2;
    console.log(friendsAtYourParties)
}

const character = 'f';
const timesToRepeat = 5;
let myString = '';

for (let i= 0; i < 5; i++) {
  myString++;
}
console.log(myString)


function addTwo(number){
    return number + 2
}

// Context //

const me = {
    name: {
      first: "Brian",
      last: "Holt"
    },
    location: {
      streetNumber: 500,
      street: "Fakestreet",
      city: "Seattle",
      state: "WA",
      zipCode: 55555,
      country: "USA"
    },
    getAddress() {
      return `${this.name.first} ${this.name.last}
  ${this.location.streetNumber} ${this.location.street}
  ${this.location.city}, ${this.location.state} ${this.location.zipCode}
  ${this.location.country}`;
    }
  };
  
  console.log(me.getAddress());

  // Array //

const daysOfTheWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  console.log(daysOfTheWeek);
  console.log(daysOfTheWeek[0]);
  console.log(daysOfTheWeek[1]);
  console.log(daysOfTheWeek[6]);

  const primeNumbers = [1, 2, 3, 5, 7, 11, 13, 17];
console.log(primeNumbers.length);
console.log(primeNumbers.join(" | "));


const x = 5;
const y = 10;
const z = 11;

const isTrue = true;

if (x !== y) {
    console.log(`these are not equal`);
}

if (x === y  && y === z) {
    console.log(`these are all equals`);
}

if (isTrue || x === z) {
    console.log (`this is an or statement`);
}


document.getElementById("myBtn").addEventListener("click", function(){
    this.style.color = "red";
});

function functionWithArgs(x, y) {

    functionWithArgs : functionWithArgs("hello", "salut");
    
    
    console.log(functionWithArgs);
    }

    // Setup  //
    
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7)


function nextInLine(arr, item) {
    // Only change code below this line
    
  arr.push(item);
  var item = arr.shift();
  
    return item;
    
    // Only change code above this line
    
  
  }

  // booleans

  function trueOrFalse(wasThatTrue) {
   
    if (wasThatTrue) {
      return "Yes, that was true";
    } 
      return "No, that was false";
  
  }

  //For loop
  
  /*function hello(){
for (i = 0; i < 5; i++ ) {
  console.log(hello);
  
}
}*/

function carol(katia) {

  for (i = 0; i < 5; i++ ) {
    console.log(katia);
    
  }
  }
  
  carol('jnm') 

  //new function

  function quickCheck(arr, elem) {  
    if (arr.indexOf(elem) >= 0 ) {
      return true;
    }
    return false;
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

  // new

  let nestedArray = [  ['deep'],  [ ['deeper'], ['deeper']  ],[ [ ['deepest'], ['deepest']   ], [ [  ['deepest-est?']   ]  ]  ] ];
  
  //NEW

  function isEveryoneHere(obj) {
    if (
      obj.hasOwnProperty("Alan") &&
      obj.hasOwnProperty("Jeff") &&
      obj.hasOwnProperty("Sarah") &&
      obj.hasOwnProperty("Ryan")
    ) {
      return true;
    }
    return false;
  }

  //Iterate Through the Keys of an Object with a for...in Statement

  function countOnline(usersObj) {
 
  let user = 0
  for (let user in usersObj) {
  if (usersObj[user].online === true) {
    return result++
  }
  }
  return result;
  }

  //factorialize
  function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }
  factorialize(5);

  /* Return Largest Numbers in Arrays
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i]. */

function largestOfFour(arr) {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    results[i] = largestNumber;
  }

  return results;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// first letter in capital letters for each word

function titleCase(string) {
  
  const array = string.split(' ');  
  
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i][0].toUpperCase() + array[i].substr(1);
  }

  return array.join(' ')
}
      
  titleCase("I'm a little tea pot")
  console.log(titleCase("I'm a little tea pot"))

  //Slice and Splice

  function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let localArray = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
      localArray.splice(n, 0, arr1[i]);
      n++;
    }
    return localArray;
  }
  
  //Falsy Bouncer

  function bouncer(arr) {

    let newArray = []
      
      for (let i = 0; i <arr.length; i++) {
        if (arr[i]) newArray.push(arr[i]); 
          } 
        return newArray;
        }
      
    bouncer([7, "ate", "", false, 9]);
    console.log(bouncer([7, "ate", "", false, 9]))

    //
    function bouncer(arr) {
      return arr.filter(Boolean);
    }

    //Where do I Belong

    
function getIndexToIns(arr, num) {

  const array1 = arr.length;
  let hello = 0;
    
  for (let i = 0; i < array1; i++) {
  if (num > arr[i]) {
     hello++; 
     }
   }   
   return hello;    
  }
  
  getIndexToIns([40, 60], 50);


  //

  function chunkArrayInGroups(arr, size) {
    // Break it up.
    let newArr = [];
    for (let i = 0; i < arr.length; i += size) {
      newArr.push(arr.slice(i, i + size));
    }
    return newArr;
  }

  // instanceOf

  let Bird = function(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
  }
  
  let crow = new Bird("Alexis", "black");
  
  crow instanceof Bird;

  // Functional Programming

const prepareTea = () => 'greenTea';

const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4TeamFCC = getTea(40);

//Functional Programming


const prepareGreenTea = () => 'greenTea';

const prepareBlackTea = () => 'blackTea';

const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);

//hasOwnProperty

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line

for (let property in canary) {
  if(canary.hasOwnProperty(property)) {
    ownProps.push(property)
  }
}
console.log(ownProps)

//
Obj.prototype.newProperty = "New Property!";
// Own properties are defined directly on the object instance itself. And prototype properties are defined on the prototype.

//constructor

let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird); 
console.log(beagle.constructor === Dog);

function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}

// isPrototypeOf

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");


Dog.prototype.isPrototypeOf(beagle);

// Add Methods After Inheritance

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log('Woof!');
}


let beagle = new Dog();

//Override Inherited Methods

function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;


Penguin.prototype.fly = function() {
  return 'Alas, this is a flightless bird.';
}


let penguin = new Penguin();
console.log(penguin.fly());

//closure : function that has access to a private variable
function Bird() {
  let hatchedEgg = 10;

  this.getHatchedEggCount = function() { 
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount();

// Immediately Invoked Function Expression (IIFE)
(function() {
  console.log("A cozy nest is ready");
})();

//Create a sentence of the form "One for X, one for me."
const sentence = ((name) => `one for ${name}, one for me`)

//
const time = () => {
  const date = new Date()
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  return days[date.getDay()]
  };
  console.log(time());

  const time2 = () => {
    const date1 = new Date()
    return date1.toLocaleTimeString()
    };
    console.log(time2());
  
    console.log('Today is ' + time(), time2());

    //
    function hello () {
      const date = new Date();
      return date.toLocaleDateString();
      }
      
      console.log(hello())

      ////4. Write a JavaScript program to find the area of a s where lengths of the three of its sides are 5, 6, 7.
const sides = [5, 6, 7];
const [a, b, c] = sides;

const triangle = () => {
  const calc = (a + b + c) / 2;
  const firstDiff = calc - a;
  const secondDiff = calc - b;
  const thirdDiff = calc - c;
  const area = Math.sqrt(calc * firstDiff * secondDiff * thirdDiff);
  return area;
}
console.log(triangle())

//5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front. 
const string = 'katia'

function exercise (string) {

  const split = string.split('')
  console.log(split)

  const copyWord = string.slice(0, string.length -1)
  console.log(copyWord)

  const lastLetter = string.slice(string.length -1, string.length)
  console.log(lastLetter)
  console.log(string.length -1, string.length)
  const result = lastLetter + copyWord
  console.log(result)

  return result
};

console.log(exercise(string))

// Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.  Go to the editor
const x = '2020'
const sunday = () => {
  for (let year = 2014; year <= 2050; year++);
  const day = new Date(new Date(x).getFullYear(), 0, 1);
  const final = day.getDay();
  if (final === 0) {
    return true;
  } else {
    return false;
  }
  };
  console.log(sunday())

  //8. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".  Go to the editor

const ex8 = () => {
  for (var i = 0; i < 20; i++) {
  const calc = 0;
  for (let num = 1; num <= Math.floor(Math.random() * 10); num++) {
    calc++;
  }
  return calc;
  }
}
console.log(ex8())

const integer = ((number) => number)
console.log(integer(8))

const match = () => ex8 === integer ? 'Good Work' : 'Not matched'

console.log(match())
  
// Write a JavaScript program to calculate days left until next Christmas.  Go to the editor


const day = new Date()
console.log(day)

const christmas = new Date('December 25, 2021')
console.log(christmas, 'chris')

const left = christmas - day
console.log(left, 'left')

let minutes = Math.floor(left / 60000);
let hours = Math.round(minutes / 60);
let days = Math.round(hours / 24);

console.log(days, 'days')


//10. Write a JavaScript program to calculate multiplication and division of two numbers (input from user).

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div class='myDiv'>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
<br></br>
<form>
    <label for="fnumber">First number:</label><br>
    <input type="number" class="fnumber" name="fnumber"><br>
    <label for="snumber">Second number:</label><br>
    <input type="numer" class="snumber" name="snumber">
</form>
<br></br>
  <button class='multi'> multiply </button>
  <button class='division'> divide </button>
<br></br>
  <text>The result is : </text><br>
  <div id='log'></div>
</div>
`;

const selectElement = document.querySelector('.fnumber');
const selectElement2 = document.querySelector('.snumber');
let log = document.getElementById('log');

let num1 = 0
let num2 = 0

const multiply = (a, b) => {
  console.log(num1 * num2, 'xd')
  const result = num1 * num2
  log.innerHTML = result
  return result;
}

const divide = (a, b) => {
  console.log(num1 / num2, 'jvd')
  const result2 = num1 / num2
  log.innerHTML = result2
  return result2;
}

selectElement.addEventListener('change', function () {
  log.textContent = console.log(this.value);
  num1 = this.value;
});

selectElement2.addEventListener('change', function () {
  log.textContent = console.log(this.value);
  num2 = this.value;
});

function init () {
  document.querySelector('.multi').addEventListener('click', multiply);
};
init()

function init2 () {
  document.querySelector('.division').addEventListener('click', divide);
};
init2()



//11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>

<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
<br></br>
<form>
<label for='cinput'>Celcius:</label><br>
<input type='number' id='cinput' name='cinput'><br>
<label for='finput'>Fahrenheit:</label><br>
<input type='number' id='finput' name='finput'>
</form><br>
<button class='sub'>submit</button>
<div class='result'></div>
</div>
`;


const firstElement = document.querySelector('#cinput')
const secondElement = document.querySelector('#finput')
const text = document.querySelector('.result')
let x = 0

function conversion () {
  x = parseFloat(x);
  const total = ((x*9)/5)+32 ;
  text.innerHTML = total
  return total;
  }

firstElement.addEventListener('change', function () {
  text.textContent = console.log(this.value); 
  x = this.value 
});

secondElement.addEventListener('change', function () {
  text.textContent = console.log(this.value);
});

function init () {
 document.querySelector('.sub').addEventListener('click', conversion);

};
init()

//12. Write a JavaScript program to get the website URL (loading page).

document.querySelector('.text').innerHTML =
'That is the url of the page : ' + window.location.href

//Write a JavaScript exercise to get the extension of a filename. 

function hello (){
  const firstOne = document.querySelector('#file1').value
  const extension = firstOne.split('.').pop()
  document.querySelector('.file').textContent = extension
  }
  hello()
 
  function bonjour () {
  document.querySelector('#ext').addEventListener('click', hello)
  }
  bonjour()
  
  //15. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference. 

let b = 13

const diff = (a) => {
  if (b > a) {
  return b - a 
} else {
  return (b - a) * 2
}}

 console.log(diff(14))

 //16. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.  Go to the editor

const sum = ((a, b) => (!a === b) ? a + b :(a + b) * 3)
  

//17. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19. 

let a = 19;

const diff = ((b) => ( b < a ) ? a - b : (b - a ) * 3)


//18. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.

const numbers = ((a, b) => a + b === 50 || a === 50 || b === 50 ? true : false )

//19. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400. 

const number = (a) => {
  return (100 - a <= 20) || (400 - a <= 20)  
  }

  //20. Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.

const num = (a, b) => {
  if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
    return true;
  } else {
    return false
  }
}

//21. Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.


const one = 'hello ';
const str = 'py'


const three = (one) => {
 const four = str + one;
 if ((one[0] === 'p') && (one[1] === 'y')) {
   return one;
} else {
  return four;
}}
console.log(three(one))

//
function copyArrayAndManipulate(array, instructions) {
  const output =[];
  for (let i=0; i < array.length; i++) {
    output.push(instructions(array[i]));
  }
  return output;
}
function multiplyBy2(input) { return input * 2}
const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2)


//Create a function limitedRepeat that console logs hi for now every second, but only for 5 seconds. Research how to use clearInterval if you are not sure how to do this.

function limitedRepeat() {
  function print() {
    console.log('hi again');
  }
  function clear() {
  clearInterval(id);
  }
    
  const id = setInterval(print, 1000);
  setTimeout(clear, 5000)
 
}

limitedRepeat()

//22. Write a JavaScript program to remove a character at the specified position of a given string and return the new string. 
const hello = ((str, index) => {
  const x = str.substring(0, index)

  const y = str.substring(index + 1 , str.length)
  
  return (x + y)
})

console.log(hello('katia', 2))

//23. Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1


function myFunction(str) {
  if (str.length <= 1) 
  { 
    return str
  }  
    const x = str.substring(0, 1);
    const y = str.substring(1, str.length - 1)
    const z = str.substring(str.length - 1, str.length)

  return z + y + x
  
};
console.log(myFunction('bonjourkatia'))

//24. Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back. 


function string(str) {
  
  const x = str.substring(0, 1)
  return x + str + x
  
}
console.log(string('katia'))

//25. Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.

function hello(num) {

  if (num % 3 === 0 || num % 7 === 0)
    {
      return true
    }
   else {
     return false
   }
 };
 
 console.log(hello(3))

 //26. Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more. 

 function myString(str) {
  
  if ( str.length <= 3) {
    return str
  }
  
  const x = str.substring(str.length, str.length - 3)
  
  return x + str + x
  
}

console.log(myString('katia'))


//Write a JavaScript program to check whether a string starts with 'Java' and false otherwise

function myFunction(str) {
  if (str[0] === 'j' && str[1] === 'a' && str[2] === 'v' && str[3] === 'a')
    {
      return true
    }
  else {
    return false
  }
  
}

console.log(myFunction('javakatia'))

//28. Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range. 

function myFunction(num, numm) {
  if ((num >= 50 && num <= 99) || (numm >= 50 && numm <= 99)) {
    return true
  } else {
    return false
  }
}

console.log(myFunction(20, 58))

//29. Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the said range.  

function myFunction(num, numm, nummm) {
  if ((num >= 50 && num <= 99) || (numm >= 50 && numm <= 99) || (nummm >= 50 && nummm <= 99)) {
    return true
  } else {
    return false
  }
}

console.log(myFunction(20, 58, 98))