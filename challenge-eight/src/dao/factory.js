import config from "../config/config.js"
import mongoose from "mongoose"

let Cart
let Products

switch (config.persistence) {
    case 'FILE':
        const { default: CartsManagerFile } = await import('./managerFS/cartManager/index.js')
        const { default: ProductsManagerFile } = await import('./managerFS/productManager/index.js')
        console.log('Conectado FS')
        Cart = CartsManagerFile
        Products = ProductsManagerFile

        break

    case 'MONGODB':
        await mongoose.connect(config.mongoURL, {dbName: config.mongoDBName})
        console.log('Conectado DB')

        const { default: CartsManagerMongo } = await import('./managerMongoDB/cartManagerDB/index.js')
        const { default: ProductsManagerMongo } = await import('./managerMongoDB/productManager/index.js')
        Cart = CartsManagerMongo
        Products = ProductsManagerMongo
        
        break

    default:
        throw new Error('Persistence is not configured')
}

export {Cart, Products} 