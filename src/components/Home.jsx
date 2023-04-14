import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUsername } from '../store/silces/userName.slice';

export const Home = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goPokedex = () => {
    dispatch(getUsername(name));
    navigate("/pokedex")
  }

  return (
    <div>
      <h1>Home</h1>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => goPokedex()}>Go</button>
    </div>
  )
}
