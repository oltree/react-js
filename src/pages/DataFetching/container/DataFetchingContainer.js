import DataFetchingLauout from "../components";

import { getPokemons } from "../api";

import { useFetching } from "../../../hooks/useFetching";

const DataFetchingContainer = () => {
  const { data, isLoading, error } = useFetching(getPokemons, []);

  return <DataFetchingLauout data={data} isLoading={isLoading} error={error} />;
};

export default DataFetchingContainer;

/* //Method with promises
useEffect(() => {
    setLoading(true);
    delay(3000).then(() => {
      fetch(`${POKEMONS_URL}/pokemon`)
        .then((response) => response.json())
        .then((data) => {
          setPokemons(data.results);
        })
        .catch((error) => {
          setError(error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    });
  }, []); */

/* //Method async-await with message WARNING
useEffect(async () => {
    try {
      setLoading(true);

      await delay(3000);

      const data = await fetch(`${POKEMONS_URL}/pokemon`).then((response) =>
        response.json()
      );

      setPokemons(data.results);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <DataFetchingLauout
      pokemons={pokemons}
      isLoading={isLoading}
      error={error}
    />
  );
}; */

/* //Method async-await - good method, but no hooks
	const [pokemons, setPokemons] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        await delay(3000);

        const data = await fetch(`${POKEMONS_URL}/pokemon`).then((response) =>
          response.json()
        );

        setPokemons(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []); */
