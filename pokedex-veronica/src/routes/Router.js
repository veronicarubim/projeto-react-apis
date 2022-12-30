import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PokedexPage from '../Pages/PokedexPage/PokedexPage'
import PokemonDetailPage from '../Pages/PokemonDetailPage/PokemonDetailPage'
import PokemonListPage from '../Pages/PokemonList/PokemonListPage'


const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={ <PokemonListPage/>} />
            <Route path="/pokedex" element={ <PokedexPage/>}/>
            <Route path="/detalhes" element={<PokemonDetailPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router