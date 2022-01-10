require('dotenv').config()
const mongoose = require('mongoose')


async function connect() {

  const uri = process.env.MONGODB_URI

  await mongoose.connect(uri)
    .catch(err => console.error(err) )

}

connect()


module.exports = mongoose