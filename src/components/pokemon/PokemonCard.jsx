import React from 'react'

export const PokemonCard = ({ id }) => {
  return (
    <div  className="pokemon-card">
      <div className="card-image-placeholder">IMG</div>
      <div className="card-info">
        <span className="id-number">Nº {id}00</span>
        <h3>Pokemon Name</h3>
        <span className="type-badge">Grass</span>
      </div>
    </div>
  )
}
