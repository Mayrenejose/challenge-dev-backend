import ProductManager from './productManager.js'
import express from 'express'

const app = express()
const PORT = 3000

app.get('/', async(req, res) => res.status(200).json({status: 200}))

app.get('/products', async(req, res) => {
    try{
        const productManager = new ProductManager()
        const allDataProducts = await productManager.getAllProducts()
        const queryLimit = req.query?.limit

        if ( !queryLimit ) return res.json({data: allDataProducts})

        if( isNaN(queryLimit) || queryLimit > allDataProducts.length ) {
            return res.status(400).json({error: 'error in requested limit'})
        } else {
            const dataSlice = allDataProducts.slice(0, queryLimit)
            return res.json({data: dataSlice})
        }

    } catch (error) {
        res.status(500).send('error getting products')
    }
})

app.get('/products/:pid', async(req, res) => {
    try{
        const productManager = new ProductManager()
        const data = await productManager.getAllProducts()
        const { pid } = req.params
        const searchId = data.some(product => product.id === Number(pid))

        if( !searchId ) {
            return res.status(400).json({error: `Not found the id: ${pid} not exist`})
        } else {
            const dataById = await productManager.getProductById(Number(pid))
            res.json({data: dataById})
        }
    } catch (error) {
        res.status(500).send('error getting product')
    }
})

app.listen(PORT, () => { console.log(`server listened on port ${PORT}`)})