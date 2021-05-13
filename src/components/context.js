import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

const url = 'https://projectgem.netlify.app/.netlify/functions/category-api';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  const fetchContents = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}`);
      const data = await response.json();

      setCategories(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  console.log('navigation', loading);
  useEffect(() => {
    fetchContents();
  }, []);

  return (
    <AppContext.Provider value={{ loading, categories }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
