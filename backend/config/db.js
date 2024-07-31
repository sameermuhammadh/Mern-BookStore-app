const dotenv = require("dotenv").config();

const username = process.env.MONGODB_USER
const pass = process.env.MONGODB_PASSWORD
const host = process.env.MONGODB_HOST
const mongoURI = `mongodb+srv://${username}:${pass}@${host}/books-collection?retryWrites=true&w=majority&appName=BookStore-MERN`;

module.exports = mongoURI;