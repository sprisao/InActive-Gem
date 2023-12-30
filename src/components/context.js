import React, { useState, useContext, useEffect } from 'react';
import Airtable from 'airtable';

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBG5blnL2Sg_YMV71JAjzkUKm1a9T52Fz8',
  authDomain: 'gem-web-app.firebaseapp.com',
  databaseURL:
    'https://gem-web-app-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'gem-web-app',
  storageBucket: 'gem-web-app.appspot.com',
  messagingSenderId: '244888179912',
  appId: '1:244888179912:web:89f9c3d98c9accb0d701fd',
  measurementId: 'G-B6WV89H0L0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storeBase = new Airtable({
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
}).base('app0tAUATUh8jBxX4');

const Context = React.createContext();

const StoreProvider = ({ children }) => {
  const [restaurantLoading, setRestaurantLoading] = useState(true);
  const [cafesLoading, setCafesLoading] = useState(true);
  const [barsLoading, setBarsLoading] = useState(true);
  const [spotsLoading, setspotsLoading] = useState(true);
  const [beautyShopsLoading, setBeautyShopsLoading] = useState(true);
  const [studiosLoading, setStudiosLoading] = useState(true);
  const [petShopsLoading, setPetShopsLoading] = useState(true);
  const [gymsLoading, setGymsLoading] = useState(true);
  const [academiesLoading, setAcademiesLoading] = useState(true);
  const [pharmaciesLoading, setPharmaciesLoading] = useState(true);
  const [kidShopsLoading, setKidShopsLoading] = useState(true);
  const [flowerShopsLoading, setFlowerShopsLoading] = useState(true);

  const [navigationLoading, setNavigationLoading] = useState(true);
  const [secondLoading, setSecondLoading] = useState(true);
  const [locationLoading, setLocationLoading] = useState(true);
  const [menuLoading, setMenuLoading] = useState(true);
  const [newStoresLoading, setNewStoresLoading] = useState(true);
  const [eventsLoading, setEventsLoading] = useState(true);
  const [promoLoading, setPromoLoading] = useState(true);

  const [restaurants, setRestaurants] = useState([]);
  const [cafes, setCafes] = useState([]);
  const [bars, setBars] = useState([]);
  const [spots, setSpots] = useState([]);
  const [spotsCategories, setSpotsCategories] = useState([]);
  const [beautyShops, setBeautyShops] = useState([]);
  const [studios, setStudios] = useState([]);
  const [petShops, setPetShops] = useState([]);
  const [gyms, setGyms] = useState([]);
  const [academies, setAcademies] = useState([]);
  const [pharmacies, setPharmacies] = useState([]);
  const [kidShops, setKidShops] = useState([]);
  const [flowerShops, setFlowerShops] = useState([]);

  const [newStores, setNewStores] = useState([]);

  const [firstCategories, setFirstCategories] = useState([]);
  const [secondCategories, setSecondCategories] = useState([]);
  const [locationCategories, setlocationCategories] = useState([]);
  const [menu, setMenu] = useState([]);
  const [events, setEvents] = useState([]);
  const [promotions, setPromotions] = useState([]);

  const restaurant = [];
  const cafe = [];
  const bar = [];
  const spot = [];
  const spotsCategory = [];
  const beautyShop = [];
  const studio = [];
  const petShop = [];
  const gym = [];
  const academy = [];
  const pharmacy = [];
  const flowerShop = [];
  const kidShop = [];

  const event = [];
  const promotion = [];
  const menuItem = [];
  const firstCategory = [];
  const secondCategory = [];
  const locationCategory = [];
  const newStore = [];

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
            console.log('맛집 불러오기 성공');
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

  // 호프 주점 불러오기
  useEffect(() => {
    storeBase('stores')
      .select({
        view: 'bars',
        pageSize: 100,
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            bar.push({
              id: record.id,
              ...record._rawJson.fields,
            });
          });
          fetchNextPage();
          setBars(bar);
        },
        function done(err) {
          if (err) {
            console.error(err);
          } else {
            console.log('호프주점 불러오기 성공');
            setBarsLoading(false);
          }
        }
      );
  }, []);

  // 가볼만한 곳 불러오기
  useEffect(() => {
    storeBase('spots')
      .select({
        view: 'Grid view',
        pageSize: 100,
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            spot.push({
              id: record.id,
              ...record._rawJson.fields,
            });
          });
          fetchNextPage();
          setSpots(spot);
        },
        function done(err) {
          if (err) {
            console.error(err);
          } else {
            console.log('가볼만한 곳 불러오기 성공');
            setspotsLoading(false);
          }
        }
      );
  }, []);

  // 가볼만한 곳 카테고리 불러오기
  useEffect(() => {
    storeBase('spotsCategory')
      .select({
        view: 'Grid view',
        pageSize: 100,
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            spotsCategory.push({
              id: record.id,
              ...record._rawJson.fields,
            });
          });
          fetchNextPage();
          setSpotsCategories(spotsCategory);
        },
        function done(err) {
          if (err) {
            console.error(err);
          } else {
            console.log('가볼만한 곳 카테고리 불러오기');
            setspotsLoading(false);
          }
        }
      );
  }, []);

  // 뷰티 미용 불러오기
  useEffect(() => {
    storeBase('stores')
      .select({
        view: 'beautyShops',
        pageSize: 100,
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            beautyShop.push({
              id: record.id,
              ...record._rawJson.fields,
            });
          });
          fetchNextPage();
          setBeautyShops(beautyShop);
        },
        function done(err) {
          if (err) {
            console.error(err);
          } else {
            console.log('미용뷰티 불러오기 성공');
            setBeautyShopsLoading(false);
          }
        }
      );
  }, []);

  // 스튜디오 불러오기
  useEffect(() => {
    storeBase('stores')
      .select({
        view: 'studios',
        pageSize: 100,
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            studio.push({
              id: record.id,
              ...record._rawJson.fields,
            });
          });
          fetchNextPage();
          setStudios(studio);
        },
        function done(err) {
          if (err) {
            console.error(err);
          } else {
            console.log('스튜디오 불러오기 성공');
            setStudiosLoading(false);
          }
        }
      );
  }, []);

  // 반려동물 불러오기
  useEffect(() => {
    storeBase('stores')
      .select({
        view: 'petShops',
        pageSize: 100,
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            petShop.push({
              id: record.id,
              ...record._rawJson.fields,
            });
          });
          fetchNextPage();
          setPetShops(petShop);
        },
        function done(err) {
          if (err) {
            console.error(err);
          } else {
            console.log('반려동물 불러오기 성공');
            setPetShopsLoading(false);
          }
        }
      );
  }, []);

  // 운동헬스 불러오기
  useEffect(() => {
    storeBase('stores')
      .select({
        view: 'gyms',
        pageSize: 100,
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            gym.push({
              id: record.id,
              ...record._rawJson.fields,
            });
          });
          fetchNextPage();
          setGyms(gym);
        },
        function done(err) {
          if (err) {
            console.error(err);
          } else {
            console.log('운동헬스 불러오기 성공');
            setGymsLoading(false);
          }
        }
      );
  }, []);

  // 키즈 불러오기
  useEffect(() => {
    storeBase('stores')
      .select({
        view: 'kidShops',
        pageSize: 100,
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            kidShop.push({
              id: record.id,
              ...record._rawJson.fields,
            });
          });
          fetchNextPage();
          setKidShops(kidShop);
        },
        function done(err) {
          if (err) {
            console.error(err);
          } else {
            console.log('키즈 불러오기 성공');
            setKidShopsLoading(false);
          }
        }
      );
  }, []);

  // 교육학원 불러오기
  useEffect(() => {
    storeBase('stores')
      .select({
        view: 'academies',
        pageSize: 100,
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            academy.push({
              id: record.id,
              ...record._rawJson.fields,
            });
          });
          fetchNextPage();
          setAcademies(academy);
        },
        function done(err) {
          if (err) {
            console.error(err);
          } else {
            console.log('교육학원 불러오기 성공');
            setAcademiesLoading(false);
          }
        }
      );
  }, []);

  // 약국 불러오기
  useEffect(() => {
    storeBase('stores')
      .select({
        view: 'pharmacies',
        pageSize: 100,
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            pharmacy.push({
              id: record.id,
              ...record._rawJson.fields,
            });
          });
          fetchNextPage();
          setPharmacies(pharmacy);
        },
        function done(err) {
          if (err) {
            console.error(err);
          } else {
            console.log('약국 불러오기 성공');
            setPharmaciesLoading(false);
          }
        }
      );
  }, []);

  // 약국 불러오기
  useEffect(() => {
    storeBase('stores')
      .select({
        view: 'flowerShops',
        pageSize: 100,
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            flowerShop.push({
              id: record.id,
              ...record._rawJson.fields,
            });
          });
          fetchNextPage();
          setFlowerShops(flowerShop);
        },
        function done(err) {
          if (err) {
            console.error(err);
          } else {
            console.log('꽃집 불러오기 성공');
            setFlowerShopsLoading(false);
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

  useEffect(() => {
    storeBase('locationCategoryData')
      .select({
        view: 'data',
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
        pageSize: 100,
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
        restaurantLoading,
        cafesLoading,
        barsLoading,
        spotsLoading,
        beautyShopsLoading,
        studiosLoading,
        petShopsLoading,
        gymsLoading,
        kidShopsLoading,
        academiesLoading,
        pharmaciesLoading,
        flowerShopsLoading,
        navigationLoading,
        secondLoading,
        locationLoading,
        menuLoading,
        newStoresLoading,
        eventsLoading,
        promoLoading,

        restaurants,
        cafes,
        bars,
        spots,
        spotsCategories,
        beautyShops,
        studios,
        petShops,
        gyms,
        kidShops,
        academies,
        pharmacies,
        flowerShops,
        menu,
        events,
        firstCategories,
        secondCategories,
        locationCategories,
        newStores,
        promotions,

        app,
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
