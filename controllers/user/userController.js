const User = require('../../models/user/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const addUser = async (req, res) => {
    try {
        const { username, password, first_name, last_name, telephone } = req.body
        const user = await User.findOne({ username })
        if (user) {
            return res.json({ success: false, message: 'Username already exists' })
        }
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)
        const newUser = await User.create({
            username: username,
            password: hashPassword,
            first_name: first_name,
            last_name: last_name,
            telephone: telephone
        })
        if (!newUser) {
            return res.json({ success: false, message: 'Error creating user' })
        }
        return res.json({ success: true, message: 'User created Successfully' })
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: "Some Internal Server Error Occured." })
    }
}

module.exports = { addUser }