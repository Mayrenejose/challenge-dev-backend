import nodemailer from 'nodemailer'
import config from '../../config/config.js'

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
        const result = await transport.sendMail({
            from: config.serviceUser,
            to: 'maye199226@gmail.com',
            subject: 'Cambio de contraseña',
            html: `
                <div>
                    <h1> cambio contraseñ</h1>
                </div>
            `
        })
        res.send('Message sent')
    } catch (error) {
        res.status(500).send({message: 'server error'})
    }
}