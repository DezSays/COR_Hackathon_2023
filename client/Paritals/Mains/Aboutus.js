const cards = (team) => {
  console.log("skdjhfksjdhfkjsdfjdsfkjs")
  const div = document.createElement('div')
  team.map((member,index) =>{
    let image = member.img;
    let email = member.email
    let briefbio = member.bio
    let contactButton = member.contactButton
    let name = member.name

    
    div.innerHtml= 
    `<div>
        <img src=${image}></img>
        <h2>Email: ${email}</h2>
        <h2>Brief Bio: ${briefbio}</h2>
        <h2>Contact Button: ${contactButton}</h2>
        <h2>Name: ${name}</h2>
    </div>
    `

  })
} 


cards([{
    member: {
        image: "abc",
        email: "abc",
        briefbio: "abc",
        contactButton:"abc",
        name: "abc"
    }
}])
