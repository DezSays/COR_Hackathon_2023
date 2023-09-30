const profileImg=document.getElementById('profileimg');
const imgInput=document.getElementById('formFile')
const updateButton=document.getElementById('updatebutton')

updateButton.addEventListener('click',(e)=>{
    e.preventDefault();

    const selectedImg=imgInput
    const reader= new FileReader();
    reader.onload=(e)=>{
        profileImg.src=e.target.result
    };
    



})