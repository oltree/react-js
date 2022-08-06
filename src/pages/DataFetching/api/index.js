import { api } from "../../../api/config";

export const getPokemons = async () => {
  const { data } = await api.get("/pokemon");

  const pokemonDetailsRequest = data.results.map(({ url }) => {
    return api.get(url).then(({ data }) => data);
  });

  const detailedPokemonsList = await Promise.all(pokemonDetailsRequest);

  return detailedPokemonsList.map(({ id, name, sprites, base_experience }) => ({
    id,
    name,
    image: sprites.front_default,
    experience: base_experience,
  }));
};
