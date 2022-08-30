import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import DataFetchingLauout from "../components";

import { pokemonsSelector } from "../selectors";

import { loadPokemons } from "../reducers";

const DataFetchingContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPokemons());
  }, [dispatch]);

  const pokemons = useSelector(pokemonsSelector);

  console.log(pokemons);

  return (
    <DataFetchingLauout
      data={pokemons.data.results}
      isLoading={pokemons.isLoading}
      error={pokemons.error}
    />
  );
};

export default DataFetchingContainer;
