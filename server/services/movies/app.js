const express = require('express')
const app = express()
const PORT = process.env.PORT || 4001
const cors = require('cors')
const { connect } = require('./config/mongodb')
const routes = require('./routes/index')
const errorHandler = require('./middlewares/errorHandler')

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(routes)
app.use(errorHandler)

connect()
    .then(() => {
        app.listen(PORT, () => {
            console.log('running on PORT', PORT);
        })
    })
