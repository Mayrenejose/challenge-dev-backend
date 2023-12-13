import { Router } from 'express'
import usersModel from '../../dao/models/user.models.js'
import passport from 'passport'

const router = Router()

router.get('/users', async(req, res) => {
    try {
        const allUsers = await usersModel.find().lean().exec()
        
        res.status(200).json({data: allUsers})
    } catch(error) { 
        res.status(500).send('Error server')
    }
})


router.post('/register', async(req, res) => {
    try {         
        const body = req.body 
        const { email } = req.body
        const existingUser = await usersModel.findOne({ email })   
        
        if ( !existingUser ) {            
            await usersModel.create(body)
            return res.redirect('/') 
        } 
        return res.redirect('/') 
    } catch(error) {        
        res.status(500).send('Error registering user')
    }
})


router.post('/login', async(req, res) => {
    try {
        const { email, password } = req.body
        const existingUser = await usersModel.findOne({ email, password })  
        
        if ( !existingUser ){
            return res.redirect('/')
        }

        if (email === 'adminCoder@coder.com' && password === 'adminCod3r123') {
            existingUser.role = 'admin'
            await existingUser.save()
        }  

        req.session.user = existingUser 
        return res.redirect('/products') 
    } catch(error) {      
        res.status(500).send('Error logging in user')
    }
})

router.get('/github', passport.authenticate('github', { scope: ['user:email'] }),
    async (req, res) => { }
)

router.get(
    '/githubcb', passport.authenticate('github', {failureRedirect: '/error'}), (req, res) => {
        console.log('Callback: ', req.user)

        req.session.user = req.user
        console.log('User Session setted')

        res.redirect('/')
    }
)



router.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if(err) return res.send('error')

        return res.redirect('/')
    })
})


export default router