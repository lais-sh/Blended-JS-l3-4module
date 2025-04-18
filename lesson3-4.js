// Lesson 2: Arrays, Objects, Functions

// ✅ Завдання 1
const styles = ['jazz', 'blues'];
styles.push('rock-n-roll');
const bluesIndex = styles.indexOf('blues');
if (bluesIndex !== -1) styles[bluesIndex] = 'classic';

function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}

// ✅ Завдання 2
function checkLogin(array) {
  const name = prompt("Enter your name");
  if (array.includes(name)) {
    alert(`Welcome, ${name}!`);
  } else {
    alert("User not found");
  }
}

// const logins = ["Peter", "John", "Igor", "Sasha"];
// checkLogin(logins);

// ✅ Завдання 3
function caclculateAverage(...args) {
  const numbers = args.filter(arg => typeof arg === 'number');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((acc, val) => acc + val, 0);
  return sum / numbers.length;
}

// ✅ Завдання 4
function sumNeighbors(arr) {
  const result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    result.push(arr[i] + arr[i + 1]);
  }
  return result;
}

// ✅ Завдання 5
function findSmallestNumber(numbers) {
  if (!Array.isArray(numbers)) return 'Sory, it is not an array!';
  return Math.min(...numbers);
}

// ✅ Завдання 6
function findLongestWord(string) {
  const words = string.split(" ");
  let longest = "";
  for (const word of words) {
    if (word.length > longest.length) longest = word;
  }
  return longest;
}

// ✅ Завдання 7
const user = {
  name: "John",
  age: 20,
  hobby: "tenis",
  premium: true,
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

for (const key of Object.keys(user)) {
  console.log(`${key}: ${user[key]}`);
}

// ✅ Завдання 8
const salaries = {
  Mango: 100,
  Poly: 160,
  Ajax: 1470,
};
let sum = 0;
for (const value of Object.values(salaries)) {
  sum += value;
}

// ✅ Завдання 9
const calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  exist() {
    return this.a !== undefined && this.b !== undefined;
  },
  sum() {
    return this.exist() ? this.a + this.b : 'No such propeties';
  },
  mult() {
    return this.exist() ? this.a * this.b : 'No such propeties';
  },
};

// ✅ Завдання 10
function calcTotalPrice(fruits, fruitName) {
  return fruits
    .filter(fruit => fruit.name === fruitName)
    .reduce((total, fruit) => total + fruit.price * fruit.quantity, 0);
}

// const fruits = [
//   { name: "Яблуко", price: 45, quantity: 7 },
//   { name: "Апельсин", price: 60, quantity: 4 },
//   { name: "Банан", price: 125, quantity: 8 },
//   { name: "Груша", price: 350, quantity: 2 },
//   { name: "Виноград", price: 440, quantity: 3 },
//   { name: "Банан", price: 125, quantity: 3 },
// ];
// console.log(calcTotalPrice(fruits, "Банан"));
