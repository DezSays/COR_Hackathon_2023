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

const mappedData = aboutUsData.aboutus.map((personnel, index) => {
    let source = personnel.image;
    let title = personnel.title;
    let name = personnel.name;

    return { source, title, name };
});

console.log(mappedData);
