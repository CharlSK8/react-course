//Desestructuracion de arreglos
const personajes = ['Carlos', 'Andres', 'Robert']
const [p1,p2,p3] = personajes;

console.log(p1)

const useState = (value) => {
    return [value, () => console.log(`Hola ${value}`)];
}

const [nombre, setNombre] = useState('Tony Stark');
console.log(nombre);
setNombre();