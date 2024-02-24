document.getElementById('password-form').addEventListener('submit', async function(event) {
    event.preventDefault()
    const passwordOne = document.getElementById('newPassword').value
    const passwordTwo = document.getElementById('repetedPassword').value
    const emailId = document.getElementById('emailForChange')
    const email = emailId.textContent
    
    if (passwordOne != passwordTwo) return alert('Contraseñas deben coincidir')

    try {
        const response = await fetch('/session/changePassword', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, passwordTwo }),
        })

    } catch(error) {
        logger.erro(error)
    }
})