const AuthSchema = require("../../Model/AuthSchema")
const bcrypt = require('bcrypt')


// TOKEN JWTWEBTOKEN
const jwt = require('jsonwebtoken')
const JWT_SECERETE = 'hello'

// ADMIN SIGNUP WHICH IS NOT REQUIRED
const AuthSignup = async (req, res) => {
    try {
        const { password, email } = req.body

        const salt = await bcrypt.genSalt(10)
        const pass = await bcrypt.hash(password, salt)

        const auth = await new AuthSchema({
            email,
            password: pass
        })

        const saveAuth = await auth.save()
        res.send(saveAuth)

    } catch (error) {
        console.log(error);
        res.status(500).send("Internal error")
    }
}

// LOGIN AND SETING JWT TOKEN
const Authlogin = async (req, res) => {
    try {
        const { email, password } = req.body

        const auth = await AuthSchema.findOne({ email })
        if (auth) {
            const passCheck = await bcrypt.compare(password, auth.password)

            if (passCheck) {
                const data = await auth.id
                const token = await jwt.sign(data, JWT_SECERETE)
                res.json({ success: true, token })

            } else {
                res.json("wrong Password")
            }

        } else {
            res.json("wrong credentials")
        }

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Error")

    }
}

module.exports = {AuthSignup , Authlogin}