import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import DataFetchingLauout from "../components";

import { pokemonsSelector } from "../selectors";

import { loadPokemons } from "../reducers";

const DataFetchingContainer = () => {
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
    <DataFetchingLauout
      data={pokemons.data}
      isLoading={pokemons.isLoading}
      error={pokemons.error}
      handleClick={handleNavigateToPokemonsDetail}
    />
  );
};

export default DataFetchingContainer;
