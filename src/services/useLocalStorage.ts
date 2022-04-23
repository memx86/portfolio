import { useEffect, useState } from "react";

const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, React.Dispatch<T>] => {
  const stored = window.localStorage.getItem(key);
  const storedValue: T | null = stored && JSON.parse(stored);

  const [storage, setStorage]: [T, React.Dispatch<T>] = useState(
    storedValue ?? initialValue
  );

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storage));
    } catch (error) {}
  }, [storage, key]);

  return [storage, setStorage];
};
export default useLocalStorage;
