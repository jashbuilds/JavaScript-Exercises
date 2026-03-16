/* 1. take 3 input fields 'id' , 'name' & salary .

  store this in object as {id:'1' , 'name':'test1' , salary:20000};
  push 3 or more than 3 objects in array.

    a. display array.
    b. display array which contains only name.
    c. display total of salary.
    d. display array which contains object whose name is 'test1'. */

const employeesArr = [];

function addEmployee(id, name, salary) {
  const obj = {
    id: id,
    name: name,
    salary: Number(salary),
  };

  employeesArr.push(obj);
}

const empId = document.getElementById("inputId");
const empName = document.getElementById("inputName");
const empSalary = document.getElementById("inputSalary");
const submitBtn = document.getElementById("btnSubmit");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  addEmployee(empId.value, empName.value, empSalary.value);

  console.log("All Objects:");
  console.table(employeesArr);

  const nameArr = employeesArr.map((emp) => emp.name);
  console.log("Array containing Name only:");
  console.table(nameArr);

  const totalSalary = employeesArr.reduce((sum, emp) => sum + emp.salary, 0);
  console.log("Total Salary:");
  console.table(totalSalary);

  const test1 = employeesArr.filter((emp) => emp.name === "test1");
  console.log("Objects containing name (test1):");
  console.table(test1);

  document.getElementById("message").textContent = "(Check console for Output)";
});

const validateEmployeeForm = () =>
  (submitBtn.disabled =
    empId.value.trim() === "" ||
    empName.value.trim() === "" ||
    empSalary.value.trim() === ""
      ? true
      : false);

const employeeInputFields = [empId, empName, empSalary];
employeeInputFields.forEach((input) => {
  input.addEventListener("keyup", validateEmployeeForm);
});

/* 2. str = 'https://test/google.com'; find the last index of '/'  */

const str = "https://test/google.com";

const lastIndex = str.lastIndexOf("/");

document.getElementById("indexVal").textContent = lastIndex;

/* 3. let chars = ['A', 'B', 'A', 'C', 'B']; remove duplicate value from array. */

let chars = ["A", "B", "A", "C", "B"];

let newSet = new Set(chars);
let newArr = [...newSet];

document.getElementById("updArr").textContent = JSON.stringify(newArr);

/* 4. const fruits = ["Banana", "Orange", "Apple", "Mango"]; remove first element from array. */

let fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.shift();

document.getElementById("fruitsArr").textContent = JSON.stringify(fruits);

/* 5. return array which contains binary value of all elements for the given array. arr = [1,2,4,5,6] */

let arr = [1, 2, 4, 5, 6];

let binaryArr = arr.map((a) => a.toString(2));

document.getElementById("binaryVal").textContent = JSON.stringify(binaryArr);

/* 6. let text = "Mr. Blue has a blue house" - display all this word in array. o/p : ['Mr.' , 'Blue' , 'has' , 'a' , 'blue' , 'house']  */

let text = "Mr. Blue has a blue house";

let newText = text.split(" ");

document.getElementById("splitVal").textContent = JSON.stringify(newText);

/* 7. take a one input field , if in input field entered last character is 'a,e,i,o,u' then background color of input will be red , else green. */

const vowels = "aeiou";

let charInput = document.getElementById("char");

charInput.addEventListener("input", (e) => {
  e.preventDefault();

  let inpValue = charInput.value.toLowerCase();
  let lastVal = inpValue[inpValue.length - 1];

  charInput.style.backgroundColor = vowels.includes(lastVal) ? "red" : "green";
});

/* 8.take a string as input field:
            - must be 8 character long.
            - must contain one uppercase and one lowercase letter.
            - must contain one symbol. if following condition is not matched then display message like , "string is not valid". */

const re = /^(?=.*?[A-Z])(?=.*?[a-z])(?!.*[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
const validateBtn = document.getElementById("validateBtn");
const strVal = document.getElementById("checkStr");
const validateMsgField = document.getElementById("validateMsg");

validateBtn.addEventListener("click", (e) => {
  e.preventDefault();

  validateMsgField.textContent = re.test(strVal.value)
    ? "String is Valid"
    : "String is not Valid";
});

strVal.addEventListener("input", () => validateBtn.disabled = strVal.value.length < 8 ? true : false)
