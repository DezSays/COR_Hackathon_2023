const app = document.getElementById('app');

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

const registerFormHandler = () => {
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

const setup = () => {
    if (location.href === '/profile') {
        const form = app.getElementById('profilecard');
        const saveButton = form.getElementById('save');
        const dismissButton = form.getElementById('dismiss');
        const img = document.getElementById('profileimg')
        const user = document.getElementById('userinfo')
        const name = document.getElementById('usernameDisplay')
        const userInfo = fetchUser(userId);
        const userImg = fetchImg(userId);
        saveButton.addEventListener(click, formHandler);

        name.innerHTML = userInfo.name;
        img.innerHTML = userImg.path;
        if (user.role === 'mentor') {
            user.innerHTML = `
            <p id="email">Email: ${userInfo.email}</p>
            <p id="profession">Profession: ${userInfo.profession}</p>
            <p id="gender">Gender: ${userInfo.gender}</p>
            <p id="leadership">Leadership Position? ${userInfo.leadership}</p>\
            <p id="counselor">Counselor? ${userInfo.counselor}</p>
        ` } else {
            user.innerHTML = `
            <p id="email">Email: ${userInfo.email}</p>
            <p id="student_type">Student Type: ${userInfo.student_type}</p>
            <p id="gender">Gender: ${userInfo.gender}</p>
            <p id="leadership">Would you prefer to work with someone in a Leadership Position? ${userInfo.preferred_management}</p>
            <p id="counselor">Would you prefer to work with someone who is a Counselor? ${userInfo.preferred_counselor}</p>
            `
        }
    }
}

const profilePage = () => {
    if (location.)
}

const newFormHandler = () => {
    let name = form.getElementById('inputName4')
    let email = form.getElementById('inputEmail4')
    let gender = form.getElementById('inputGender4')
    let profession = form.getElementById('inputProfession4')
    let leadership = form.getElementById('leadership')
    let counselor = form.getElementById('counselor')
    let image = form.getElementById('formFile')

    const body = {
        "name": `${name}`,
        "email": `${email}`,
        "gender": `${gender}`,
        "profession": `${profession}`,
        "leadership": `${leadership}`,
        "counselor": `${counselor}`
    }
    
    functionSplit(body, image);
}

const functionSplit = (value1, value2) => {
    imageFunction(value2);
    newUserInfo(value1);
}

const imageFunction = async (imageInfo) => {
    const data = await fetch ('/insertpathnamehere', {
        body: imageInfo,
        headers: {
            "Content-Type": "image"
        },
        method: "POST"
    })
    const response = data.json();
    return response;
    
}

const newUserInfo = async (body) => {
    const data = await fetch('insertpathhere/userid'// <--- insert user id here
    , {
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/JSON"
        },
        method: "POST"
    })
    const response = await data.json()
    return response;
}


const fetchUser = async (userId) => {
    const data = await fetch(`/profile/${userId}`);
    const response = data.json();
    return response;
}

