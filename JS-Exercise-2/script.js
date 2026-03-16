/* 1. in input field , if its contains vowels then display it in red color , otherwise display it in green color. */

const inputStr = document.getElementById('inputStr');

inputStr.addEventListener('input', () => {

    const inputVal = document.getElementById('inputStr').value

    inputStr.style.color = /[aeiou]/i.test(inputVal) ? "red" :"green"
})



/* 2. [{ name: 'Jerry', age: 12 }, { name: 'Peter', age: 18 }, { name: 'John', age: 9 }]; 1.make a function to display object which has minimum age. 2.make a function to display object which has maximum age . */

const personData = [
    {
        name: "Jerry",
        age: 12
    },
    {
        name: "Peter",
        age: 18
    },
    {
        name: "John",
        age: 9
    }
]

const getMinAge = (data) => data.reduce((min, user) => user.age < min.age ? user : min)

const minAge = document.getElementById('minAge');
minAge.textContent = JSON.stringify(getMinAge(personData));

const getMaxAge = (data) => data.reduce((min, user) => user.age > min.age ? user : min)

const maxAge = document.getElementById('maxAge')
maxAge.textContent = JSON.stringify(getMaxAge(personData))




/* 3. "javascript learning" : for the string replace all 'a' character with 'c'. */

const strField = document.getElementById('str')

let originalStr = "javascript learning"

let newStr = originalStr.replaceAll("a", "c")

strField.textContent = JSON.stringify(newStr)




/* 4. "Hello world, welcome" : check "world" is starts at position 7 , if yes then display true else display false. */

const boolValueField = document.getElementById('position')

const greetStr = "Hello world, welcome"

boolValueField.textContent = greetStr.startsWith("world", 6) ? true : false



/* 5. fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"] : remove 2nd & 3rd element from array. */

const updatedFruits = document.getElementById('fruits')

const fruitsArr = ["Banana", "Orange", "Apple", "Mango", "Kiwi"]

fruitsArr.splice(1, 2)

updatedFruits.textContent = JSON.stringify(fruitsArr)
