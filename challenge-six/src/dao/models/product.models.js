import mongoose from 'mongoose'

const productsCollection = 'products'

const productSchema = new mongoose.Schema({
    category: {
        type: String,
        require: true
    },
    code: {
        type: String,
        require: true,
        unique: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true,
        min: 1
    },
    status: {
        type: Boolean,
        require: true,
        default: true
    },
    stock: {
        type: Number,
        require: true,
        min: 1
    },
    thumbnails: {
        type: [String],
        default: []
    },
    title: {
        type: String,
        require: true
    }
})

const productModel = mongoose.model(productsCollection, productSchema)

export default productModel
