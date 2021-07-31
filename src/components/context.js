import React, { useState, useContext, useEffect } from 'react';
import Airtable from 'airtable';

require('dotenv').config();
const storeBase = new Airtable({
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
}).base('app0tAUATUh8jBxX4');

const Context = React.createContext();

const StoreProvider = ({ children }) => {
  // 1. useState 활용해서 Loading 변수 생성
  const [loading, setLoading] = useState(true);
  const [restaurantLoading, setRestaurantLoading] = useState(true);
  const [cafesLoading, setCafesLoading] = useState(true);
  const [mainLoading, setMainLoading] = useState(true);
  const [navigationLoading, setNavigationLoading] = useState(true);
  const [secondLoading, setSecondLoading] = useState(true);
  const [locationLoading, setLocationLoading] = useState(true);
  const [menuLoading, setMenuLoading] = useState(true);
  const [newStoresLoading, setNewStoresLoading] = useState(true);

  const [stores, setStores] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [cafes, setCafes] = useState([]);
  // const [pups, setPups] = useState([]);
  // const [fitnesses, setFitnesses] = useState([]);
  // const [beutyStores, setBeutyStores] = useState([]);
  // const [studios, setStudios] = useState([]);
  // const [entertainments, setEntertainments] = useState([]);

  // 2. '복수' useState 활용해서 새롭게 불러올 데이터 패키지 함수명 지정
  const [firstCategories, setFirstCategories] = useState([]);
  const [secondCategories, setSecondCategories] = useState([]);
  const [locationCategories, setlocationCategories] = useState([]);
  const [menu, setMenu] = useState([]);
  const [lunchRCCMD, setLunchRCCMD] = useState([]);
  const [cafeRCCMD, setCafeRCCMD] = useState([]);
  const [newStores, setNewStores] = useState([]);

  // 3. '단수' 각각의 데이터패키지 내의 데이터가 들어올 Array 생성
  const store = [];
  const restaurant = [];
  const cafe = [];
  // const pub = [];
  // const fitness = [];
  // const beutyStore = [];
  // const studio = [];
  // const entertainment = [];
  const menuItem = [];
  const firstCategory = [];
  const secondCategory = [];
  const locationCategory = [];
  const lunchRCCMDstore = [];
  const cafeRCCMDstore = [];
  const newStore = [];

  // 업체데이터 불러오기
  useEffect(() => {
    storeBase('stores')
      .select({
        view: 'otherStores',
        pageSize: 100,
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
        },
        function done(err) {
          if (err) {
            console.error(err);
          } else {
            console.log('다른 업체들 불러오기 성공');
            setLoading(false);
          }
        }
      );
  }, []);

  // 맛집 불러오기
  useEffect(() => {
    storeBase('stores')
      .select({
        view: 'restaurants',
        pageSize: 100,
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            restaurant.push({
              id: record.id,
              ...record._rawJson.fields,
            });
          });
          fetchNextPage();
          setRestaurants(restaurant);
        },
        function done(err) {
          if (err) {
            console.error(err);
          } else {
            console.log('업체데이터 불러오기 성공');
            setRestaurantLoading(false);
          }
        }
      );
  }, []);

  // 카페 불러오기
  useEffect(() => {
    storeBase('stores')
      .select({
        view: 'cafes',
        pageSize: 50,
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            cafe.push({
              id: record.id,
              ...record._rawJson.fields,
            });
          });
          fetchNextPage();
          setCafes(cafe);
        },
        function done(err) {
          if (err) {
            console.error(err);
          } else {
            console.log('카페 불러오기 성공');
            setCafesLoading(false);
          }
        }
      );
  }, []);

  // 카테고리 데이터 불러오기
  useEffect(() => {
    storeBase('firstCategoryData')
      .select({
        view: 'Grid view',
        pageSize: 100,
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
        },
        function done(err) {
          if (err) {
            console.error(err);
          } else {
            console.log('카테고리 데이터 불러오기 성공');
            setNavigationLoading(false);
          }
        }
      );
  }, []);

  // 세컨드카테고리 데이터 불러오기
  useEffect(() => {
    storeBase('secondCategoryData')
      .select({
        view: 'Grid view',
        pageSize: 50,
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
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
          } else {
            console.log('세컨드 카테고리 데이터 불러오기 성공');
            setSecondLoading(false);
          }
        }
      );
  }, []);

  useEffect(() => {
    storeBase('locationCategoryData')
      .select({
        view: 'dropdown',
        pageSize: 20,
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
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
          } else {
            console.log('로케이션 카테고리 데이터 불러오기 성공');
            setLocationLoading(false);
          }
        }
      );
  }, []);

  // 메뉴 데이터 로딩

  useEffect(() => {
    storeBase('menu')
      .select({
        view: 'Grid view',
        pageSize: 20,
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            menuItem.push({
              id: record.id,
              ...record._rawJson.fields,
            });
          });
          fetchNextPage();
          setMenu(menuItem);
        },
        function done(err) {
          if (err) {
            console.error(err);
          } else {
            console.log('로케이션 카테고리 데이터 불러오기 성공');
            setMenuLoading(false);
          }
        }
      );
  }, []);

  useEffect(() => {
    storeBase('stores')
      .select({
        maxRecords: 30,
        pageSize: 30,
        view: 'LunchRCCMD',
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            lunchRCCMDstore.push({
              id: record.id,
              ...record._rawJson.fields,
            });
          });
          setLunchRCCMD(lunchRCCMDstore);
          setMainLoading(false);
          fetchNextPage();
        },
        function done(err) {
          console.log('점심 추천 업체 데이터 로딩 완료');
          if (err) {
            console.error(err);
            return;
          }
        }
      );
  }, []);

  useEffect(() => {
    storeBase('stores')
      .select({
        maxRecords: 30,
        pageSize: 30,
        view: 'CafeRCCMD',
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            cafeRCCMDstore.push({
              id: record.id,
              ...record._rawJson.fields,
            });
          });
          setCafeRCCMD(cafeRCCMDstore);
          setMainLoading(false);
          fetchNextPage();
        },
        function done(err) {
          console.log('메인 데이터 로딩 완료');
          if (err) {
            console.error(err);
            return;
          }
        }
      );
  }, []);

  useEffect(() => {
    storeBase('stores')
      .select({
        maxRecords: 15,
        pageSize: 30,
        view: 'new',
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            newStore.push({
              id: record.id,
              ...record._rawJson.fields,
            });
          });
          setNewStores(newStore);
          fetchNextPage();
        },
        function done(err) {
          console.log('새로생긴 곳 데이터 로딩 완료');
          setNewStoresLoading(false);
          if (err) {
            console.error(err);
            return;
          }
        }
      );
  }, []);

  return (
    <Context.Provider
      value={{
        loading,
        restaurantLoading,
        cafesLoading,
        navigationLoading,
        secondLoading,
        locationLoading,
        menuLoading,
        mainLoading,
        newStoresLoading,

        stores,
        restaurants,
        cafes,
        menu,
        firstCategories,
        secondCategories,
        locationCategories,
        lunchRCCMD,
        cafeRCCMD,
        newStores,
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
