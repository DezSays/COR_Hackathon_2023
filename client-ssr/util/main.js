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

const registerFormSetup = () => {
    if (location.href === 'Registration'){
    const submit = document.getElementById('submit')
    submit.addEventListener('click', registerFormHandler)
}}

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

const setupMenteeRegistration = () => {
    if (location.href === '/menteeregistration') {
        let about=document.getElementById("about-you");
        let preference=document.getElementById("preferences");
        let create=document.getElementById("createp");
        about.style.display="flex";
        let right1b=document.getElementById("right1");
        let left2b=document.getElementById("left2");
        let right2b=document.getElementById("right2");
        let left3b=document.getElementById("left3");

        let subButton=document.getElementById("submit-button");

        right1b.addEventListener("click",()=>{
            about.style.display="none";
            preference.style.display="flex";
            create.style.display="none";
        })
        left2b.addEventListener("click",()=>{
            about.style.display="flex";
            preference.style.display="none";
            create.style.display="none";
        })
        right2b.addEventListener("click",()=>{
            about.style.display="none";
            preference.style.display="none";
            create.style.display="flex";
        })
        left3b.addEventListener("click",()=>{
            about.style.display="none";
            preference.style.display="flex";
            create.style.display="none";
        })
    }
}

const menteeRegistration = (body) => {
    if (location.href === 'menteeregistration') {
    const studentType = document.getElementById('studentType')
    const internshipType = document.getElementById('intern-type')
    const leaderType = document.getElementById('leaderType')
    const genderMatch = document.getElementById('genderMatch')
    const photoURL = document.getElementById('photo-url')
    const linkedin = document.getElementById('linkedin')

    let student = studentType.value;
    let internship = internshipType.value;
    let leader = leaderType.value;
    let gender = genderMatch.value;
    let photo = photoUrl.value;
    let linkedinLink = linkedin.value;

    let body = {
        "user_id": `${userId}`,
        "student_type": `${student}`,
        "preferred_profession": `${internship}`,
        "preferred_leader": `${leader}`,
        "same_gender": `${gender}`,
        "linkedin_url": `${linkedinLink}`,
        "photo_url": `0`
    }

    menteePost(body);
    }
    
}

const menteePost = (body) => {
    const data = fetch(`/mentees`, {
        body: `${body}`,
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST"
    })
    const response = data.json()
    return response
}

const newUserInfo = async (body, userId) => {
    const data = await fetch(`profile/${userId}`// <--- insert user id here
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

