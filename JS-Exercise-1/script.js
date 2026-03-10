/* 1. take one input field. display count of character entered in input. */

const inputField = document.getElementById('input');
const charCount = document.getElementById('chars');

inputField.addEventListener('input', () => {
    charCount.innerHTML = inputField.value.length;
})



/* 2. take 2 input fields like name and age. display it in object. ex : {name:'test1',age:18} */

const inputName = document.getElementById('name');
const inputAge = document.getElementById('age');
const submitVal = document.getElementById('submitObject')

submitVal.addEventListener('click', (e) => {

    const newObj = {
        name: inputName.value,
        age: inputAge.value
    }
    
    console.log(newObj);
    
    e.preventDefault();
})



/* 3. take 2 input fields like name and age. display it in array. ex : [{name:'test1',age:18},{name:'test1',age:18}];*/

submitVal.addEventListener('click', (e) => {
    const values = [{
        name: inputName.value,
        age: inputAge.value,
        name1: inputName.value,
        age1: inputAge.value
    }]

    console.log(values);

    e.preventDefault();
})



