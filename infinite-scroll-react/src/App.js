import React, { useState, useCallback, useEffect } from 'react';

function App() {
  const [query, setQuery] = useState('');

  const handleInput = useCallback((e) => {
    setQuery(e.target.value);
  }, []);

  useEffect(() => {
    console.log('Component rerendered!');
  });

  return (
    <>
      <input type="text" value={query} onChange={handleInput} />
    </>
  );
}

export default App;
