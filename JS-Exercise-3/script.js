/* 1. Display array of object which date is of today's date.

[{id : 11 , description: 'order #11 placed' , date : '2022-04-21'}, {id : 12 , description: 'order #12 placed' , date : '2022-04-20'} , {id : 13 , description: 'order #13 placed' , date : '2022-04-21'}]; */

const orders = [];

function addData(id, desc, date) {
  const orderObj = {
    id: id,
    description: desc,
    date: date,
  };
  orders.push(orderObj);
}

const submitDataBtn = document.getElementById("dataSubmit");
const orderId = document.getElementById("orderId");
const orderDesc = document.getElementById("orderDesc");
const orderDate = document.getElementById("orderDate");
const matchBtn = document.getElementById("matchBtn");
const grpByBtn = document.getElementById("grpByBtn");

submitDataBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const date = new Date(orderDate.value).toISOString().split("T")[0];

  addData(orderId.value, orderDesc.value, date);

  console.table(orders);

  matchBtn.disabled = false;
  grpByBtn.disabled = false;
});

matchBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const today = new Date().toISOString().split("T")[0];
  const result = orders.filter((order) => order.date === today);
  document.getElementById("dateObj").textContent = JSON.stringify(result);
});

grpByBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const ordersByAge = Object.groupBy(orders, (order) => order.date);
  document.getElementById("grpByObj").textContent = JSON.stringify(ordersByAge)
  console.log(ordersByAge);
});

const validateOrderForm = () =>
  (submitDataBtn.disabled =
    orderId.value.trim() === "" ||
    orderDesc.value.trim() === "" ||
    orderDate.value.trim() === ""
      ? true
      : false);

const orderInputFields = [orderId, orderDesc, orderDate];
orderInputFields.forEach((input) => {
  input.addEventListener("input", validateOrderForm);
});


/* 2. Find out next digit of entered digit.
ex : 201 => Output : 202
ex : -3 => Output : -2 */

const nextBtn = document.getElementById("nextBtn");
const digit = document.getElementById("inputDigit");

nextBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const number = Number(digit.value);

  const nextNumber = number + 1;

  document.getElementById("nextVal").textContent = nextNumber;
});

digit.addEventListener(
  "input",
  () => (nextBtn.disabled = digit.value.trim() === "" ? true : false),
);

/* 3. for the given string replace all 'a' character with 'z' , only if 'a' is at first position in word.
ex: 'I am master at string' output : 'I zm master zt string' */

let string = "I am master at string";

const newStr = string.replace(/\ba/g, "z");

document.getElementById("updStr").textContent = JSON.stringify(newStr);

/* 4. take a one input field , reverse entered input. */

const strRevInput = document.getElementById("strRev");
const reverseBtn = document.getElementById("revBtn");

reverseBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const reversed = strRevInput.value.split("").reverse().join("");

  document.getElementById("revStr").textContent = reversed;
});

strRevInput.addEventListener(
  "keyup",
  () => (reverseBtn.disabled = strRevInput.value.trim() === "" ? true : false),
);

/* 5. take a one input field , find out total count of vowels inside input string. */

const vowelInput = document.getElementById("vowelCheck");
const countBtn = document.getElementById("countBtn");

countBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const text = vowelInput.value.toLowerCase();

  let count = 0;

  for (let char of text) {
    if ("aeiou".includes(char)) count++;
  }

  document.getElementById("vowelCount").textContent = count;
});

vowelInput.addEventListener(
  "keyup",
  () => (countBtn.disabled = vowelInput.value.trim() === "" ? true : false),
);
