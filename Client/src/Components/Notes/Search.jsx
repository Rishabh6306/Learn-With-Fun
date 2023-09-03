// useDebounce.js

import { useEffect, useState } from 'react';

function Search(value , delay=1) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, delay]);


  return debouncedValue;
}

export default Search;