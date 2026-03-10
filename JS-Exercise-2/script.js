/* 1. in input field , if its contains vowels then display it in red color , otherwise display it in green color. */

const input = document.getElementById('input');

input.addEventListener('input', () => {
    
    const vowels = /[aeiou]/gi;
    const inputVal = document.getElementById('input').value;
    
    if (vowels.test(inputVal)) {
        input.style.color = 'red';
    } else {
        input.style.color = 'green';
    }
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

let min = personData.reduce((min, user) => 
    user.age < min.age ? user : min
);

const minAge = document.getElementById('minAge');

minAge.innerHTML = JSON.stringify(min);


let max = personData.reduce((max, user) =>
    user.age > max.age ? user : max
);

const maxAge = document.getElementById('maxAge');

maxAge.innerHTML = JSON.stringify(max);



/* 3. "javascript learning" : for the string replace all 'a' character with 'c'. */

const strField = document.getElementById('str')

let str = "javascript learning";

let newStr = str.replace(/a/g, "c")

strField.innerHTML = ' "' + newStr + '" '



/* 4. "Hello world, welcome" : check "world" is starts at position 7 , if yes then display true else display false. */

const position = document.getElementById('position')

let greet = "Hello world, welcome";

let index = greet.indexOf("world");

if(index === 7) {
    position.innerHTML = true
    
} else {
    position.innerText = false
}



/* 5. fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"] : remove 2nd & 3rd element from array. */

const spliceFruit = document.getElementById('fruits')

let fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"]

fruits.splice(1, 2)

spliceFruit.innerHTML = `[ "${fruits[0]}", "${fruits[1]}", "${fruits[2]}" ]`
