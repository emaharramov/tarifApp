import axios from 'axios';
import {useEffect, useState} from 'react';

function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      await axios.get(url).then(response => {
        const goal = response.data;
        setData(goal);
        setLoading(false);
      });
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return {error, loading, data};
}

export default useFetch;
