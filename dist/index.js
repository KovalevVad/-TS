"use strict";
const credit = document.querySelector('#credit');
const rangeCredit = document.querySelector('#rangeCredit');
const month = document.querySelector('#month');
const rangeMonth = document.querySelector('#rangeMonth');
const monthlyInput = document.querySelector('#monthlyPayment');
const AllSummaInput = document.querySelector('#allSumma');
//Сумма кредита
function rangeCreditValue() {
    rangeCredit.addEventListener('mousedown', function () {
        let intevalCredit = setInterval(() => {
            credit.value = rangeCredit.value;
        }, 0);
        rangeCredit === null || rangeCredit === void 0 ? void 0 : rangeCredit.addEventListener('mouseup', function () {
            clearInterval(intevalCredit);
        });
    });
}
!rangeCredit ? 0 : rangeCreditValue();
//Срок кредита
function rangeMonthValue() {
    rangeMonth.addEventListener('mousedown', function () {
        let intevalMonth = setInterval(() => {
            month.value = rangeMonth.value;
        }, 0);
        rangeMonth === null || rangeMonth === void 0 ? void 0 : rangeMonth.addEventListener('mouseup', function () {
            clearInterval(intevalMonth);
        });
    });
}
!rangeMonth ? 0 : rangeMonthValue();
function formUpdate() {
    return setInterval(() => {
        let formValue = Array.from(new FormData(document.querySelector('form')));
        const precent = Number(+formValue[2][1] < 10
            ? '0.0' + +formValue[2][1]
            : '0.' + +formValue[2][1]);
        const monthlyPayment = Math.round((Number(formValue[0][1]) * precent / 12)
            / (1 - ((1 + precent / 12))
                ** (-formValue[1][1])));
        const AllSumma = (monthlyPayment * Number(formValue[1][1])).toFixed(2);
        monthlyInput.value = String(monthlyPayment);
        AllSummaInput.value = AllSumma;
    }, 0);
}
;
let interval = formUpdate();
