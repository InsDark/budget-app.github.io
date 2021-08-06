const GET_BUDGET_FORM = document.querySelector('#getBudget');
const GET_EXPENSE_FORM = document.querySelector('#getExpense')

GET_BUDGET_FORM.addEventListener('submit', (e) => {
    e.preventDefault()
    let getBudget = document.querySelector('.budget').value
    let currentBudget = document.querySelector('.currentBudget')
    currentBudget.innerHTML = `$ ${getBudget}`
})

GET_EXPENSE_FORM.addEventListener('submit', e => {
    e.preventDefault()
    let getExpense = document.querySelector('.expense').value
    let getExpenseAmount = document.querySelector('.expenseAmount').value
})

