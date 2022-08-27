import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";

import ReduxCountersLayout from "../components/ReduxCountersLayout";

import {
  createCounter,
  removeAllCounters,
  incrementCounter,
  decrementCounter,
  resetCounter,
  deleteCounter,
} from "../reducers";

import { countersSelector } from "../selectors";

const ReduxCountersContainer = () => {
  const dispatch = useDispatch();

  const counters = useSelector(countersSelector); //state - all store

  const handleCounterCreate = () => {
    dispatch(createCounter());
  };

  const handleRemoveAllCounters = () => {
    dispatch(removeAllCounters());
  };

  const handleIncrement = useCallback(
    (id) => {
      dispatch(incrementCounter(id));
    },
    [dispatch]
  );

  const handleDecrement = useCallback(
    (id) => {
      dispatch(decrementCounter(id));
    },
    [dispatch]
  );

  const handleReset = useCallback(
    (id) => {
      dispatch(resetCounter(id));
    },
    [dispatch]
  );

  const handleDelete = useCallback(
    (id) => {
      dispatch(deleteCounter(id));
    },
    [dispatch]
  );

  const handleSumValuesCounters = counters.reduce(
    (accumulator, { countValue }) => accumulator + countValue,
    0
  );

  return (
    <ReduxCountersLayout
      counters={counters}
      onCounterCreate={handleCounterCreate}
      onRemoveAllCounters={handleRemoveAllCounters}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onReset={handleReset}
      onDelete={handleDelete}
      onSumValuesCounters={handleSumValuesCounters}
    />
  );
};

export default ReduxCountersContainer;
