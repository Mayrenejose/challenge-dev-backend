import passport from "passport"
import GitHubStrategy from 'passport-github2'
import githubModel from "../dao/models/github.models.js"

const initializeGithub = () => {

    passport.use('github', new GitHubStrategy({
        clientID: 'Iv1.d5e53923309a4a62',
        clientSecret: '60ec544097798ed45ba56de2e58cd250dbfbaaeb',
        callbackURL: 'http://localhost:8080/session/github/callback'
    }, async (accessToken, refreshToken, profile, done) => {
        try {
            const user = await githubModel.findOne({ email: profile._json.email })
            if(user) {
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