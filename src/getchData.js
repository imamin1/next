import { useState, useEffect } from 'react';

export const useGetData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error('خطا در دریافت اطلاعات');
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError('خطا در دریافت اطلاعات');
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
};