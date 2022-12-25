# Test task Wargaming Forge 2020

**Input data:**
In string there are 2 numbers *n* and *k* with space between.<br>
**Output data:** 
Receive a number, how many times k occurs in the multiplication table *n X n*.<br>
**Example:**
enter '6 12', result: 4.

## Solution
• Create an array from the input string<br>
• Get *n* and *k* from the array<br>
• Create an Array that contains the numbers of the multiplication table n X n<br>
• Count *k* in the Array<br>

Using devtools we received the solution:

```
let n, k;
let arrFull = [];
let countNumber = 0;

const createTable = (str) => {
    let arr = str.split(' ');
    n = Number(arr[0]);
    k = Number(arr[1]);

    for (let row = 1; row < n + 1 ; row++) {
        for (let col = 1; col < n + 1; col++) {
        arrFull.push(row*col);
    }
};

console.log(arrFull);

//find k in the Array
for (let i = 0; i < arrFull.length; i++) {
    if (arrFull[i] === k) {
        countNumber++;
    }
}
console.log(countNumber);
};

createTable('6 12'); // -> 4

```

## How to improve the solution

[![Preview](https://github.com/PesukarhuTG/WarForge-task01/blob/master/screen-multiply.jpg)](https://pesukarhutg.github.io/WarForge-task01/)

• For a visual presentation we get the data *n* and *k* from *input*<br>
• After entering the numbers, a user press the button *'Create table'* and the multiplication table n X n is displayed on the screen<br>
• Under the multiplication table the user will see the number, how many times *k* occurs in the table<br>

**Optionally:**<br>
• After entering the data the button *'Create table'* is blocked and becomes active only if input will be change<br>
• For visual design of the table was created a *'customerResult' variable*: it stores data that are displayed on the screen. If *number<10*, we will add spaces<br>

```
if (row*col < 10) {
  customerResult += (' ' + row*col + ' ') + ' ';
  } else {
      customerResult += (row*col) + ' ';
      }
      
```

• If user entered *n = 0* or *n =! integer*, we get the message "Please, enter the correct data"

<h2 align="center"><a href="https://pesukarhutg.github.io/WarForge-task01/" target="_blank">Deploy link</a></h2>
