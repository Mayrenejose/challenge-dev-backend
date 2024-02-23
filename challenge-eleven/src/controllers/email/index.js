import nodemailer from 'nodemailer'
import jwt from 'jsonwebtoken'
import { UserService } from '../../service/index.js'
import config from '../../config/config.js'

const SECRET_JWT = config.secretKey

const transport = nodemailer.createTransport({
    service: config.serviceEmail,
    port: 587,
    auth: {
        user: config.serviceUser,
        pass: config.servicePassword
    }
})

export const getEmail = async(req, res) => {
    try {
        const { email } = req.body
        const allUsers = await UserService.getUsers()
        const searchUser = allUsers.find(item => item.email === email)
       
        if (!email) {
            return res.status(400).send({ message: 'email not provided' })
        }

        if(searchUser === undefined) return res.status(400).send({ message: 'email not exist', status: 400 })
        const token = jwt.sign({email: email }, SECRET_JWT, { expiresIn: '1h' })
        const resetPasswordLink = `http://localhost:8080/password-reset?token=${token}`
        console.log(token);
        await transport.sendMail({
            from: config.serviceUser,
            to: email,
            subject: 'Cambio de contraseña',
            html: `
                <div>
                    <h3>Para cambiar tu contraseña da click al siguiente enlace:</h3>
                    <a href="${resetPasswordLink}">${resetPasswordLink}</a
                    http://localhost:8080/password
                </div>
            `
        })
        res.send('Message sent')
    } catch (error) {
        res.status(500).send({message: 'server error'})
    }
}