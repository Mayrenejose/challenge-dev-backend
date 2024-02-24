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

document.getElementById('recoverKey').addEventListener('click', async function(event) {
    const email = prompt('Ingresa tu correo electrónico para recuperar tu clave:')
    
    if (email) {
        await fetch('http://localhost:8080/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
        .then(response => response.json())
        .then(data => {
            if(data.status != 200 ) return alert('Correo electronico no registrado')
            alert('Se ha enviado un correo electrónico de recuperación a: ' + email)
        })
        .catch(error => {
            console.log(error)
        })
    } else {
        alert('Debes ingresar un correo electrónico válido para recuperar tu clave.')
    }
})

