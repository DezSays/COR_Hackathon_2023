const questionForm = document.getElementById("questionForm")
const questionInput = document.getElementById("questionInput")

const handleQuestionSubmit = (x) => {
    x.preventDefault()
    const userQuestion = questionInput.value

    console.log("question:", userQuestion)
    const questionSection = document.getElementById("Q1") //Here we get the div that contains the questions
    
    const questionBlock = document.createElement('div')//here we create a div to contain each individual question

    const question = document.createElement('p') //the create a paragraph element to house the question
    question.classList.add("question") //
    question.innerText = userQuestion //here we set the inner text of the paragraph element to the question
    
    const replyInput = document.createElement('input')
    replyInput.classList.add('replyInput')
    
    
    const submitBtn = document.createElement('button')

    const dropdown = document.createElement('div')

    submitBtn.innerText = "Reply"
    
    
    questionBlock.appendChild(question)
    questionBlock.appendChild(replyInput)
    questionBlock.appendChild(submitBtn)
    questionBlock.appendChild(dropdown)
    
    questionSection.appendChild(questionBlock)
    // console.log(questionBlock)

}

questionForm.addEventListener('submit', handleQuestionSubmit)

// const questionReply = document.getElementsByClassName("questionReply")

// const handleReply = () => {
//     const reply = questionReply.value
    
//     const dropdown = document.getElementById("dropdown")
    
//     const userReply = document.createElement("p")
//     userReply.innerText = reply

//     dropdown.appendChild(userReply)
// }

// const replyBtn = document.getElementById('replyButton')

// replyBtn.addEventListener('onClick', handleReply)
// questionForm.addEventListener('submit', (event) => {
//     event.preventDefault()
//     handleQuestionSubmit()
// })


// const handleReplySubmit = async () => {
//     const questionSection = document.getElementById("askedQuestions") //Here we get the div that contains the questions
    
//     const questionBlock = document.createElement('div')//here we create a div to contain each individual question
    
//     const question = document.createElement('p') //the create a paragraph element to house the question
//     question.classList.add("question") //
//     question.innerText = userQuestion //here we set the inner text of the paragraph element to the question
    
//     const replyInput = document.createElement('input')
    
    
//     const submitBtn = document.createElement('button')
//     submitBtn.innerText = "Reply"
    
    
//     questionBlock.appendChild(question)
//     questionBlock.appendChild(replyInput)
//     questionBlock.appendChild(submitBtn)
    
//     questionSection.appendChild(questionBlock)
// }





