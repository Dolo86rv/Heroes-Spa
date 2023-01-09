import { heroes } from "../data/heroes"

export const getHeroesByName = ( nombre = '' ) => {

    nombre = nombre.toLocaleLowerCase().trim()
    
    if( nombre === 0 ) return []

    return heroes.filter(
        hero=> hero.superhero.toLocaleLowerCase().includes(nombre)
    )

}