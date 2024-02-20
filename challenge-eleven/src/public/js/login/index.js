// document.getElementById('login-form').addEventListener('submit', async function(event) {
//     event.preventDefault()
//     const email = document.getElementById('emailRegister').value
//     const password = document.getElementById('passwordRegister').value

//     try {
//         const response = await fetch('/session/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ email, password }),
//         })

//         if (!response.ok) {
//             throw new Error('Credenciales incorrectas')
//         }

//         const data = await response.json();

//         if (data.token) {
//             const jwtToken = data.token;

//             const productsResponse = await fetch('/products', {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': 'Bearer ' + jwtToken,
//                 },
//             })

//             const productsData = await productsResponse.json()
//             window.location.href = '/products'
//             console.log(productsData, 'respuesta con token')
//         }
//     } catch (error) {
//         logger.erro(error)
//     }
// })
document.getElementById('login-form').addEventListener('submit', async function(event) {
    event.preventDefault()
    const email = document.getElementById('emailRegister').value
    const password = document.getElementById('passwordRegister').value

    try {
        const response = await fetch('/session/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
        
        if (!response.ok) {
            throw new Error('Credenciales incorrectas')
        }

        const data = await response.json();
        
        if (data.token) {
            const jwtToken = data.token
            localStorage.setItem('jwtToken', jwtToken)
            
            const productsResponse = await fetch('/products', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + jwtToken,
                },
            })
            
            if(productsResponse.status === 200) {
                window.location.href = '/products'
            } else {
                throw new Error('No autorizado para acceder a los productos')
            }
        }
    } catch (error) {
        logger.erro(error)
    }
})