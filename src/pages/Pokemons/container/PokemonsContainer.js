import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import PokemonsLayout from "../components/PokemonsLayout";

import { pokemonsSelector } from "../selectors";

import { loadPokemons } from "../reducers";

const PokemonsContainer = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const pokemons = useSelector(pokemonsSelector);

  useEffect(() => {
    dispatch(loadPokemons());
  }, [dispatch]);

  const handleNavigateToPokemonsDetail = (pokemonId) => {
    navigate(`/pokemons/${pokemonId}`);
  };
  console.log(pokemons.data);

  return (
    <PokemonsLayout
      data={pokemons.data}
      isLoading={pokemons.isLoading}
      error={pokemons.error}
      handleClick={handleNavigateToPokemonsDetail}
    />
  );
};

export default PokemonsContainer;
