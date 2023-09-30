const getMentors = async() =>{
    data = await fetch("/mentorship/mentors")
    let response = await data.json()
    console.log(response)
}

const getMentees = async() =>{
    data = await fetch("")
    let response = await data.json()
    console.log(response)
}

const getMentorshipRequest = async() =>{
    data = await fetch("")
    let response = await data.json()
}

const getMentorDetails = async(mentorId) =>{
    data = await fetch(`/mentorship/mentors/${mentorId}`, {
        mentorId,
        headers: {
            "Content-Type": "application/json"
        },
        method: "GET"
    })
    let response = await data.json();
    return response;
}












