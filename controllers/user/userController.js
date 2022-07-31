require('dotenv').config()
const User = require('../../models/user/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET

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

const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({ username })
        if (!user) {
            return res.json({ success: false, message: 'User not found' })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.json({ success: false, message: 'Incorrect password' })
        }
        const data = { user: { id: user._id } }
        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' })
        return res.json({ success: true, message: 'User logged in successfully', token })
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: "Some Internal Server Error Occured." })
    }
}

module.exports = { addUser, loginUser }