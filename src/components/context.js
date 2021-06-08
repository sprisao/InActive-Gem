import React, { useState, useContext, useEffect } from 'react';
import Airtable from 'airtable';

const storeBase = new Airtable({ apiKey: 'key5AMdi7ejadTzUy' }).base(
  'appDzyBPyX5MjMkrU'
);

const Context = React.createContext();

const StoreProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [navigationLoading, setNavigationLoading] = useState(true);
  const [secondLoading, setSecondLoading] = useState(true);
  const [locationLoading, setLocationLoading] = useState(true);
  const [stores, setStores] = useState([]);
  const [firstCategories, setFirstCategories] = useState([]);
  const [secondCategories, setSecondCategories] = useState([]);
  const [locationCategories, setlocationCategories] = useState([]);

  const store = [];
  const firstCategory = [];
  const secondCategory = [];
  const locationCategory = [];

  // 업체데이터 불러오기
  useEffect(() => {
    storeBase('stores')
      .select({
        view: 'Grid view',
        pageSize: 30,
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            store.push({
              id: record.id,
              ...record._rawJson.fields,
            });
          });
          fetchNextPage();
          setStores(store);
          setLoading(false);
        },
        function done(err) {
          if (err) {
            console.error(err);
          } else {
            console.log('업체데이터 불러오기 성공');
          }
        }
      );
  }, []);

  // 카테고리 데이터 불러오기
  useEffect(() => {
    storeBase('firstCategoryData')
      .select({
        view: 'Grid view',
        pageSize: 50,
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            firstCategory.push({
              id: record.id,
              ...record._rawJson.fields,
            });
          });
          fetchNextPage();
          setFirstCategories(firstCategory);

          setNavigationLoading(false);
        },
        function done(err) {
          if (err) {
            console.error(err);
          } else {
            console.log('카테고리 데이터 불러오기 성공');
          }
        }
      );
  }, []);

  // 세컨드카테고리 데이터 불러오기
  useEffect(() => {
    storeBase('secondCategoryData')
      .select({
        view: 'Grid view',
        pageSize: 30,
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            secondCategory.push({
              id: record.id,
              ...record._rawJson.fields,
            });
          });
          setSecondCategories(secondCategory);
          setSecondLoading(false);
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
          } else {
            console.log('세컨드 카테고리 데이터 불러오기 성공');
          }
        }
      );
  }, []);

  useEffect(() => {
    storeBase('locationCategoryData')
      .select({
        view: 'Grid view',
        pageSize: 30,
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            locationCategory.push({
              id: record.id,
              ...record._rawJson.fields,
            });
          });
          setlocationCategories(locationCategory);
          setLocationLoading(false);
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
          } else {
            console.log('로케이션 카테고리 데이터 불러오기 성공');
          }
        }
      );
  }, []);

  return (
    <Context.Provider
      value={{
        loading,
        navigationLoading,
        stores,
        firstCategories,
        secondCategories,
        locationCategories,
        secondLoading,
        locationLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(Context);
};

export { Context, StoreProvider };
