
    const express = require ('express');
    const app = express();
    const { user } = require('./models');

app.use(express.json());

//This is the bare bones the fetch function
app.get ('/api/users', async (req, res) => {
    // const {Firstname, Lastname};
    try {
    
        const user = await User.findOne({ where: { userid }});
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error"});
    }
})


// const profileImg=document.getElementById('profileimg');

// const imgInput=document.getElementById('formFile')
// const profilecard=document.getElementById('profilecard')

// updateButton.addEventListener('click',(e)=>{
//     e.preventDefault();

//     const selectedImg=imgInput
//     const reader= new FileReader();
//     reader.onload=(e)=>{
//         profileImg.src=e.target.result
//     };