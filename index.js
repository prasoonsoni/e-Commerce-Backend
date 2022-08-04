const express = require('express')
const connectToDatabase = require('./database/connection')
const app = express()
const cors = require('cors')
const port = 3000
connectToDatabase()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('<center><h1>Welcome to E-Commerce Backend</h1>' +
        '<h3><a href="https://github.com/prasoonsoni/e-Commerce-Backend" target="_blank">Visit Repository</a></h3></center>')
})

app.use('/api/user', require('./routes/user/userRoutes'))
app.use('/api/user/address', require('./routes/user/userAddressRoutes'))
app.use('/api/user/payment', require('./routes/user/userPaymentRoutes'))

app.listen(port, () => {
    console.log(`E-Commerce Backend listening on http://localhost:${port}`)
})