import { Cart, Products } from '../dao/factory.js' 

import CartRepository from './cart/index.js'
import ProductRepository from './product/index.js'

export const CartService = new CartRepository(new Cart())
export const ProductService = new ProductRepository(new Products())