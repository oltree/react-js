import { useCallback, useState } from "react";
import { v4 as uuid } from "uuid";
import cloneDeep from "lodash/cloneDeep";

import CountersManagerLayout from "../components/CountersManagerLayout";

const CountersManagerContainer = () => {
  const [counters, setCounters] = useState([]);

  const handleCreateCounter = () => {
    const newCounter = {
      id: uuid(),
      countValue: 0,
    };

    setCounters((state) => {
      const updatedCounters = state.map(({ id, countValue }) => {
        return {
          id,
          countValue: countValue % 2 === 0 ? countValue + 1 : countValue,
        };
      });
      return [...updatedCounters, newCounter];
    });
  };

  const handleResetCounters = useCallback(() => {
    setCounters([]);
  }, []); //НУЖЕН ЛИ useCallback?????

  const handleIncrement = useCallback((id) => {
    setCounters((state) => {
      const countersCopy = cloneDeep(state);

      const updateValueCounter = countersCopy.find(
        (counter) => counter.id === id
      );

      updateValueCounter.countValue += 1;

      return countersCopy;
    });
  }, []);

  const handleDecrement = useCallback((id) => {
    setCounters((state) => {
      const countersCopy = cloneDeep(state);

      const updateValueCounter = countersCopy.find(
        (counter) => counter.id === id
      );

      if (updateValueCounter.countValue > 0) updateValueCounter.countValue -= 1;
      //не return, т.к. нужно не вернуть значение, а изменить(мутировать)

      return countersCopy;
    });
  }, []);

  const handleReset = useCallback((id) => {
    setCounters((state) => {
      const countersCopy = cloneDeep(state);

      const updateValueCounter = countersCopy.find(
        (counter) => counter.id === id
      );

      updateValueCounter.countValue = 0;

      return countersCopy;
    });
  }, []);

  const handleDelete = useCallback((id) => {
    setCounters((state) => {
      const countersCopy = cloneDeep(state);

      const counterIndexToRemove = countersCopy.findIndex(
        (counter) => counter.id === id
      );

      countersCopy.splice(counterIndexToRemove, 1);

      return countersCopy.map(({ id, countValue }) => {
        return {
          id,
          countValue: countValue % 2 !== 0 ? countValue - 1 : countValue,
        };
      });
    });
  }, []);

  const handleSumValuesCounters = counters.reduce(
    (accumulator, { countValue }) => accumulator + countValue,
    0
  );

  return (
    <CountersManagerLayout
      counters={counters}
      onCreateCounter={handleCreateCounter}
      onResetCounters={handleResetCounters}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onReset={handleReset}
      onDelete={handleDelete}
      onSumValuesCounters={handleSumValuesCounters}
    />
  );
};

export default CountersManagerContainer;
