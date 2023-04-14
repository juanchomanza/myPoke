import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Card = ({ url }) => {
    const [ pokemon, setPokemon ] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(url)
            .then(res => setPokemon(res.data))
    },[])
    
  return (
    <div onClick={() => navigate(`/pokedex/${pokemon.name}`)}>
        {pokemon.name} 
        <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
    </div>
  )
}
