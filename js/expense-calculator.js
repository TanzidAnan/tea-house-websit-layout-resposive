const insertButton= document.getElementById('expense-insert-btn');
const expenseField =document.getElementById('expense-field');
const amountFild =document.getElementById('amount-field');
const rowContainer =document.getElementById('row-container');
const expanceSpan =document.getElementById('expense-amount')

insertButton.addEventListener('click',function(){
    const expense =expenseField.value;
    const amount =Number(amountFild.value);

    const row =`
    <div class="flex justify-between" data-amount="${amount}">
        <p>${expense}</p>
        <p>${amount}</p>
      </div>
    `
    let expentAmount =Number(expanceSpan.innerText);
    expentAmount +=amount;
    expanceSpan.innerText =expentAmount
    rowContainer.innerHTML += row

    console.log(expense,amount)
})
