import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import PokemonsLayout from "../components/PokemonsLayout";

import { pokemonsSelector } from "../selectors";

import { loadPokemons } from "../reducers";

import { ROUTE_NAMES } from "../../../router/routeNames";

const PokemonsContainer = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const pokemons = useSelector(pokemonsSelector);

  useEffect(() => {
    dispatch(loadPokemons());
  }, [dispatch]);

  const handleNavigateToPokemonsDetail = (pokemonId) => {
    navigate(`${ROUTE_NAMES.POKEMONS}/${pokemonId}`);
  };

  return (
    <PokemonsLayout
      pokemons={pokemons.data}
      isLoading={pokemons.isLoading}
      error={pokemons.error}
      handleClick={handleNavigateToPokemonsDetail}
    />
  );
};

export default PokemonsContainer;
