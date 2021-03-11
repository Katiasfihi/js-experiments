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
