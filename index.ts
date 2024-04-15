const credit = document.querySelector('#credit') as HTMLInputElement
const rangeCredit = document.querySelector('#range-credit') as HTMLInputElement;
const month = document.querySelector('#month') as HTMLInputElement
const rangeMonth = document.querySelector('#range-month') as HTMLInputElement;
const monthlyInput = document.querySelector('#monthlyPayment') as HTMLInputElement;
const AllSummaInput = document.querySelector('#AllSumma') as HTMLInputElement;

//Сумма кредита
rangeCredit?.addEventListener('mousedown', function(): void {
  let intevalCredit = setInterval(() => {
    credit.value = rangeCredit.value
  }, 100)

  rangeCredit?.addEventListener('mouseup', function(): void {
    clearInterval(intevalCredit)
  })
})

//Срок кредита
rangeMonth?.addEventListener('mousedown', function(): void {
  let intevalMonth = setInterval(() => {
    month.value = rangeMonth.value
  }, 100)

  rangeMonth?.addEventListener('mouseup', function(): void {
    clearInterval(intevalMonth)
  })
})

function formUpdate() {
  return setInterval(() => {
    let formValue = Array.from(new FormData(document.querySelector('form') as HTMLFormElement))

    const precent: number = Number(+formValue[2][1] < 10 ? '0.0' + +formValue[2][1] : '0.' + +formValue[2][1])
    const monthlyPayment: number = Math.round((Number(formValue[0][1]) * precent / 12) / (1 - ((1 + precent / 12)) ** (-formValue[1][1])))
    const AllSumma: string = (monthlyPayment * Number(formValue[1][1])).toFixed(2)

    monthlyInput.value = String(monthlyPayment);
    AllSummaInput.value = AllSumma;
  }, 100)
}

let interval = formUpdate()