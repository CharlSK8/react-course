//Destrucción de objetos
const personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War'
}

//Esto es destructuración de objetos en JS, sive para extraer propiedades de un objeto
const {nombre, direccion: {ubicacion}} = personaje;
console.log(nombre, ubicacion);

//La destructuración de objetos se hace con llaves {} y se puede asignar un valor por defecto
//Se puede destructurar un objeto dentro de otro objeto
const  retornaPersonaje = ({nombre, codeName, vivo, edad = 0, trajes, direccion:{zip, ubicacion}}) => {
    const [, , t3] = trajes;
    console.log(nombre, codeName, vivo, edad, t3, zip, ubicacion);
}

retornaPersonaje(personaje);