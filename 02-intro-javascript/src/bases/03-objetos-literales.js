//Los objetos literales son una forma de almacenar información en pares de valores
const Persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 55321321,
        lat: 14.3232,
        lng: 34.9233321
    }
}
//Los tres puntos (Operador spread) sirven para hacer una copia de un objeto y no modificar el original en JavaScript
const Persona2 = { ...Persona };
Persona2.nombre = 'Peter';
console.log(Persona);
console.log(Persona2);