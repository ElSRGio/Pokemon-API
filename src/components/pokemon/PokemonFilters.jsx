import React from 'react'

export const PokemonFilters = () => {
  return (
    <>
        <div className="search-bar">
            <input type="text" placeholder="Search your Pokémon!" />
          </div>

          <div className="filters-bar">
            <div className="filter-item">Ascending</div>
            <div className="filter-item">From: 1 To: 50</div>
            <div className="filter-item">Type</div>
            <div className="filter-item">Weakness</div>
          </div>
    </>
  )
}
