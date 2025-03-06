import  heroes  from '../data/heroes';

export const getHeroById = (id) => heroes.find((heroe => heroe.id == id));
export const getHeroByOwner = (owner) => heroes.filter((heroe => heroe.owner == owner));

// console.log(getHeroById(1));
// console.log(getHeroByOwner('Marvel'));