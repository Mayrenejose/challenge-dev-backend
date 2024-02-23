import { Router } from 'express'
import { ProductService, ChatService } from '../../service/index.js'
import passport from 'passport'
import { addLogger } from '../../middleware/loggerMidleware/index.js'
import config from '../../config/config.js'
import jwt from 'jsonwebtoken'

const SECRET_JWT = config.secretKey
const router = Router()
router.use(addLogger)

router.get('/', async(req, res) => {
    try { 
        return res.redirect('/login')

    } catch (error) {
        res.status(500).send({error :'error'})
    }
})

router.get('/register', async(req, res) => {
    try {        
        res.render('register', {
            style: 'index.css',
            title: 'Registro'
        })

    } catch (error) {
        res.status(500).send({error :'error'})
    }
})

router.get('/login', async(req, res) => {
    try {      
        res.render('login', {
            style: 'index.css',
            title: 'Login'
        })

    } catch (error) {
        res.status(500).send({error :'error'})
    }
})

router.get('/chat', async(req, res) => {
    try {
        const allUsers = await ChatService.getAllUsers()        
        res.render('chat', {
            allUsers,
            style: 'index.css',
            title: 'Chat'
        })

    } catch {
        res.status(500).send({error: 'error'})
    }
})

router.get('/chat/:id', async(req, res) => {
    try {
        const idUser = req.params?.id
        const userInformation = await ChatService.getMessage(idUser)
        const email = userInformation.email
        const textMsj = userInformation.message
                
        res.render('chatId', {
            email,
            textMsj,
            idUser,
            style: 'index.css',
            title: 'Chat'
        })

    } catch {
        res.status(500).send({error: 'error'})
    }
})

router.get('/products', passport.authenticate('jwt', {session: false}), async(req, res) => {
    try {
        const user = req.user
        const limit = parseInt(req.query?.limit ?? 10)
        const page = parseInt(req.query?.page ?? 1)
        const query = req.query?.query ?? ''
        const sort = req.query?.sort
        const category = req.query.category ?? ''
        const previousPage = req.get('Referer')
        const currentUrl = `${req.protocol}://${req.get('host')}`        
       
        const dataProducts = await ProductService.getAllProducts(
            limit, 
            page,
            query,
            previousPage,
            currentUrl,
            sort,
            category
        )

        res.render('products', {
            dataProducts,
            user,
            style: 'index.css',
            title: 'All products'
        })

    } catch (error) {
        res.status(500).send({status:'error'})
    }
})

router.get('/product/:_id', async(req, res) => {
    try {   
        const idProduct = req.params?._id
        const infoProduct = await ProductService.getProductById(idProduct)
        const titleProduct = infoProduct.title
        const image = infoProduct.thumbnails
        const description = infoProduct.description
        const priceProduct = infoProduct.price
        const categoryProduct = infoProduct.category
        const stockProduct = infoProduct.stock
        
        res.render('product', {
            titleProduct,
            image,
            description,
            priceProduct,
            categoryProduct,
            stockProduct,
            style: 'index.css',
            title: 'All products'
        })

    } catch (error) {
        res.status(500).send({status:'error'})
    }
})

router.get('/password-reset',  async(req, res) => {
    try {
        const { token } = req.query
        if (!token) {
            return res.status(400).send({ message: 'Token not provided' });
        }
        try {
            const decoded = jwt.verify(token, SECRET_JWT)

            res.render('password', {
                style: 'index.css',
                title: 'Cambio de contraseña',
                token 
            })
        } catch (error) {
            console.error(error);
            return res.status(401).send({ message: 'Token is invalid or expired' });
        }
    } catch {
        res.status(500).send({error: 'error'})
    }
})

router.get('/:site', async(req, res) => {
    try {
        const params = req.params?.site
        const limit = parseInt(req.query?.limit ?? 2)
        const page = parseInt(req.query?.page ?? 1)
        const query = req.query?.query ?? ''
        const renderParameter = params === 'home' ? 'home' : 'realTimeProducts'
        const dataProducts = await ProductService.getAllProducts(
            limit, 
            page,
            query,
        )
        
        res.render(renderParameter, {
            dataProducts,
            style: 'index.css',
            title: 'All products'
        })

    } catch (error) {
        res.status(500).send({error :'error getting products'})
    }
})

export default router