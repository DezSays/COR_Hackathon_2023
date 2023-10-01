const cardBody = document.getElementById('card-body')

const aboutUsData = {
    "aboutus": [
        {
            "image": "./assets/Jeannie Ross-Director of Job Training and Employment Services.jpg_2023",
            "title": "Director of Job Training and Employment Services",
            "name": "Jeannie Ross"
        },
        {
            "image": "./assets/John McQueen- T2 Recruitment Leader.jpg",
            "title": "T2 Recruitment Leader",
            "name": "John Mcqueen"
        },
        {
            "image": "./assets/Martha Blaides- T2 Recruitment Leader.jpg",
            "title": "T2 Case Manager",
            "name": "Martha Blaides"
        },
        {
            "image": "./assets/Ron Cofield-T2 Academy Employment Specialist",
            "title": "T2 Academy Employment",
            "name": "Ron Cofield"
        }
    ]
};

const functionAbout = () => {
    aboutUsData.aboutus.map((personnel, index) => {
    let source = personnel.image;
    let title = personnel.title;
    let name = personnel.name;
    
    let titlediv = document.createElement('div');
    let img = document.createElement('img');
    let namediv = document.createElement('div');
    let cardparent = document.createElement('div')

    titlediv.innerHTML = title;
    namediv.innerHTML = name;
    img.src = source;
    cardparent.appendChild(img)
    cardparent.appendChild(namediv)
    cardparent.appendChild(titlediv)
    cardBody.append(cardparent);

});
}

functionAbout()


// const card = document.querySelector('.card');
// const profilePicture = card.querySelector('.card-img-top');
// const titleElement = card.querySelector('.card-title');
// const nameElement = card.querySelector('.card-text');

// aboutUsData.aboutus.forEach(personnel => {
//     profilePicture.src = personnel.image;
//     titleElement.innerText = personnel.title;
//     nameElement.innerText = personnel.name;
// });