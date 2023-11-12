import { useEffect, useState } from "react";

export function useLocalStorage(value) {
  const [token, setToken] = useState(value);
  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(token));
  }, [token]);
  function setItem(newToken) {
    setToken(newToken);
  }
  function removeItem() {
    localStorage.removeItem("token");
    setToken("");
  }
  return [token, { setItem, removeItem }];
}
