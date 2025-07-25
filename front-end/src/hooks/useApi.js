import { useState, useEffect, useCallback } from "react";

const useApi = (serviceFn, args = [], dependencies = []) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(() => {
    setLoading(true);
    setError(null);

    serviceFn(...args)
      .then((res) => setData(res.data))
      .catch((err) => {
        const message = err.response?.data?.message || err.message || 'Something went wrong';
        setError(message);
      })
      .finally(() => setLoading(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, loading, refetch: fetchData };
};

export default useApi;
