const containerEl = document.getElementById('container')
const leftEl = document.getElementById('left')
const rigthEl = document.getElementById('rigth')

const userEmailEl = document.getElementById('user-email')
const invalidEmailEl = document.getElementById('invalid-email')
const emailInput = document.getElementById('email')
const submitBtnEl = document.getElementById('submit')


const confirmedMessageEl = document.getElementById('confirmed-message')
const dismissMessageEl = document.getElementById('dismiss-message')

function formSuccess(){
    confirmedMessageEl.classList.add('active')
    containerEl.classList.add('success')

    leftEl.style.display = 'none'
    rigthEl.style.display ='none'
}

function validateEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

submitBtnEl.addEventListener("click", (e) => {
    e.preventDefault()
    const email = emailInput.value.trim()

    if(validateEmail(email)){
        formSuccess()
        userEmailEl.innerText = email
        emailInput.value = ''

        invalidEmailEl.classList.remove('active')
        emailInput.classList.remove('active')
    }else{
        invalidEmailEl.classList.add('active')
        emailInput.classList.add('active')
    }
})

dismissMessageEl.addEventListener("click", () => {
    leftEl.style.display = 'block'
    rigthEl.style.display = 'block'

    containerEl.classList.remove('success')
    confirmedMessageEl.classList.remove('active')
})
