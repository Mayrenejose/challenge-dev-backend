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
            const jwtToken = data.token;

            const productsResponse = await fetch('/products', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + jwtToken,
                },
            })

            const productsData = await productsResponse.json()
            window.location.href = '/products'
            console.log(productsData, 'respuesta con token')
        }
    } catch (error) {
        logger.erro(error)
    }
})