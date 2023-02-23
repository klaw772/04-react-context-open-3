import React, { createContext, useState } from 'react';

export const MyContext = createContext();
function CountProvider({ children }) {
  const [count, setCount] = useState(0);
  return (

    // todo: does the default value attribute or the create context value take higher priority?
    <MyContext.Provider value={{count, setCount}}>
        {children}
    </MyContext.Provider>
  );
}

export { CountProvider };