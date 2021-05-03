import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

const url = 'https://projectgem.netlify.app/.netlify/functions/store-api';
const StoreContext = React.createContext();

const StoreProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [stores, setStores] = useState([]);

  const fetchContents = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}`);
      const data = await response.json();

      setStores(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchContents();
  }, []);

  return (
    <StoreContext.Provider value={{ loading, stores }}>
      {children}
    </StoreContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(StoreContext);
};

export { StoreContext, StoreProvider };
