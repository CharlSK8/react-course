const nombre = 'Carlos';
const apellido = 'Gonzalez';

function getSaludo(nombre, apellido) {
    return `Hola ${nombre} ${apellido}`;
}

console.log(`Este es un saludo de bienvenida: ${getSaludo(nombre, apellido)}`);