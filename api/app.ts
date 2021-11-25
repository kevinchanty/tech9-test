import express from 'express'
import passport from 'passport'
import dotenv from 'dotenv'
import jwt from 'jwt-simple'
import User from './model/UserModel'
import { Strategy as LocalStrategy } from 'passport-local/'
const app = express()
const port = 3001

dotenv.config()
const secret = process.env.secret || "test"

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


passport.use(new LocalStrategy({ usernameField: 'login', },
    function (login, password, done) {
        const user = User.findOne(login, password);
        if (user) {
            const token = jwt.encode({ login: user }, secret)
            return done(null, token)
        }
        return done(null, false, { message: "Incorrect username/password" })
    }
));
app.use(passport.initialize());

app.use(express.static('./public'))

app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

app.post('/sortnum', (req, res) => {
    const { numArr } = req.body

    if (!Array.isArray(numArr) || !numArr.every(item => isFinite(item))) {
        res.status(400).json({ error: "Invalid Input" })
        return
    }

    const json = numArr.map(number => parseFloat(number))

    res.json(json.sort((a, b) => a - b))

})

app.post('/login',
    passport.authenticate('local', { session: false }),
    (req, res) => {
        res.end(req.user)
    })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})