class ProductManager {

    constructor() {
        this.products = []
        this.nextId = 1
    }

    addProduct = (
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

        for (const propName in props) {
            if (!props[propName]) {
                return console.log(`The property ${propName} it's empty`)
            }
        }

        if( this.products.some(product => product.code === code) ) {
            return console.log('duplicate code field')
        }

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
    }

    getAllProducts = () => { return this.products }

    getProductById = (id) => {
        if(id > this.products.length) {
            console.log(`Not found the id: ${id} not exist`);
        } 

        return this.products.filter(product => product.id === id)
    }
}

const productManager = new ProductManager()

// data mock
productManager.addProduct(
    78311,
    'este es mi segundo producto',
    15666,
    748,
    'https://github.com/orgs/programacion-backend-55585/discussions/1',
    'producto horroso'
)

productManager.addProduct(
    1178,
    'este es mi segundo producto',
    15666,
    748,
    'https://github.com/orgs/programacion-backend-55585/discussions/1',
    'producto hermoso'
)

productManager.addProduct(
    1150,
    'este es mi segundo producto',
    156,
    445,
    'https://github.com/orgs/programacion-backend-55585/discussions/1',
    'producto hermoso'
)

console.log('-----------DATA--------------')
console.log(productManager.getAllProducts())
console.log('-----------PRODUCT BY ID CHECK--------------')
console.log(productManager.getProductById(1))
console.log('-----------PRODUCT BY NOT EXIST--------------')
console.log(productManager.getProductById(5))