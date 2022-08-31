const PokemonsDetailsLayout = ({ pokemonInfo }) => {
  return (
    <div>
      <h1>Hello, {pokemonInfo?.name}!</h1>
      <h2>Stats:</h2>
      <div>
        {pokemonInfo.stats.map((stat) => {
          return (
            <div
              key={stat.stat.url}
            >{`${stat.stat.name} - ${stat.base_stat}`}</div>
          );
        })}
      </div>
    </div>
  );
};

export default PokemonsDetailsLayout;
