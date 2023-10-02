const app = document.getElementById('app');
const form = document.getElementById('profilecard');
const saveButton = document.getElementById('save');
const dismissButton = document.getElementById('dismiss');

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
    const data = await fetch('/profile/edit/'// <--- insert user id here
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

saveButton.addEventListener(click, formHandler);