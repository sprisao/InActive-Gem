import React from 'react';
import { HiBadgeCheck } from 'react-icons/hi';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';

import {
  getFirestore,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from 'firebase/firestore';

import { getAuth } from 'firebase/auth';

import './DetailsHeader.css';

const DetailsHeader = (props) => {
  const db = getFirestore();
  const auth = getAuth();
  const user = auth.currentUser;

  // 인증업체여부 필터링
  let verfiedStore;
  if (props.storeVerified === true) {
    verfiedStore = (
      <HiBadgeCheck style={{ fontSize: '1rem', color: '#f21d73' }} />
    );
  }

  let isBranch;
  if (props.branch) {
    isBranch = (
      <div className='details__tag'>
        <p>
          {props.locationCategory} ・ {props.branch}
        </p>
      </div>
    );
  } else {
    isBranch = (
      <div className='details__tag'>
        <p>{props.locationCategory}</p>
      </div>
    );
  }

  // 북마크 되어 있는 업체인지 확인
  // firebase에서 bookmark데이터 가져올 것

  // 클릭 이벤트
  const clickHandler = () => {
    if (!user) {
      props.history.push('/login');
    } else {
      if (!props.bookmark) {
        props.getBookmarkClick(true);
        updateDoc(doc(db, 'users', user.uid), {
          bookmarks: arrayUnion(props.id),
        });
      } else {
        props.getBookmarkClick(false);
        updateDoc(doc(db, 'users', user.uid), {
          bookmarks: arrayRemove(props.id),
        });
      }
      console.log(props.id);
    }
  };

  return (
    <div className='details__Header'>
      <div className='details__Header__Container'>
        <div className='details__shortDesc'>
          <h4>{props.shortDescription}</h4>
          <div className='quickButtons' onClick={clickHandler}>
            {props.bookmark ? (
              <BsBookmarkFill style={{ color: 'var(--activeColor)' }} />
            ) : (
              <BsBookmark />
            )}
          </div>
        </div>
        <div className='details__name'>
          <h3>{props.name}</h3>
          {verfiedStore}
        </div>
        {isBranch}
      </div>
    </div>
  );
};

export default DetailsHeader;
