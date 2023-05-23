import { useState, useEffect } from "react";

const useFetchData = (endPoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}${endPoint}`);
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [BASE_URL, endPoint]);

  return { data, isLoading, error };
};

export default useFetchData;
