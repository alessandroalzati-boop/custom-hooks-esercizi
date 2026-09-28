import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const responsive = await fetch(url);
        if (!responsive.ok) throw new Error("errore server");
        const data = await responsive.json();
        return setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);
  return { data, loading, error };
}
