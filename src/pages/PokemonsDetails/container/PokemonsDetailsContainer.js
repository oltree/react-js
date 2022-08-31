import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import PokemonsDetailsLayout from "../components/PokemonsDetailsLayout";

import { loadPokemonDetails } from "../reducers";

const PokemonsDetailsContainer = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { pokemonInfo } = useSelector((state) => state.pokemonsDetails);

  useEffect(() => {
    dispatch(loadPokemonDetails(id));
  }, [dispatch, id]);

  return <PokemonsDetailsLayout pokemonInfo={pokemonInfo} />;
};

export default PokemonsDetailsContainer;
