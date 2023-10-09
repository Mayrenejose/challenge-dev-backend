const fs =  require('fs')
const { propsValidation } = require('./utils/validationProps')

class ProductManager {

    constructor() {
        this.products = []
        this.nextId = 1
        this.path = './dataProduct.json'
    }
    
    getAllProducts = async() => {
        try{
            if( !fs.existsSync(this.path) ) return []

            const db = await fs.promises.readFile(this.path, 'utf-8')
            return JSON.parse(db)
        } catch (error) {
            return console.log(error)
        }
    }

    addProduct = async(
        code,
        description,
        price,
        stock,
        thumbnail,
        title
    ) => {
        const props = {
            code, 
            description, 
            price, 
            stock, 
            thumbnail, 
            title
        }

        const data = await this.getAllProducts()

        try {

            if (!await propsValidation(props, data, this.path)) return []

            const newProduct = {
                code, 
                description, 
                id: this.nextId,
                price, 
                stock, 
                thumbnail, 
                title
            } 

            this.products.push(newProduct)
            this.nextId++

            await fs.promises.writeFile(this.path, JSON.stringify(this.products, null, '\t'))

        } catch(error) {
            return console.log(error, 'product creation failed')
        }
    }

    getProductById = async(id) => {
        const data = await this.getAllProducts()

        if(id > data.length) {
            console.log(`Not found the id: ${id} not exist`);
        } 

        return data.filter(product => product.id === id)
    }

    updateProduct = async(id, fieldUpdate) => {
        if(!fieldUpdate || !id) return console.log('empty field')
        
        try {
            const data = await this.getProductById(id)
            const product = data[0]

            for (let key in fieldUpdate) {
                if (product.hasOwnProperty(key)) {
                    product[key] = fieldUpdate[key]
                }
            }

            fs.writeFile(this.path, JSON.stringify(product, null, '\t'), (error) => {
                if (error) return console.log(error, 'error')
                console.log('product updated successfully')
            })

        } catch(error) {
            return console.log('product update failed')
        }

    }

    deleteProduct = async(id) => {
        if(!id) return console.log(console.log(`Not found the id: ${id} not exist`))

        try{
            const data = await this.getAllProducts()
            const searchId = data.some(product => product.id === id)

            if (searchId) {
            const deleteProduct = data.filter(product => product.id != id)

            fs.writeFile(this.path, JSON.stringify(deleteProduct, null, 2), (error) => {
                if (error) return console.log(error, 'error')
                console.log('product delete successfully')
            })
            } else {
                return console.log('the id not exist')
            }

        } catch(error){
            return console.log('product delete failed')
        }
    }
}

const startUp = async() => {
    const productManager = new ProductManager()

    await productManager.addProduct(
        10001,
        'producto 1',
        101,
        20000001,
        'https://github.com/orgs/programacion-backend-55585/discussions/1',
        'calidad'
    )

    await productManager.addProduct(
        10002,
        'producto 2',
        102,
        20000002,
        'https://github.com/orgs/programacion-backend-55585/discussions/1',
        'hermoso'
    )

    await productManager.addProduct(
        10003,
        'producto 3',
        103,
        20000003,
        'https://github.com/orgs/programacion-backend-55585/discussions/1',
        'mal estado'
    )
    
    console.log('-------------------DATA-----------------------')
    console.log(await productManager.getAllProducts())
    // console.log('-----------PRODUCT BY ID CHECK--------------')
    // console.log(await productManager.getProductById(2))
    // console.log('-----------PRODUCT BY NOT EXIST-------------')
    // console.log(await productManager.getProductById(5))
    //console.log('-----------UPDATE PRODUCT BY ID-------------')
    //console.log(await productManager.updateProduct(2, {code: 1236, description:'mal estado'}))
    // console.log('---------DELETE PRODUCT BY ID NO EXIST-----------')
    // console.log(await productManager.deleteProduct(5))
    // console.log('---------DELETE PRODUCT BY ID CHECK-----------')
    // console.log(await productManager.deleteProduct(3))
}

startUp()