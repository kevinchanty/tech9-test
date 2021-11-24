import express from 'express'
const app = express()
const port = 3001

app.use(express.json)
app.use(express.urlencoded)

app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

app.post('sortnum', (req, res) => {
    const {numArr} = req.body
    console.log(numArr);
    
    if (!Array.isArray(numArr) || !numArr.every(item=>isFinite(item))) {
        res.status(400).json({error:"Invalid Input"})
        return
    }
    res.json(numArr.sort())

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})