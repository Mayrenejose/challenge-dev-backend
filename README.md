# Challenge-dev-backend - 9
- Nueva arquitectura.

```
├─ challenge-nine
│  ├─ .env
│  ├─ .vscode
│  │  └─ settings.json
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ src
│  │  ├─ app.js
│  │  ├─ config
│  │  │  └─ index.js
│  │  ├─ dao
│  │  │  ├─ managerFS
│  │  │  │  ├─ cartManager
│  │  │  │  │  └─ index.js
│  │  │  │  ├─ data
│  │  │  │  │  ├─ dataCart.json
│  │  │  │  │  └─ dataProduct.json
│  │  │  │  └─ productManager
│  │  │  │     └─ index.js
│  │  │  └─ managerMongoDB
│  │  │     ├─ cartManagerDB
│  │  │     │  └─ index.js
│  │  │     └─ productManager
│  │  │        └─ index.js
│  │  ├─ imgs
│  │  │  ├─ img-1.png
│  │  │  └─ img-2.png
│  │  ├─ middleware
│  │  │  ├─ auth
│  │  │  │  └─ index.js
│  │  │  ├─ checkExistingParameter
│  │  │  │  └─ index.js
│  │  │  └─ session
│  │  │     └─ index.js
│  │  ├─ models
│  │  │  ├─ carts.models.js
│  │  │  ├─ messages.models.js
│  │  │  ├─ product.models.js
│  │  │  └─ user.models.js
│  │  ├─ public
│  │  │  ├─ css
│  │  │  │  └─ index.css
│  │  │  └─ js
│  │  │     ├─ chat
│  │  │     │  └─ index.js
│  │  │     ├─ chatId
│  │  │     │  └─ index.js
│  │  │     ├─ home
│  │  │     │  └─ index.js
│  │  │     ├─ product
│  │  │     │  └─ index.js
│  │  │     ├─ products
│  │  │     │  └─ index.js
│  │  │     └─ realTime
│  │  │        └─ index.js
│  │  ├─ routes
│  │  │  ├─ carts
│  │  │  │  └─ index.js
│  │  │  ├─ chat
│  │  │  │  └─ index.js
│  │  │  ├─ products
│  │  │  │  └─ index.js
│  │  │  ├─ session
│  │  │  │  └─ index.js
│  │  │  └─ views
│  │  │     └─ index.js
│  │  ├─ utils
│  │  │  ├─ validationHash
│  │  │  │  └─ index.js
│  │  │  ├─ validationProps
│  │  │  │  └─ index.js
│  │  │  └─ validationTypes
│  │  │     └─ index.js
│  │  ├─ utils.js
│  │  └─ views
│  │     ├─ chat.handlebars
│  │     ├─ chatId.handlebars
│  │     ├─ home.handlebars
│  │     ├─ layouts
│  │     │  └─ main.handlebars
│  │     ├─ login.handlebars
│  │     ├─ product.handlebars
│  │     ├─ products.handlebars
│  │     ├─ realTimeProducts.handlebars
│  │     └─ register.handlebars
´´´´
# Challenge-dev-backend - 7
- Inicio de sesion con GITHUB.

![img](/challenge-eight/src/imgs/img-1.png)

![img](/challenge-eight/src/imgs/img-2.png)

# Challenge-dev-backend - 6
- Crear un login.

![img](/challenge-seven/src/imgs/img-1.png)

![img](/challenge-seven/src/imgs/img-2.png)

![img](/challenge-seven/src/imgs/img-3.png)

# Challenge-dev-backend - 5
- Creacion de chat y adaptar todo a base de datos Mongo DB

![img](/challenge-six/src/imgs/chat-1.png)

![img](/challenge-six/src/imgs/chat-2.png)

![img](/challenge-six/src/imgs/chat-3.png)

# Challenge-dev-backend - 4
- Creacion de servicio websocket

![img](/challenge-five/src/imgs/img-2.png)

![img](/challenge-five/src/imgs/img-2r.png)

# Challenge-dev-backend - 3
- Creacion de enpoints 'GET'

### Manejo de errores:

![img](/challenge-first/src/imgs/img-4.png)

![img](/challenge-first/src/imgs/img-8.png)

![img](/challenge-first/src/imgs/img-10.png)

### Respuestas métodos GET:

![img](/challenge-first/src/imgs/img-1.png)

![img](/challenge-first/src/imgs/img-3.png)

![img](/challenge-first/src/imgs/img-9.png)

# Challenge-dev-backend - 2
- Agregando fileSystem para preservar nuestra data

![img](/challenge-first/src/imgs/img-5.png)

![img](/challenge-first/src/imgs/img-2.png)

# Challenge-dev-backend - 1

### getAllProducts:

![img](/challenge-first/src/imgs/img-6.png)

### getProductById:

![img](/challenge-first/src/imgs/img-7.png)