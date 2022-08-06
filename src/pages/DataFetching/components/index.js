import Spinner from "../../../components/Spinner";
import PokemonCard from "../../../components/pomemonCard";

import styles from "./index.module.scss";

const DataFetchingLauout = ({ data, isLoading, error }) => {
  console.log(data);
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Pokemons GO</h1>

      <div className={styles.pokemosContainer}>
        {isLoading ? (
          <Spinner />
        ) : (
          data.map(({ id, name, image, experience }) => (
            <PokemonCard
              key={id}
              name={name}
              image={image}
              experience={experience}
            />
          ))
        )}
        {error && <div style={{ color: "red" }}>{error}</div>}
      </div>
    </div>
  );
};

export default DataFetchingLauout;
