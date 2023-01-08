import React from 'react'
import { getHeroesByPublisher } from '../helpers'
import { HeroCard } from './HeroCard'

export const HeroeList = ({ publisher }) => {
    
    const heroes = getHeroesByPublisher(publisher)

    return (
        <div className="row row-cols-1 row-cols-md-3 g-3">
            {
                heroes.map((item) => (
                    <HeroCard 
                        key={item.id}
                        {...item}
                    />
                ))
            }
        </div>
    )
}
