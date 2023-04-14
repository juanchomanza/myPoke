import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetPokemons } from './GetPokemons'

export const Pokedex = () => {
  const userName = useSelector((state) => state.userName);
  const navigate = useNavigate();
  const [pokemons, setPokemons] = useState([]);
  const [ search, setSearch ] = useState("");

  const getAllPokemons = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279`)
      .then((res) => setPokemons(res.data));
  };



  useEffect(() => {
    getAllPokemons();
  }, []);

  

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>mypoke</h1>
      {userName}
      <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
      <button onClick={() => navigate(`/pokedex/${search}`)}>Search</button>
      <GetPokemons pokemons={pokemons} setPokemons={setPokemons} search />
    </div>
  );
};
