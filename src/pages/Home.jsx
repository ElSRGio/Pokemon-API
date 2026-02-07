import React from 'react'
import { PokemonFilters } from '../components/pokemon/PokemonFilters'
import { PokemonGrid } from '../components/pokemon/PokemonGrid'
import { PokemonDetails } from '../components/pokemon/PokemonDetails'

export const Home = () => {
  return (
    <main className="main-layout">

      {/* --- COLUMNA IZQUIERDA --- */}
      <section className="left-panel">
        <PokemonFilters />
        <PokemonGrid />
        



      </section>

      {/* --- COLUMNA DERECHA --- */}
      <aside className="right-panel">
        <PokemonDetails />

      </aside>

    </main>
  )
}
