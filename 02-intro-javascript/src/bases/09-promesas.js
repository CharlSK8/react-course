import { getHeroById } from './08-import';


/**
 * Busca un héroe por su ID de forma asíncrona.
 * 
 * @param {number} id - El identificador del héroe a buscar.
 * @returns {Promise<Object>} - Una promesa que se resuelve con el objeto del héroe si se encuentra,
 *                              o se rechaza con un mensaje de error si no existe en la base de datos.
 * 
 * @example
 * getHeroByIdAsync(1)
 *   .then(hero => console.log(hero))
 *   .catch(error => console.error(error));
 */
const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const heroe = getHeroById(id);
            if(heroe){
                resolve(heroe);
            }else{
                reject('El heroe no se encuentra en la base de datos')
            }
        }, 2000)
    })
}

getHeroByIdAsync(2)
    .then(console.log)
    .catch(console.warn);