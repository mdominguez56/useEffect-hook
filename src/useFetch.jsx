import { useState, useEffect, useRef, useLayoutEffect } from "react";

// We use the hooks useRef and useLayoutEffect to save compare the values inside the dependency array and not the references

const useCallbackRef = (callback) => {
  const callbackRef = useRef(callback);
  useLayoutEffect(() => {
    callbackRef.current = callback;
  }, [callback]);
  return callbackRef;
};

export const useFetch = (options) => {
  const [data, setData] = useState(null);

  const savedOnSuccess = useCallbackRef(options.onSuccess);

  useEffect(() => {
    if (options.url) {
      let isCancelled = false;
      fetch(options.url)
        .then((response) => response.json())
        .then((json) => {
          if (!isCancelled) {
            savedOnSuccess.current?.(json);
            setData(json);
          }
        });
      // We use this return inside the useEffect to cancel the fetch request
      return () => {     
        isCancelled = true;
      };
    }
  }, [options.url]);

  return {
    data,
  };
};