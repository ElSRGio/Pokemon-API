import React from 'react'

export const PokemonDetails = () => {
  return (
    <div className="detail-card">
      <div className="detail-image-large">Imagen</div>

      <h2 className="detail-name">Empoleon</h2>
      <div className="detail-types">
        <span>Water</span>
        <span>Steel</span>
      </div>

      <p className="detail-description">
        It swims as fast as a jet boat. The edges of its wings are sharp and can slice apart drifting ice.
      </p>

      <div className="stats-row">
        <div className="stat-box">Height: 1.7m</div>
        <div className="stat-box">Weight: 84.5kg</div>
      </div>

      <div className="base-stats">
        <div className="stat-circle">HP</div>
        <div className="stat-circle blue">ATK</div>
        <div className="stat-circle">DEF</div>
        <div className="stat-circle blue">SPD</div>
      </div>
    </div>
  )
}
