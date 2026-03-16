/* 1. take one input field. display count of character entered in input. */

const charInput = document.getElementById('charInput')
const charCount = document.getElementById('charCount')

charInput.addEventListener('input', () => {
    charCount.textContent = charInput.value.length;
})



/* 2. take 2 input fields like name and age. display it in object. ex : {name:'test1',age:18} */

const dispObjUserName = document.getElementById('name')
const dispObjUserAge = document.getElementById('age')
const submitObj = document.getElementById('submitBtn')
const showObj = document.getElementById('showObj')

submitObj.addEventListener('click', (e) => {
    e.preventDefault();

    const newObj = {}
    newObj.name = dispObjUserName.value
    newObj.age = dispObjUserAge.value

    console.log(newObj)
    showObj.textContent = JSON.stringify(newObj)

})

const validateObjForm = () => submitObj.disabled = dispObjUserName.value.trim() === "" || dispObjUserAge.value.trim() === "" ? true : false

const objInputFields = [dispObjUserName, dispObjUserAge]
objInputFields.forEach(input => {
    input.addEventListener('keyup', validateObjForm)
})



/* 3. take 2 input fields like name and age. display it in array. ex : [{name:'test1',age:18},{name:'test1',age:18}];*/

const dispArrUserName = document.getElementById('nameArr')
const dispArrUserAge = document.getElementById('ageArr')
const submitArr = document.getElementById('submitArr')
const showArr = document.getElementById('dataArr')

submitArr.addEventListener('click', (e) => {
    e.preventDefault();

    const users = []

    users.push({
        name: dispArrUserName.value,
        age: dispArrUserAge.value
    })

    console.log(users)
    showArr.textContent  = JSON.stringify(users)

});

const validateArrForm = () => submitArr.disabled = dispArrUserName.value.trim() === "" || dispArrUserAge.value.trim() === "" ? true : false

const arrInputFields = [dispArrUserName, dispArrUserAge]
arrInputFields.forEach(input => {
    input.addEventListener('keyup', validateArrForm)
})