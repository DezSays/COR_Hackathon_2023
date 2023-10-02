const loginFunction = () => {
    const usernameInput = document.getElementById('userNameInput')
    const passwordInput = document.getElementById('passwordInput')

    const body = {
        "username": `${usernameInput.value}`,
        "password": `${passwordInput.value}`
    }

    loginPost(body)
}

const loginPost = (body) => {
    const data = fetch('/login', {
        body: JSON.stringify(body),
        headers: {
            "content-type": "application/json"
        },
        method: "POST"
    })

}