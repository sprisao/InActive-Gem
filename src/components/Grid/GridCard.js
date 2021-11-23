import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { HiBadgeCheck } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { FiClock } from 'react-icons/fi';
import { BiWon } from 'react-icons/bi';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import {
  getFirestore,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  getDoc,
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

import './GridCard.css';

const GridCard = ({ store }) => {
  const [bookmarked, setBookmarked] = useState(false);
  // 인증업체 필터
  const history = useHistory();
  const db = getFirestore();
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    if (!user) {
      setBookmarked(false);
    } else {
      getDoc(doc(db, 'users', user.uid)).then((docSnap) => {
        if (docSnap.data().bookmarks) {
          docSnap.data().bookmarks.includes(store.id)
            ? setBookmarked(true)
            : setBookmarked(false);
          console.log(docSnap.data().bookmarks);
        } else {
          console.log('No such document!');
        }
      });
    }
  }, [db, store.id, user]);

  const getBookmarkClick = (value) => {
    setBookmarked(value);
  };

  const onePersonPriceWon = (store.mainMenuPrice * 1000).toLocaleString(
    'ko-KR'
  );

  let preRank;
  if (store.preRating > 8) {
    preRank = <span>🏅🏅🏅</span>;
  } else if (store.preRating > 6) {
    preRank = <span>🏅🏅</span>;
  } else if (store.preRating > 3) {
    preRank = <span>🏅</span>;
  } else preRank = null;

  let verfiedStore;
  if (store.storeVerified === true) {
    verfiedStore = <HiBadgeCheck />;
  }

  // 영업시간 필터
  let businessHour;
  if (store.openHour) {
    businessHour = (
      <div className='quickInfos__businessHours'>
        <FiClock />
        &nbsp;{store.openHour} ~ {store.closeHour}
      </div>
    );
  }

  let branch;
  if (store.branch) {
    branch = <p>・ {store.branch}</p>;
  }

  const clickHandler = () => {
    if (!user) {
      history.push('/login');
    } else {
      if (!bookmarked) {
        getBookmarkClick(true);
        updateDoc(doc(db, 'users', user.uid), {
          bookmarks: arrayUnion(store.id),
        });
      } else {
        getBookmarkClick(false);
        updateDoc(doc(db, 'users', user.uid), {
          bookmarks: arrayRemove(store.id),
        });
      }
      console.log(store.id);
    }
  };
  return (
    <div className='gridCard'>
      <Link to={`/store/${store.id}/details`} className=''>
        <div
          className='gridCard__imageContainer'
          style={{ backgroundImage: `url(${store.images[0].url})` }}
        >
          <div className='gridCard__BMContainer' onClick={clickHandler}>
            {bookmarked ? (
              <BsBookmarkFill
                style={{
                  color: 'var(--activeColor)',
                  fontSize: '1.55rem',
                  fontWeight: '500',
                }}
              />
            ) : (
              <BsBookmark
                style={{
                  color: 'white',
                  fontSize: '1.55rem',
                  fontWeight: '500',
                }}
              />
            )}
          </div>
        </div>
        <div className='gridCard__articleContainer'>
          <div className='tags'></div>
          <div className='quickInfos__location'>
            <span>{store.miniAddress}</span>
            {branch}
          </div>
          <div className='storeName'>
            <h3>{store.name}</h3>
            {verfiedStore}
          </div>
          <div className='quickInfos'>
            <div className='rating'>{preRank}</div>
            {!store.onePersonPrice || store.onePersonPrice === 0 ? null : (
              <div className='onePersonPrice'>
                <BiWon
                  style={{ marginRight: '0.2rem', fontSize: '1..25rem' }}
                />
                <span>{onePersonPriceWon} ~</span>
              </div>
            )}
            {businessHour}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default GridCard;
