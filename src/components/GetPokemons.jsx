import React, { useState } from 'react'
import { Card } from './Card'
import { ByType } from './ByType'
import axios from 'axios'
import { Pagination } from './Pagination'

export const GetPokemons = ({pokemons, setPokemons}) => {
  const [ page, setPage ] = useState(1)
  const perPage = 20
  const lastIndex = perPage * page
  
  
  
  const getByType = (url) => {
    setPage(1)
    axios.get(url)
    .then(resp => setPokemons(resp.data))
  }
  
  let shortRoutePokemons
  let shortRouteCount
  const route = () => {
    if(pokemons?.results){
      shortRoutePokemons = pokemons?.results
      shortRouteCount = pokemons?.count
    } else {
      shortRoutePokemons = pokemons.pokemon
      shortRouteCount = pokemons.pokemon?.length
    }
  }
  route()
  
  const pokemonsToShow = shortRoutePokemons?.slice(lastIndex - perPage, lastIndex);
  const totalPages = Math.ceil( shortRouteCount / perPage );
  const arrayIteration = []
  const iteration = () => {
    for(let i=1; i <= totalPages; i++) {
      arrayIteration.push(i)
    }
  }
  iteration()

  let acces
  const selectAcces = () => {
    if(totalPages > 10) {
      if(page > totalPages - 5) {
        acces = arrayIteration.slice(totalPages - 10, totalPages)
      } else if (page > 5) {
        acces = arrayIteration.slice(page - 5, page + 5)
      } else {
        acces = arrayIteration.slice (0, 10)
      }} else {
        acces = arrayIteration.slice(0, totalPages)
      }
    }
    selectAcces()
  

  return (
    <div>
      <ByType getByType={getByType} />
      {
        pokemonsToShow?.map((pokemon) => (
          <Card url={ pokemon.url ? pokemon.url : pokemon.pokemon.url } key={ pokemon.url ? pokemon.url : pokemon.pokemon.url }/>
        ))
      }
      {
        acces.map((num) => (
          <Pagination num={num} key={num} setPage={setPage} />
        ))
      }
    </div>
  )
}
