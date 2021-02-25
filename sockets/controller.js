

const socketController = ( socket ) => {
    console.log('Cliente conectado:', socket.id);

    socket.on('disconnect', () => {
        console.log('Cliente Desconectado')
    });

    socket.on('enviar-mensaje' , ( payload, callback  ) => {
        const id = 123456;
        callback( id );
        // callback( { id, fecha: new Date().getTime() });
        // console.log(payload);
        // Envia 1 y todos recien el mensaje menos el que envia
        // broadcast
        socket.broadcast.emit('enviar-mensaje', payload )
    })
}

module.exports = {
    socketController
}