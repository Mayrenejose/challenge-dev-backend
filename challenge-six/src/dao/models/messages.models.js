import mongoose from 'mongoose'

const messagesCollection = 'messages'

const messagesSchema = new mongoose.Schema({
    message: {
        type: String,
        require: true
    },
    user: {
        emailUser: {
            type: String,
            unique: true,
            require: true
        }
    }
})

const messageModel = mongoose.model(messagesCollection, messagesSchema)

export default messageModel
