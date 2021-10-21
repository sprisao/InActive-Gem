import React, { useState, useEffect } from 'react';
import SearchBox from '../SearchPage/SearchBox';
import BottomNavigation from '../../BottomNavigation/BottomNavigation';
import GridCard from '../../Grid/GridCard';
import Loading from '../../Loading';
import { useGlobalContext } from '../../context';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const BookmarkPage = () => {
  const {
    loading,
    secondCategories,
    restaurants,
    cafes,
    stores,
    restaurantLoading,
    cafesLoading,
  } = useGlobalContext();
  const [bookmarkedStores, setBookmarkedStores] = useState([]);
  const [leerChecker, setLeerChecker] = useState(true);

  const db = getFirestore();
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    getDoc(doc(db, 'users', user.uid)).then((docSnap) => {
      if (docSnap.data().bookmarks.length > 0) {
        setBookmarkedStores(docSnap.data().bookmarks);
        setLeerChecker(false);
      } else {
        console.log('No such document!');
      }
    });
  }, []);

  return (
    <>
      <SearchBox />
      {restaurantLoading || cafesLoading || loading ? (
        <Loading />
      ) : leerChecker ? (
        <section className='gird'>
          <h1>아직 찜한 업체가 없네요!</h1>
        </section>
      ) : (
        <section className='grid' style={{ marginBottom: '10rem' }}>
          <h1>찜 목록 </h1>
          <div className='grid__wrapper'>
            {restaurants.map((item) => {
              if (bookmarkedStores.includes(item.id))
                return (
                  <GridCard
                    key={item.id}
                    store={item}
                    open={item.openHour}
                    close={item.closeHour}
                    bookmarked={true}
                  ></GridCard>
                );
              else return null;
            })}
            {cafes.map((item) => {
              if (bookmarkedStores.includes(item.id))
                return (
                  <GridCard
                    key={item.id}
                    store={item}
                    open={item.openHour}
                    close={item.closeHour}
                    bookmarked={true}
                  ></GridCard>
                );
              else return null;
            })}
            {stores.map((item) => {
              if (bookmarkedStores.includes(item.id))
                return (
                  <GridCard
                    key={item.id}
                    store={item}
                    open={item.openHour}
                    close={item.closeHour}
                    bookmarked={true}
                  ></GridCard>
                );
              else return null;
            })}
          </div>
        </section>
      )}
      <BottomNavigation activatedButton={'bookmarks'} />
    </>
  );
};

export default BookmarkPage;
