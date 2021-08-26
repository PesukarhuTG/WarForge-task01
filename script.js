const tableSize = document.querySelector('#table-size');
const searchNumber = document.querySelector('#search-number');
const button = document.querySelector('.btn');
const table = document.querySelector('.table');
const countResult = document.querySelector('.count-result');


let arrFull = [];
let n = 0, k = 0;
let countNumber = 0;

//if input changed, button is active
const activeBtn = (inputName) => {
    inputName.addEventListener('input', () => {
        button.removeAttribute('disabled');
    });
};
activeBtn(tableSize);
activeBtn(searchNumber);

//create multiply table and find a number
button.addEventListener('click', (e) => {
    e.preventDefault();

    n = Number(tableSize.value);
    k = Number(searchNumber.value);

    
    if (n == 0 || !Number.isInteger(n) || !Number.isInteger(k)) {
        table.textContent = '';
        countResult.textContent = `Please, enter the correct data`;
    } else {
        let customerResult = '\n';

        for (let row = 1; row < n + 1 ; row++) {
            for (let col = 1; col < n + 1; col++) {
                arrFull.push(row*col);

                //beauty visual version for customer
                if (row*col < 10) {
                    customerResult += (' ' + row*col + ' ') + ' ';
                } else {
                    customerResult += (row*col) + ' ';
                }
            }
            customerResult += '\n';
        }

        //create HTML
        table.textContent = '';
        const divTable = document.createElement('div');
        divTable.innerHTML = customerResult;
        table.append(divTable);

        //find our number in the array
        for (let i = 0; i < arrFull.length; i++) {
            if (arrFull[i] == k) {
                countNumber++;
            }
        }

        countResult.textContent = `Our number appears in the multiplication table ${countNumber} time(s)`;
        
        button.setAttribute('disabled', true);
    }

    arrFull = [];
    countNumber = 0;
});





