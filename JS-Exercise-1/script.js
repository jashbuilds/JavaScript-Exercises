/* 1. take one input field. display count of character entered in input. */

const charInput = document.getElementById('charInput');
const charCount = document.getElementById('charCount');

charInput.addEventListener('input', () => {
    charCount.innerHTML = charInput.value.length;
})



/* 2. take 2 input fields like name and age. display it in object. ex : {name:'test1',age:18} */

const inputName = document.getElementById('name');
const inputAge = document.getElementById('age');
const submitBtn = document.getElementById('submitBtn')
const showObj = document.getElementById('showObj')

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const newObj = {}
    newObj.name = inputName.value;
    newObj.age = inputAge.value;

    showObj.innerHTML = JSON.stringify(newObj)

})



/* 3. take 2 input fields like name and age. display it in array. ex : [{name:'test1',age:18},{name:'test1',age:18}];*/

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const newArr = [{
        name: inputName.value,
        age: inputAge.value
    }]

    document.getElementById('dataArr').innerText = JSON.stringify(newArr)

});