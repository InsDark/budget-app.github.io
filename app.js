let getBudget = document.querySelector('#getBudget')

    getBudget.addEventListener('submit', e => {
        e.preventDefault()
        let budget = document.querySelector('.budget').value
        let allBudget = document.querySelector('.currentBudget')
        allBudget.innerHTML = `$ ${budget}`
        showMessage('The budget has been updated successfully', 'green')
        getBudget.reset()
        updatedBalance()
    })

let getExpense = document.querySelector('#getExpense')
    getExpense.addEventListener('submit', e => {
        e.preventDefault()
        const expenseTitle = document.querySelector('.expenseTitle').value
        const expenseValue = document.querySelector('.expenseAmount').value
    
        if(expenseTitle.trim() === '' || expenseTitle.trim() === null) {
            return showMessage('Please write a correct expense title', 'red')
        } else if( isNaN(expenseTitle.trim()) === false ){
            return showMessage('Please dont start with a number the expense title', 'red')
        }
    
    showMessage('The expense list has been added successfully', 'green')
    getExpense.reset()
    updatedExpenseList(expenseTitle, expenseValue)
 })

const showMessage = (message, cssColor) => {
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

const updatedExpenseList = (expenseTitle, expenseValue) => {
    const expenseList = document.querySelector('.expenseDetails')
    const newExpense = document.createElement('div')
        newExpense.classList.add('newExpense')
        newExpense.innerHTML = `<h5>${expenseTitle}</h5>
                                <p>$${expenseValue}</p>
                                <div>
                                    <i class='fa fa-edit'></i>
                                    <i class='fas fa-trash'></i>
                                </div>`
        expenseList.appendChild(newExpense)
    updatedExpenseValue(expenseValue)
}

let plus = 0;

const updatedExpenseValue = (value) => {
    let currentExpenseAmount = document.querySelector('.currentExpenseAmount')
    currentExpenseAmount.innerHTML = `$ ${plus += parseFloat(value)}`
    updatedBalance()
}

document.querySelector('.expenseDetails').addEventListener('click', e => {
    if(e.target.classList.contains('fa-trash')) {
        const newValue = e.target.parentElement.parentElement.children[1].textContent

        let newArr = newValue.split('')
        newArr.shift(); 

        let newLetter = ''
        newArr.forEach(letter => {
            newLetter += letter
            return newLetter
        })

        updatedExpenseValue(-newLetter)

        e.target.parentElement.parentElement.remove()
        showMessage('The expense item you clicked was deleted', 'red')
    }
})

document.querySelector('.expenseDetails').addEventListener('click', e => {
    if(e.target.classList.contains('fa-edit')) {
        const newValue = e.target.parentElement.parentElement.children[1].textContent

        let newArr = newValue.split('')
        newArr.shift(); 

        let newLetter = ''
        newArr.forEach(letter => {
            newLetter += letter
            return newLetter
        })

        updatedExpenseValue(-newLetter)
        
        
        let hereTitle = e.target.parentElement.parentElement.children[0].textContent
        let hereValue = e.target.parentElement.parentElement.children[1].textContent

        let newHereValue =  hereValue.split('')
        newHereValue.shift()
        let allNumbers = '';
        newHereValue.forEach(number => {
            allNumbers += number
            return allNumbers
        })


        const expenseTitle = document.querySelector('.expenseTitle')
        const expenseValue = document.querySelector('.expenseAmount')

        expenseTitle.value = hereTitle
        expenseValue.value = parseFloat(allNumbers)
    
        e.target.parentElement.parentElement.remove()
        showMessage('The expense item is already to be changed', 'green ')
    }
})

const updatedBalance = () => {

    let currentExpenseAmount = document.querySelector('.currentExpenseAmount').textContent
    const newArr = currentExpenseAmount.split('')
    newArr.shift()
    newArr.shift()
    
    let newLetter = ''
    newArr.forEach(item => {
        newLetter += item
        return newLetter
    })

    let allBudget = document.querySelector('.currentBudget').textContent
    const newBud = allBudget.split('')
    newBud.shift()
    newBud.shift()

    let aLetter = ''
    newBud.forEach(item => aLetter += item)

    let newBalance = parseInt(aLetter) - parseFloat(newLetter)
    let currentBalance = document.querySelector('.currentBalance')
    currentBalance.innerHTML = `$ ${newBalance}`

    if (newBalance > 0) {
        currentBalance.style.color ='green'
    } else if (newBalance < 0) {
        currentBalance.style.color = 'red'
    } else {
        currentBalance.style.color = 'black'
    }
}