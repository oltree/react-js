import Spinner from "../../../../components/Spinner";
import PokemonCard from "../PomemonCard";

import styles from "./index.module.scss";

const PokemonsLayout = ({ pokemons, isLoading, error, handleClick }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Pokemons GO</h1>

      <div className={styles.pokemosContainer}>
        {isLoading ? (
          <Spinner />
        ) : (
          pokemons?.map(({ id, name, image, price }) => (
            <PokemonCard
              className={styles.pokemon}
              key={id}
              name={name}
              image={image}
              price={price}
              handleClick={() => handleClick(id)}
            />
          ))
        )}
        {error && <div style={{ color: "red" }}>{error}</div>}
      </div>
    </div>
  );
};

export default PokemonsLayout;
