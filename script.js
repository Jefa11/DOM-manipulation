// --------------------
// Part 1: Variables + Conditionals
// --------------------
let userName = "Alex";
let isLoggedIn = true;

if (isLoggedIn) {
  console.log("User is logged in: " + userName);
} else {
  console.log("User is not logged in.");
}

// --------------------
// Part 2: Functions
// --------------------
function greetUser(name) {
  return "Hello, " + name + "! Welcome back.";
}

function calculateSum(numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
}

// --------------------
// Part 3: Loops
// --------------------
// Example 1: For loop
for (let i = 1; i <= 3; i++) {
  console.log("For loop count: " + i);
}

// Example 2: While loop
let count = 0;
while (count < 3) {
  console.log("While loop count: " + count);
  count++;
}

// --------------------
// Part 4: DOM Interactions
// --------------------
const messageDiv = document.getElementById("message");
const greetBtn = document.getElementById("greetBtn");
const listBtn = document.getElementById("listBtn");
const changeBtn = document.getElementById("changeBtn");
const numberList = document.getElementById("numberList");

// DOM interaction 1: Update text when greeting button is clicked
greetBtn.addEventListener("click", () => {
  messageDiv.textContent = greetUser(userName);
});

// DOM interaction 2: Populate list with numbers
listBtn.addEventListener("click", () => {
  numberList.innerHTML = ""; // Clear existing list
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = "Number " + i;
    numberList.appendChild(li);
  }
});

// DOM interaction 3: Change message text
changeBtn.addEventListener("click", () => {
  messageDiv.textContent = "The message has been changed!";
});
