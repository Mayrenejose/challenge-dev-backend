import { Router } from 'express'
import ProductManager from '../../dao/managerMongoDB/productManager/index.js'
import messageModel from '../../dao/models/messages.models.js'

const router = Router()

router.get('/chat', async(req, res) => {
    try {
        const allUsers = await messageModel.find()
        
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
        const userInformation = await messageModel.findById(idUser)
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

router.get('/:site', async(req, res) => {
    try {
        const params = req.params?.site
        const renderParameter = params === 'home' ? 'home' : 'realTimeProducts'
        const dataProducts = await ProductManager.getAllProducts()
        
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