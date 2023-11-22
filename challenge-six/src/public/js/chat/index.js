const socket = io()
const mainViewChat = document.querySelector('#mainChat')

socket.on('chat_ecommerce', (user) => {
    console.log(user,'hols')
})