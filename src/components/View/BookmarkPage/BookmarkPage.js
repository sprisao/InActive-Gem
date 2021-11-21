import React, { useState, useEffect } from 'react';
import SearchBox from '../SearchPage/SearchBox';
import BottomNavigation from '../../BottomNavigation/BottomNavigation';
import GridCard from '../../Grid/GridCard';
import Loading from '../../Loading';
import { useGlobalContext } from '../../context';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

import './BookmarkPage.css';

const BookmarkPage = (history) => {
  const {
    restaurants,
    cafes,
    bars,
    beautyShops,
    studios,
    petShops,
    gyms,
    kidShops,
    academies,
    pharmacies,
    flowerShops,
    cafesLoading,
  } = useGlobalContext();

  const allStores = restaurants.concat(
    cafes,
    bars,
    beautyShops,
    studios,
    petShops,
    gyms,
    kidShops,
    academies,
    pharmacies,
    flowerShops
  );
  const [bookmarkedStores, setBookmarkedStores] = useState([]);
  const [leerChecker, setLeerChecker] = useState(true);

  const db = getFirestore();
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    if (!user) {
      history.history.push('/login');
    } else {
      getDoc(doc(db, 'users', user.uid)).then((docSnap) => {
        if (docSnap.data().bookmarks) {
          setBookmarkedStores(docSnap.data().bookmarks);
          setLeerChecker(false);
        } else {
          console.log('No such document!');
        }
      });
    }
  }, [user, history.history, db]);

  return (
    <>
      <SearchBox history={history} />
      {cafesLoading ? (
        <Loading />
      ) : leerChecker ? (
        <section className='BookmarkPage'>
          <div className='BookmarkPage-wrapper'>
            <h1>아직 찜한 업체가 없네요!</h1>
            <h4>자주가거나 가보고 싶은 장소를 찜 해보세요!</h4>
          </div>
        </section>
      ) : (
        <section className='grid' style={{ marginBottom: '10rem' }}>
          <h1>찜 목록 </h1>
          <div className='grid__wrapper'>
            {allStores.map((item) => {
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
