const formHandler = () => {
    const registerForm = document.getElementById('registerForm')
    const name = registerForm.getElementById('nameInput')
    const email = registerForm.getElementById('emailInput')
    const role = registerForm.getElementById('roleInput')
    const password = registerForm.getElementById('passwordInput')

    let body = {
        "name": `${name.value}`,
        "email": `${email.value}`,
        "role": `${role.value}`,
        "password": `${password.value}` 
    }

    registrationRoute(body)
}

const registrationRoute = (obj) => {
    const data = fetch('/register', {
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST"
    })
    const response = data.JSON();
    return response;
}