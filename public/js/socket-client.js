// Referencias del HTML
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const textMensaje = document.querySelector('#textMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

const socket = io();

socket.on('connect', ()=>{
    console.log("Conectado");
    lblOffline.style.display = 'none';
    lblOnline.style.display = ' ';
});

socket.on('disconnect', ()=>{
    console.log("Desconectado del servidor");
    lblOffline.style.display = '';
    lblOnline.style.display = 'none';
});

socket.on('enviar-mensaje', ( payload ) =>{
    console.log( payload )
} )

btnEnviar.addEventListener('click', ()=> {
    const mensaje = textMensaje.value;
    const payload = {
        mensaje,
        id: '1233',
        fecha: new Date().getTime()

    }


    socket.emit('enviar-mensaje', payload );

    // console.log ( mensaje );
})

