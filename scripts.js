const loginButton = document.getElementById('loginButton')
const usernameBox = document.getElementById('username')
const userText = document.getElementById('userText')
const emailBox = document.getElementById('email')
const emailText = document.getElementById('emailText')
const passBox = document.getElementById('password')
const passText = document.getElementById('passText')
usernameBox.addEventListener('change', () => {
    let isLength = usernameBox.value.length < 15
    let isEnglish = /^[A-Za-z]*$/.test(usernameBox.value)
    if (isLength && isEnglish) {
        userText.innerHTML = ''
    } else if (!isLength && !isEnglish)  {
        userText.innerHTML = 'your username should be in english and less than 15 characters'
    } else if (!isEnglish) {
        userText.innerHTML = 'your username should be in english'
    } else if (!isLength) {
        userText.innerHTML = 'your username should be less than 15 characters'
    }
})
emailBox.addEventListener('change', () => {
    let isEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailBox.value)
    if (isEmail) {
        emailText.innerHTML = ''
    } else {
        emailText.innerHTML = 'your email is incorrect'
    }
})
passBox.addEventListener('change', () => {
    let isLength = passBox.value.length > 7
    let isLower = passBox.value.toUpperCase() == passBox.value
    let isUpper = passBox.value.toLowerCase() == passBox.value
    let isNumber = /\d/.test(passBox.value)
    if (isLength && !isLower && !isUpper && isNumber){
        passText.innerHTML = ''
    } else {
        passText.innerHTML = 'your password is wrong'
    }
})