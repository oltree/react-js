import Spinner from "../../../../components/Spinner";
import PokemonCard from "../../../../components/PomemonCard";

import styles from "./index.module.scss";

const PokemonsLayout = ({ data, isLoading, error, handleClick }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Pokemons GO</h1>

      <div className={styles.pokemosContainer}>
        {isLoading ? (
          <Spinner />
        ) : (
          data?.map(({ id, name, image, experience }) => (
            <PokemonCard
              className={styles.pokemon}
              key={id}
              name={name}
              image={image}
              experience={experience}
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
