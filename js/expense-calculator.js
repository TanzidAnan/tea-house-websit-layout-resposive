const insertButton= document.getElementById('expense-insert-btn');
const expenseField =document.getElementById('expense-field');
const amountFild =document.getElementById('amount-field');


insertButton.addEventListener('click',function(){
    const expense =expenseField.value;
    const amount =Number(amountFild.value);

    const row =`
    <div class="flex justify-between" data-amount="${amount}">
        <p>${expense}</p>
        <p>${amount}</p>
      </div>
    `

    console.log(expense,amount)
})
