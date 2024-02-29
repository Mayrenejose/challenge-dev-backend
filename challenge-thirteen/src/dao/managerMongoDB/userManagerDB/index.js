import usersModel from '../../models/user.models.js'

export default class UserManager {
    getUsers = async() => {return await usersModel.find().lean().exec()}

    addRegister = async body => {return await usersModel.create(body)}

    updatePassword = async (email, body) => {return await usersModel.updateOne({email: email}, body)}
}