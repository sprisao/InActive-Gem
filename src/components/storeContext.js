import React, { useState, useContext, useEffect } from 'react';
import Airtable from 'airtable';

const base = new Airtable({ apiKey: 'key5AMdi7ejadTzUy' }).base(
  'appDzyBPyX5MjMkrU'
);
const StoreContext = React.createContext();

const StoreProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [stores, setStores] = useState([]);

  useEffect(() => {
    base('stores')
      .select({ view: 'Grid view' })
      .eachPage((records, fetchNextPage) => {
        console.log(records);
        setStores(records);
        fetchNextPage();
      });
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
