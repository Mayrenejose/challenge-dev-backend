import { Router } from 'express'
import ProductManager from '../../models/productManager/index.js'

const router = Router()
const productManager = new ProductManager()

router.get('/', async(req, res) => {
    try {
        const dataProducts = await productManager.getAllProducts()

        res.render('home', {
            dataProducts,
            style: 'index.css',
            title: 'All products'
        })

    } catch (error) {
        res.status(500).send('error getting products')
    }
})

router.get('/realtimeproducts', async(req, res) => {
    try {
        const dataProducts = await productManager.getAllProducts()

        res.render('home', {
            dataProducts,
            style: 'index.css',
            title: 'All products'
        })

    } catch (error) {
        res.status(500).send('error getting products')
    }
})


export default router