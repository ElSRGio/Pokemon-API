import React from 'react'
import { PokemonCard } from './PokemonCard'

export const PokemonGrid = () => {
    const dummyIds = [1, 2, 3, 4, 5, 6];
  return (
     <div className="pokemon-grid">
     {dummyIds.map((item)=>(
        <PokemonCard key={item} id={item}/> 
     ))}
    </div>
  )
}
    