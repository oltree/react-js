import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";

import ReduxCountersLayout from "../components/ReduxCountersLayout";

import {
  CREATE_COUNTER,
  REMOVE_ALL_COUNTERS,
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  RESET_COUNTER,
  DELETE_COUNTER,
} from "../actions";

import { countersSelector } from "../selectors";

const ReduxCountersContainer = () => {
  const dispatch = useDispatch();

  const counters = useSelector(countersSelector); //state - all store

  const handleCounterCreate = () => {
    dispatch(CREATE_COUNTER());
  };

  const handleRemoveAllCounters = () => {
    dispatch(REMOVE_ALL_COUNTERS());
  };

  const handleIncrement = useCallback(
    (id) => {
      dispatch(INCREMENT_COUNTER(id));
    },
    [dispatch]
  );

  const handleDecrement = useCallback(
    (id) => {
      dispatch(DECREMENT_COUNTER(id));
    },
    [dispatch]
  );

  const handleReset = useCallback(
    (id) => {
      dispatch(RESET_COUNTER(id));
    },
    [dispatch]
  );

  const handleDelete = useCallback(
    (id) => {
      dispatch(DELETE_COUNTER(id));
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
