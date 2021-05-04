import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useCallback } from 'react';

const StoreContext = React.createContext();

const StoreProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [stores, setStores] = useState([]);

  const fetchContents = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get('/api/store-api');

      console.log(data);

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
