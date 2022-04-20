import { useEffect, useState } from "react";

const useLocalStorage = (key: string, initialValue: any) => {
  const [storage, setStorage] = useState(initialValue);

  useEffect(() => {
    const initial = window.localStorage.getItem(key);
    const value = initial && JSON.parse(initial);
    if (value) setStorage(value);
  }, [key]);

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storage));
    } catch (error) {}
  }, [storage, key]);

  return [storage, setStorage];
};
export default useLocalStorage;
