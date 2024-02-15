import React, { useState, useCallback, useEffect } from 'react';
import InfiniteScroll from './infiniteScroll';

function App() {
  const [query, setQuery] = useState('');

  const handleInput = useCallback((e) => {
    console.log('handleInput function recreated!');
    setQuery(e.target.value);
  }, []);

  const fetch = useCallback(() => {
    console.log('this is fetch function');
  }, []); // Empty dependency array ensures the function is created only once

  useEffect(() => {
    console.log('Component rerendered!');
  });

  //? by doing this 'fetch' is created only at once
  useEffect(() => {
    fetch(); // Call fetch function here if you want it to be executed after every render    
  }, [fetch]); // Add fetch as a dependency to ensure it's called after it's defined

  return (
    <>
      <input type="text" value={query} onChange={handleInput} />

      <InfiniteScroll/>
    </>
  );
}

export default App;
