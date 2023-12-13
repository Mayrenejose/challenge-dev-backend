import passport from "passport"
import githubModel from "../dao/models/github.models.js"
import GithubStrategy from 'passport-github2'

const initializeGithub = () => {

    passport.use('github', new GithubStrategy({
        clientID: 'Iv1.d5e53923309a4a62',
        clientSecret: '30ea4a5617e7b16e17e7c11c94eee3fa87c55c38',
        callbackURL: 'http://localhost:8080/githubcb'
    }, async (accessToken, refreshToken, profile, done) => {
        console.log(profile);

        try {
            const user = await githubModel.findOne({ email: profile._json.email })
            if(user) {
                console.log('Ya se encuentra registrado')
                return done(null, user)
            }

            const newUser = await githubModel.create({
                first_name: profile._json.name, 
                last_name: '',
                email: profile._json.email,
                password: ''
            })

            return done(null, newUser)

        } catch (error) {
            return done('Error to login with github ' + error)
        }
    }))

    passport.serializeUser((user, done) => {
        done(null, user._id)
    })

    passport.deserializeUser(async (id, done) => {
        const user = await githubModel.findById(id)
        done(null, user)
    })
}

export default initializeGithub