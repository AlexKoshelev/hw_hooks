import { useEffect, useState } from "react";
/* js doc */
/**
 *
 * @param {string} storageKey
 * @returns
 */
export function useLocalStorage(storageKey, initialValue = undefined) {
  const [storageValue, setStorageValue] = useState(initialValue);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(storageValue));
  }, [storageValue, storageKey]);

  function setItem(newValue) {
    setStorageValue(newValue);
  }

  function removeItem() {
    localStorage.removeItem(storageKey);
    setStorageValue(undefined);
  }

  return [storageValue, { setItem, removeItem }];
}
