import { useEffect, useState } from "react";

const useLocalStorage = (key: string, initialValue: any) => {
  const stored = window.localStorage.getItem(key);
  const storedValue = stored && JSON.parse(stored);

  const [storage, setStorage] = useState(storedValue ?? initialValue);

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storage));
    } catch (error) {}
  }, [storage, key]);

  return [storage, setStorage];
};
export default useLocalStorage;
