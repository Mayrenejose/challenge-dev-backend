import { Router } from 'express'
import ProductManager from '../../dao/managerMongoDB/productManager/index.js'

const router = Router()

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
        res.status(500).send('error getting products')
    }
})

export default router