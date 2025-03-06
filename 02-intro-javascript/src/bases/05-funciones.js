//Las funciones en JS son objetos de primera clase

const saludar = function(nombre) {
    return `Hola, ${nombre}`;
}

const getUser = () => ({
    uid: 'ABC123',
    username: 'El_Papi1502'
});

const geUsuarioActivo = (nombre) => ({
    uid: 'ABC567',
    username: nombre
});

console.log(getUsuarioActivo('Fernando')); 