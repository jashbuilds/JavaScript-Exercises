/* 1.take 4 input field : student name , maths marks , science marks, english marks. make a object of it.
    find the total of all subject.
    - if total is greater then or equal to 200 , then print 'you are passed with grade A'
    - if total is greater then or equal to 100 , then print 'you are passed with grade B'
    - if total is less then 100 , then print 'you are passed with grade C'
    - otherwise print 'You are failed'

using switch case. */

const stdName = document.getElementById("studentName");
const mathMarks = document.getElementById("mathMarks");
const sciMarks = document.getElementById("scienceMarks");
const engMarks = document.getElementById("engMarks");
const submitData = document.getElementById("submitData");

const stdData = {};

const addData = (name, mathMark, sciMark, engMark) => {
    const obj = {
        name: name,
        mathsMarks: Number(mathMark),
        scienceMarks: Number(sciMark),
        englishMarks: Number(engMark),
    };
    Object.assign(stdData, obj);
};

submitData.addEventListener("click", (e) => {
    e.preventDefault();

    addData(stdName.value, mathMarks.value, sciMarks.value, engMarks.value);

    delete stdData.name;

    let sum = 0;
    for (let i in stdData) {
        sum += stdData[i];
    }

    console.log(`Total of all subject marks: ${sum}`);

    switch (true) {
        case sum >= 200:
            console.log("you are passed with grade A");
            break;
        case sum >= 100:
            console.log("you are passed with grade B");
            break;
        case sum < 100 && sum >= 55:
            console.log("you are passed with grade C");
            break;
        default:
            console.log("You are failed");
    }
});

stdName &&
    mathMarks &&
    sciMarks &&
    engMarks.addEventListener("keyup", () => {
        if (stdName && mathMarks && sciMarks && engMarks.value.trim() === "") {
            submitData.disabled = true;
        } else {
            submitData.disabled = false;
        }
    });

/* 2. Generate an array of random digits like [1,2,3,6,5,3,46,63];

 a. Take one button and click on it do like,
      if array contains digit '5' : then print element of array till digit '5' , don't print elements which are after '5'. Output will be like [1,2,3,6]

 b. Take one button and click on it do like,
    if array contains digit '5' then don't print digit '5' , print all other elements. Output will be [1,2,3,6,3,46,63] */

const generateBtn = document.getElementById("generateBtn");
const trimArrBtn = document.getElementById("trimArrBtn");
const skipArrBtn = document.getElementById("skipArrBtn");
const arrayLengthInput = document.getElementById("arrayLength");
let arr = [];

generateBtn.addEventListener("click", (e) => {
    e.preventDefault();

    arr = []

    const arrayLength = document.getElementById("arrayLength").value;
    for (var i = 0; i < arrayLength; i++) {
        arr.push(Math.round(Math.random() * 30));
    }

    console.table(arr)

    trimArrBtn.disabled = false
    skipArrBtn.disabled = false
});

trimArrBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let result = [];
    for (let num of arr) {
        if (num === 5) {
            break;
        }
        result.push(num);
    }
    console.table(result);
});

skipArrBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const finalArr = arr.filter((n) => n !== 5);
    console.table(finalArr);
});

arrayLengthInput.addEventListener('input', (e) => {
    e.preventDefault()

    if(arrayLengthInput.value.trim() === ""){
        generateBtn.disabled = true
    } else {
        generateBtn.disabled = false
    }
})
