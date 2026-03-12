/* 1. take one input field. display count of character entered in input. */

const charInput = document.getElementById('charInput');
const charCount = document.getElementById('charCount');

charInput.addEventListener('input', () => {
    charCount.innerHTML = charInput.value.length;
})



/* 2. take 2 input fields like name and age. display it in object. ex : {name:'test1',age:18} */

const inputName1 = document.getElementById('name');
const inputAge1 = document.getElementById('age');
const submitBtn1 = document.getElementById('submitBtn')
const showObj = document.getElementById('showObj')

submitBtn1.addEventListener('click', (e) => {
    e.preventDefault();

    const newObj = {}
    newObj.name = inputName1.value;
    newObj.age = inputAge1.value;

    console.log(newObj)
    showObj.innerHTML = JSON.stringify(newObj)

})

inputName1 && inputAge1.addEventListener('keyup', () => {
    if (inputName1 && inputAge1.value.trim() === "") {
        submitBtn1.disabled = true;
    } else {
        submitBtn1.disabled = false;
    }
})



/* 3. take 2 input fields like name and age. display it in array. ex : [{name:'test1',age:18},{name:'test1',age:18}];*/

const inputName2 = document.getElementById('nameArr');
const inputAge2 = document.getElementById('ageArr');
const submitBtn2 = document.getElementById('submitArr')

submitBtn2.addEventListener('click', (e) => {
    e.preventDefault();

    const newArr = [{
        name: inputName2.value,
        age: inputAge2.value
    }]

    console.log(newArr)
    document.getElementById('dataArr').innerText = JSON.stringify(newArr)

});

inputName2 && inputAge2.addEventListener('keyup', () => {
    if (inputName2 && inputAge2.value.trim() === "") {
        submitBtn2.disabled = true;
    } else {
        submitBtn2.disabled = false;
    }
})