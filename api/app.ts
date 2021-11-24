import express from 'express'
const app = express()
const port = 3001

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

app.post('/sortnum', (req, res) => {
    const { numArr } = req.body
    console.log(numArr);

    if (!Array.isArray(numArr) || !numArr.every(item => isFinite(item))) {
        res.status(400).json({ error: "Invalid Input" })
        return
    }

    const json = numArr.map(number => parseFloat(number))
    console.log(json);

    res.json(json.sort((a, b) => a - b))

})

// app.post('/login', (req,res) => {
//     const {login,password} = req.body
// })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})