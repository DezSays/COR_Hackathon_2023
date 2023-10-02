const app = document.getElementById('app');


const setup = () => {
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
    user.innerHTML = `
        <p id="email">Email: ${userInfo.email}</p>
        <p id="profession">Profession: ${userInfo.profession}</p>
        <p id="gender">Gender: ${userInfo.gender}</p>
        <p id="leadership">Leadership Position? ${userInfo.leadership}</p>\
        <p id="counselor">Counselor? ${userInfo.counselor}</p>
    `
}

const formHandler = () => {
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