import React, { useState, useContext, useEffect } from 'react';
import Airtable from 'airtable';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

require('dotenv').config();
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'gem-web-app.firebaseapp.com',
  projectId: 'gem-web-app',
  storageBucket: 'gem-web-app.appspot.com',
  messagingSenderId: '244888179912',
  appId: '1:244888179912:web:89f9c3d98c9accb0d701fd',
  measurementId: 'G-B6WV89H0L0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const storeBase = new Airtable({
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
}).base('app0tAUATUh8jBxX4');

const Context = React.createContext();

const StoreProvider = ({ children }) => {
  // 1. useState 활용해서 Loading 변수 생성
  const [loading, setLoading] = useState(true);
  const [restaurantLoading, setRestaurantLoading] = useState(true);
  const [cafesLoading, setCafesLoading] = useState(true);
  const [navigationLoading, setNavigationLoading] = useState(true);
  const [secondLoading, setSecondLoading] = useState(true);
  const [locationLoading, setLocationLoading] = useState(true);
  const [menuLoading, setMenuLoading] = useState(true);
  const [newStoresLoading, setNewStoresLoading] = useState(true);
  const [eventsLoading, setEventsLoading] = useState(true);
  const [promoLoading, setPromoLoading] = useState(true);

  // 2. '복수' useState 활용해서 새롭게 불러올 데이터 패키지 함수명 지정
  const [stores, setStores] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [cafes, setCafes] = useState([]);
  const [firstCategories, setFirstCategories] = useState([]);
  const [secondCategories, setSecondCategories] = useState([]);
  const [locationCategories, setlocationCategories] = useState([]);
  const [menu, setMenu] = useState([]);
  const [newStores, setNewStores] = useState([]);
  const [events, setEvents] = useState([]);
  const [promotions, setPromotions] = useState([]);
  // 3. '단수' 각각의 데이터패키지 내의 데이터가 들어올 Array 생성
  const store = [];
  const restaurant = [];
  const cafe = [];
  const event = [];
  const promotion = [];
  const menuItem = [];
  const firstCategory = [];
  const secondCategory = [];
  const locationCategory = [];
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
        pageSize: 100,
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

  // 이벤트 불러오기
  useEffect(() => {
    storeBase('events')
      .select({
        view: 'online',
        pageSize: 100,
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            event.push({
              id: record.id,
              ...record._rawJson.fields,
            });
          });
          fetchNextPage();
          setEvents(event);
        },
        function done(err) {
          if (err) {
            console.error(err);
          } else {
            console.log('이벤트 불러오기 성공');
            setEventsLoading(false);
          }
        }
      );
  }, []);

  // 프로모션 불러오기
  useEffect(() => {
    storeBase('promotions')
      .select({
        view: 'online',
        pageSize: 10,
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            promotion.push({
              id: record.id,
              ...record._rawJson.fields,
            });
          });
          fetchNextPage();
          setPromotions(promotion);
        },
        function done(err) {
          if (err) {
            console.error(err);
          } else {
            console.log('프로모션 불러오기 성공');
            setPromoLoading(false);
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
        newStoresLoading,
        eventsLoading,
        promoLoading,

        stores,
        restaurants,
        cafes,
        menu,
        events,
        firstCategories,
        secondCategories,
        locationCategories,
        newStores,
        promotions,
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
