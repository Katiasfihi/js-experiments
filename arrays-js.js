 const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    const people = [
      'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
      'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
      'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
      'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
      'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
    ];
    
    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    const fifteen = inventors.filter(function(inventor) {
      if (inventor.year >= 1500 && inventor.year <= 1599){
        return true;
      }
    });
    const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year <= 1599))

    // Array.prototype.map()
    // 2. Give us an array of the inventors first and last names
    /*const name = inventors.map(function(inventor){
      return `${inventor.first} ${inventor.last}`
    })
    console.log(name)*/

    const fullName = inventors.map(inventor => (`${inventor.first} ${inventor.last}`))
    console.log(fullName)

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
    const birthDate = inventors.sort(function(a,b){
      if(a.year > b.year){
        return 1;
      } else {
        return -1;
      }
    });
    console.log(birthDate)

    const birthDate = inventors.sort((a, b) => a.year > b.year ? 1 : -1)

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live all together?
    
    const count = inventors.reduce((total, inventor) => {
     return total + (inventor.passed - inventor.year)
    }, 0);

    console.log(count)

    // 5. Sort the inventors by years lived
    
const oldest = inventors.sort(function(a, b){
  if (a.year - a.passed > b.year - b.passed) {
    return 1;
  } else {
    return -1;
  }
});

console.table(oldest)

const oldest = inventors.sort((a,b) => a.year - a.passed > b.year - b.passed ? 1 : -1)

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


    // 7. sort Exercise
    // Sort the people alphabetically by last name
    const string = people.map(function(item){
      (item.split(' '))
      })
      
      const lastName = people.sort((a, b) => (a < b)? -1 : 1);
     
      
      /*const lastName = people.sort(function(a, b){
        if(a < b){
          return -1;
        } else if (a > b){
          return 1;
        }
      });
       console.log(lastName)*/

      
      

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

    const instance = data.reduce(function(accumulator, currentValue){
      if (!accumulator[currentValue]){ //if there is no accumulator[currentValue] then = 0;
        accumulator[currentValue] = 0; 
      }
      accumulator[currentValue]++; 
      return accumulator;
    }, {});
    
    console.log(instance) 


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
