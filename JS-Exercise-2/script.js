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

const data = [
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

let min = Math.min.apply(null, 
    data.map( function(a) {
        return a.age;
    })
)

let max = Math.max.apply(null, 
    data.map( function(a) {
        return a.age;
    })
)

console.log(`Minimum age is ${min}`);

console.log(`Maximum age is ${max}`);



/* 3. "javascript learning" : for the string replace all 'a' character with 'c'. */

let str = "javascript learning";

let newStr = str.replace(/a/g, "c")

console.log(`New String: "${newStr}" `);



/* 4. "Hello world, welcome" : check "world" is starts at position 7 , if yes then display true else display false. */

let str1 = "Hello world, welcome";

let index = str1.indexOf("world");

if(index === 7) {
    console.log(true);
    
} else {
    console.log(false);
}



/* 5. fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"] : remove 2nd & 3rd element from array. */

let fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"]

fruits.splice(1, 2)

console.log(fruits);
