const username = document.getElementById('user-name')
const pass = document.getElementById('password')
const submit_btn = document.getElementById('log-in-submit')
const log_in_btn = document.getElementById('log-in-btn')
const sign_up_btn = document.getElementById('sign-up-btn')

const sign_up_user = document.getElementById('sign-up-name')
const user_validate = document.getElementById('user-validate')
const pass_sign_up = document.getElementById('password-sign-up')
const sign_up_submit = document.getElementById('sign-up-submit')

let users = JSON.parse(localStorage.getItem("users")) || {}

function check_user() {
    let user = username.value.trim()
    let password = pass.value.trim()
    if (user === "") {
        alert("Enter username to check")
        return
    }
    if (password === "") {
        alert("Enter password to check")
        return
    }
    if (isValid(user, password)) {
        alert('User Credentials are correct!')
        return
    }
    alert('Invalid Username or Password')
}

function isValid(user, password) {
    return users[user] && users[user].password === password
}

function isValidUser(sign_up_user) {
    const user = sign_up_user.value.trim()
    if (user === '') {
        alert('Enter username')
        return false
    }

    if (!users[user]) {
        alert('UserName is available')
        return true
    }
    alert('Username already taken!')
    return false
}

function createUser() {
    if (!isValidUser(sign_up_user)) return;

    let user = sign_up_user.value.trim()
    let password = pass_sign_up.value.trim()

    if (password === "") {
        alert("password field can't be empty")
        return false
    }

    users[user] = {
        id: crypto.randomUUID(),
        username: user,
        password: password
    }

    localStorage.setItem("users", JSON.stringify(users))
    alert("User Created Successfully!")
}


if (submit_btn) {
    submit_btn.addEventListener('click', check_user)
}

if (user_validate) {
    user_validate.addEventListener('click', () => {
        isValidUser(sign_up_user)
    })
}

if (sign_up_submit) {
    sign_up_submit.addEventListener('click', createUser)
}

if (sign_up_btn) {
    sign_up_btn.addEventListener('click', () => {
        window.location.href = "signup.html"
    })
}