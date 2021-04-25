import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

import { category } from '../datafiles/categories';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('a');
  const [categories, setCategories] = useState([]);
  const [stores, setStores] = useState([]);

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const { categoriesdata } = category;

      if (categoriesdata) {
        const newCategories = categoriesdata.map((item) => {
          const {
            id,
            ctgry,
            strIconSource,
            ctgryTitle,
            displayed,
            activated,
          } = item;
          return {
            id: id,
            category: ctgry,
            name: ctgryTitle,
            image: strIconSource,
            active: activated,
            display: displayed,
          };
        });
        setCategories(newCategories);
      } else {
        setCategories([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, [searchTerm]);

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
