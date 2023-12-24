import { useState, useEffect } from 'react';
import { logError } from '@utils';

export const useFetch = (url, options = {}) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    const fetchData = async () => {
      try {
        const res = await fetch(url, { ...options, signal });
        const json = await res.json();
        setResponse(json);
      } catch (error) {
        logError(error);
        if (!signal?.aborted) {
          setError(error);
        }
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, []);

  return { response, error };
};
