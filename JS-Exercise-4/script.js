/* 1. take 3 input fields 'id' , 'name' & salary .

  store this in object as {id:'1' , 'name':'test1' , salary:20000};
  push 3 or more than 3 objects in array.

    a. display array.
    b. display array which contains only name.
    c. display total of salary.
    d. display array which contains object whose name is 'test1'. */

const employees = [];

function addEmployee(id, name, salary) {
    const obj = {
        id: id,
        name: name,
        salary: Number(salary)
    }

    employees.push(obj)
}

const empId = document.getElementById('inputId');
const empName = document.getElementById('inputName');
const empSalary = document.getElementById('inputSalary');
const submitBtn = document.getElementById('btnSubmit');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    addEmployee(empId.value, empName.value, empSalary.value);

    console.log("All Object:", employees);

    const nameArr = employees.map(emp => emp.name)
    console.log("Array containing Name only:", nameArr);

    const totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
    console.log("Total Salary:", totalSalary);

    const test1 = employees.filter((emp) => emp.name === 'test1')
    console.log("Objects containing name (test1):", test1);

})

empId && empName && empSalary.addEventListener('keyup', () => {
    if (empId && empName && empSalary.value.trim() === "") {
        submitBtn.disabled = true;
    } else {
        submitBtn.disabled = false;
    }
})



/* 2. str = 'https://test/google.com'; find the last index of '/'  */

const str = "https://test/google.com";

const lastIndex = str.lastIndexOf('/');

document.getElementById('indexVal').innerText = lastIndex



/* 3. let chars = ['A', 'B', 'A', 'C', 'B']; remove duplicate value from array. */

let chars = ['A', 'B', 'A', 'C', 'B'];

let newSet = new Set(chars)
let newArr = [...newSet];

document.getElementById('updArr').innerText = JSON.stringify(newArr)



/* 4. const fruits = ["Banana", "Orange", "Apple", "Mango"]; remove first element from array. */

let fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.shift()

document.getElementById('fruitsArr').innerText = JSON.stringify(fruits)



/* 5. return array which contains binary value of all elements for the given array. arr = [1,2,4,5,6] */

let arr = [1, 2, 4, 5, 6]

let binArr = arr.map((a) => a.toString(2))

document.getElementById('binaryVal').innerText = JSON.stringify(binArr)



/* 6. let text = "Mr. Blue has a blue house" - display all this word in array. o/p : ['Mr.' , 'Blue' , 'has' , 'a' , 'blue' , 'house']  */

let text = "Mr. Blue has a blue house";

let newText = text.split(' ')

document.getElementById("splitVal").innerText = JSON.stringify(newText);



/* 7. take a one input field , if in input field entered last character is 'a,e,i,o,u' then background color of input will be red , else green. */

const vowels = "aeiou"

let char = document.getElementById('char')

char.addEventListener('input', (e) => {
    e.preventDefault()

    let inpValue = char.value.toLowerCase()
    let lastVal = inpValue[inpValue.length - 1]
    if (vowels.includes(lastVal)) {
        char.style.backgroundColor = 'red'
    } else {
        char.style.backgroundColor = 'green'
    }
})



/* 8.take a string as input field:
            - must be 8 character long.
            - must contain one uppercase and one lowercase letter.
            - must contain one symbol. if following condition is not matched then display message like , "string is not valid". */

const re = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/
const validateBtn = document.getElementById('validateBtn') 

validateBtn.addEventListener('click', (e) => {
    e.preventDefault()
    
    const strVal = document.getElementById('checkStr').value
    if (re.test(strVal)) {
        document.getElementById('validateMsg').innerText = "String is Valid"
    } else {
        document.getElementById('validateMsg').innerText = "String is not Valid"
    }
})


document.getElementById('checkStr').addEventListener('input', () => {
    
    if(document.getElementById('checkStr').value.length < 8){
        validateBtn.disabled = true
    } else {
        validateBtn.disabled = false
    }
})
