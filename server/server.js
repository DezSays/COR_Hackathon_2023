const express = require('express')
const app = express()
require('dotenv').config({ path : '../.env'})

app.get('/heartbeat',(req,res) => {
    console.log('Heartbeat')
    res.send('heartbeat')

    
})



app.listen(3000, () => {
    console.log('Server is running on port 3000')
})