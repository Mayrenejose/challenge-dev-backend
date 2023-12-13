import mongoose from 'mongoose'

const gitHubModel = mongoose.model('github', mongoose.Schema({
    email: String,
    password: String,
    first_name: String,
    last_name: String
}))

export default gitHubModel