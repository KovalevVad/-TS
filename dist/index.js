"use strict";
const credit = document.querySelector('#credit');
const rangeCredit = document.querySelector('#range-credit');
const month = document.querySelector('#month');
const rangeMonth = document.querySelector('#range-month');
const monthlyInput = document.querySelector('#monthlyPayment');
const AllSummaInput = document.querySelector('#AllSumma');
//Сумма кредита
rangeCredit === null || rangeCredit === void 0 ? void 0 : rangeCredit.addEventListener('mousedown', function () {
    let intevalCredit = setInterval(() => {
        credit.value = rangeCredit.value;
    }, 100);
    rangeCredit === null || rangeCredit === void 0 ? void 0 : rangeCredit.addEventListener('mouseup', function () {
        clearInterval(intevalCredit);
    });
});
//Срок кредита
rangeMonth === null || rangeMonth === void 0 ? void 0 : rangeMonth.addEventListener('mousedown', function () {
    let intevalMonth = setInterval(() => {
        month.value = rangeMonth.value;
    }, 100);
    rangeMonth === null || rangeMonth === void 0 ? void 0 : rangeMonth.addEventListener('mouseup', function () {
        clearInterval(intevalMonth);
    });
});
function formUpdate() {
    return setInterval(() => {
        let formValue = Array.from(new FormData(document.querySelector('form')));
        const precent = Number(+formValue[2][1] < 10 ? '0.0' + +formValue[2][1] : '0.' + +formValue[2][1]);
        const monthlyPayment = Math.round((Number(formValue[0][1]) * precent / 12) / (1 - ((1 + precent / 12)) ** (-formValue[1][1])));
        const AllSumma = (monthlyPayment * Number(formValue[1][1])).toFixed(2);
        monthlyInput.value = String(monthlyPayment);
        AllSummaInput.value = AllSumma;
    }, 100);
}
let interval = formUpdate();
