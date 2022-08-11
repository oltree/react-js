//All version

import { useCallback, useEffect, useState } from "react";

import { delay } from "../utils/slowFetch";

export const useFetching = (
  asyncCallback,
  initialValue,
  isLoadOnMount = true
) => {
  const [data, setData] = useState(initialValue);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDataLoad = useCallback(async () => {
    setLoading(true);
    try {
      await delay(3000);

      const response = await asyncCallback();

      setData(response);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [asyncCallback]);

  useEffect(() => {
    handleDataLoad();
  }, [isLoadOnMount, handleDataLoad]);

  return { data, isLoading, error, handleDataLoad };
};

/* //Did Mount version
import { useEffect, useState } from "react";

export const useFetching = (asyncCallback, initialValue) => {
  const [data, setData] = useState(initialValue);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await asyncCallback();

        setData(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { data, isLoading, error };
}; */
