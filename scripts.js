// console.log('hello');
// console.log('another');

const myNumber = '4'
const parsedNumber = parseInt(myNumber)

const myFloat = '4.9'
const parseMyFloat = parseFloat(myFloat)
const parseMyFloatAsInt = parseInt(myFloat)

console.log(myNumber, typeof myNumber)
console.log(parsedNumber, typeof parsedNumber)
console.log(parseMyFloat, typeof parseMyFloat, parseMyFloatAsInt)

const alphabet = [
  'a', 'b', 'c', 'd', 'e'
]

const person = {
  name: 'Jeff',
  age: 33,
  state: 'KY',
}

const car = {
  make: 'Ford',
  model: 'Bronco',
  year: 2022
}

const personAndCar = {
  ...person,
  ...car
}

const keys = Object.keys(person)

console.log({keys})

keys.forEach((key) => {
  console.log(person[key])
})

keys.map(key => {
  
})

let i = 0
while (i < 10) {
  console.log(i)
  i++
}

// alphabet.forEach((letter) => {
//   console.log(letter)

// })

// const test = alphabet.map((letter) => {
//   console.log(letter)
//   return `my letter is ${letter}`
// })

// for (let i = 0; i < alphabet.length; i++) {
//   console.log(alphabet[i])
// }

// for (let i = alphabet.length + 1; i >= 0; i--) {
//   console.log(alphabet[i])
// }


// console.log(test)
const lowNumbers = [1,2,3,4,4,3,2,5,1] 
const highNumbers = [6,7,8,9,10]

const numbers = [
  ...lowNumbers,
  ...highNumbers
]

// console.log(numbers)


const randomNumber = Math.random()

console.log(randomNumber)

if (randomNumber < (1/3)) {
  console.log('low')
} else if (randomNumber < (2/3)) {
  console.log('mid')
} else {
  console.log('high')
}

const d6 = Math.floor(Math.random() * 6) + 1
const d20 = Math.floor(Math.random() * 20) + 1

switch (d6) {
  case 1:
    console.log('rolled 1')
    break
  case 2:
    console.log('rolled 2')
    break
  case 3:
    console.log('rolled 3')
    break
  case 4:
    console.log('rolled 4')
    break
  case 5:
    console.log('rolled 5')
    break
  case 6:
    console.log('rolled 6')
    break
  default:
    console.log('how')
    break
}


function helloWorld() {
  const greeting = 'Hello'
  return (name) => {
    return `${greeting}, ${name}`
  }
}


function mystery(input) {
  let secret = 4;
  input += 2; //5

  function mystery2(multiplier) {
    multiplier *= input; //30
    return secret * multiplier; //120
  }
  return mystery2;
}

function mystery3(param) {
  function mystery4(bonus) {
    return param(6) + bonus;//hidden(6) + bonus
  }
  return mystery4;
}
let hidden = mystery(3);
let jumble = mystery3(hidden);
let result = jumble(2);
console.log('Result is: ' + result);

function warningMaker(obstacle) {
  let i = 0;
  return function() {
    i++;
    console.log('Beware! There have been ' + obstacle + ' sightings today!', i);
  };
}

let icebergAlert = warningMaker("iceberg");
let bearAlert = warningMaker("bear");
icebergAlert();
icebergAlert();
icebergAlert();
icebergAlert();
icebergAlert();
icebergAlert();
bearAlert();
bearAlert();
bearAlert();
bearAlert();