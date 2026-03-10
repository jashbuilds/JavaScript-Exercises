/* 1. Display array of object which date is of today's date.

[{id : 11 , description: 'order #11 placed' , date : '2022-04-21'}, {id : 12 , description: 'order #12 placed' , date : '2022-04-20'} , {id : 13 , description: 'order #13 placed' , date : '2022-04-21'}]; */

const dateObj = document.getElementById('dateObj')

const orderObj = [{ id: 11, description: 'order #11 placed', date: '2022-04-21' }, { id: 12, description: 'order #12 placed', date: '2026-03-10' }, { id: 13, description: 'order #13 placed', date: '2022-04-21' }]

const d = new Date();

const dateToday = d.toLocaleDateString('sv-SE');

const findDateObj = orderObj.reduce((acc, curr) => 
    acc.date == curr.date ? orderObj : curr
)

console.log(findDateObj);



/* 2. Find out next digit of entered digit.
ex : 201 => Output : 202
ex : -3 => Output : -2 */

const nextBtn = document.getElementById('nextBtn')

nextBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let digit = document.getElementById('currDigit');
    let digit1 = digit.value
    
    document.getElementById('nextVal').innerText = digit.value;
})