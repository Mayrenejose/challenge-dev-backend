import dotenv from 'dotenv'

dotenv.config()

const persistence = process.argv[2] || process.env.PERSISTENCE

export default {
    persistence,
    mongoURL: process.env.MONGO_URL,
    mongoDBName: process.env.MONGO_DBNAME,
    port: process.env.PORT,
    clientId: process.env.GITHUB_ID,
    clientSecretToken: process.env.GITHUB_SECRET,
    urlCallback: process.env.GITHUB_URL,
    secretKey: process.env.JWT_SECRET,
    env: process.env.ENVIRONMET,
    serviceEmail: process.env.SERVICE_EMAIL,
    serviceUser: process.env.SERVICE_USER,
    servicePassword: process.env.SERVICE_PASSWORD
}