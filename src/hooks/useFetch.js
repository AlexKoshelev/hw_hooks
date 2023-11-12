import { useEffect, useState } from "react";

export function useFetch(URL) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [repeat, setRepeat] = useState(0);
  useEffect(() => {
    fetch(URL, { method: "GET" })
      .then((response) => {
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => setError(error));
  }, [repeat]);
  function refetch(setings) {
    const limit = setings.params._limit;
    if (limit) {
      if (limit > repeat) {
        setIsLoading(true);
        setData([]);
        setRepeat((prevState) => (prevState = prevState + 1));
      }
    }
  }
  return { data, error, isLoading, refetch };
}
