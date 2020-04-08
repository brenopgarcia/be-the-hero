const express = require('express')
const routes = require('./routes')
const {errors} = require('celebrate')
const cors = require('cors')

const app = express()

// let whitelist = ['http://localhost:3000']
// let corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

//app.use(cors(corsOptions))
app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errors())

module.exports = app;