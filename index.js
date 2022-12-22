const express = require('express')
const app = express()
const port = 5000

const cors = require('cors')
app.use(cors())

/* Add some fiel  */
 const courses = require("./data/courses.json") 


app.get('/courses',(req,res)=>{
    res.send(courses)
}) 
 app.get('/courses/:id',(req,res)=>{
  const id= req.params.id;
  const coursesDetails = courses.find(c =>c.id===id)
    res.send(coursesDetails)
}) 



 app.get('/', (req, res) => {
  res.send('Hello World!')
})
 


 app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 