class Expense {
    constructor (title, value) {
        this.title = title;
        this.value = value;
    }
}

class UI {
    addExpense (expense) {
        const expensesList = document.querySelector('.expenseDetails')
        const newExpense = document.createElement('div')
        newExpense.classList.add('newExpense')
        newExpense.innerHTML = `<h5>${expense.title}</h5>
                                <p>$ ${expense.value}</p>
                                <div>
                                    <i class='fa fa-edit'></i>
                                    <i class='fas fa-trash'></i>
                                </div>`
        expensesList.appendChild(newExpense)
        this.sumExepenses(expense.value)
    }
    deleteExpense(element){
        // element
        if(element.classList.contains('fa-trash')){
            element.parentElement.parentElement.remove()
        }
    }
    showMessage(message, cssColor) {
        const div = document.createElement('div')
        div.style.background = cssColor
        div.style.color = 'white'
        div.innerHTML = `${message}`
        div.style.width = '100%'
        div.style.padding = '1rem'
        div.style.textAlign = 'center'
        div.style.position = 'fixed'
        const app = document.querySelector('.app')
        document.body.insertBefore(div, app)
        setTimeout(() =>{
            div.remove()
        }, 2000)
    }
    resetForm(value) {
        if(value === true){
            document.querySelector('#getExpense').reset()
        } else{
            document.querySelector('#getBudget').reset()
        }
    }
    updatedBudget() {

    }
    sumExepenses(value) {
        expense + parseInt(value)
    }
    resExpenses(value){
        expense - parseInt(value)
    }
}

let expense = 0;
document.querySelector('#getBudget')
    .addEventListener('submit', e => {
        e.preventDefault()
        const budget = document.querySelector('.budget').value
        const ui = new UI()
        ui.showMessage('The budget has been updated successfully', 'green')
        ui.resetForm()
})

document.querySelector('#getExpense')
    .addEventListener('submit', e => {
        e.preventDefault()
        const expenseTitle = document.querySelector('.expenseTitle').value
        const expenseValue = document.querySelector('.expenseAmount').value
        console.log(isNaN(expenseTitle.trim()))

        const ui = new UI()

        if(expenseTitle.trim() === '' || expenseTitle.trim() === null) {
            return ui.showMessage('Please write a correct expense title', 'red')
        } else if( isNaN(expenseTitle.trim()) === false ){
            return ui.showMessage('Please dont start with a number the expense title', 'red')
        }

        const expense = new Expense (expenseTitle, expenseValue)

        ui.addExpense(expense)
        ui.showMessage('The expense has been added successfully', 'green')
        ui.resetForm(true)
    })

document.querySelector('.expenseDetails')
    .addEventListener('click', (e) => {
        e.stopPropagation
        const ui = new UI()
        ui.deleteExpense(e.target)
        ui.showMessage('The expense item has been deleted successfully', 'red')
    })

