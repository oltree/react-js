import { useSelector } from "react-redux";

import { countersSelector } from "../ReduxCounters/selectors";

const Home = () => {
  const counters = useSelector(countersSelector);
  return (
    <div>
      <h1>Home</h1>
      <h2>Counters Amount: {counters.length}</h2>
    </div>
  );
};

export default Home;
