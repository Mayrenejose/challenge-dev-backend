import express from 'express'
import handlebars from 'express-handlebars'
import routerProducts from './routes/products/index.js'
import routerCarts from './routes/carts/index.js'
import viewsHandlebars from './routes/views/index.js'
import __dirname from './utils.js'

const PORT = 8080
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//setting handlebars
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

//routes
app.use(express.static(__dirname + '/public'))
app.use('/api/products', routerProducts)
app.use('/api/carts', routerCarts)
app.use('/', viewsHandlebars)

app.listen(PORT, () => { console.log(`server listened on port ${PORT}`)})