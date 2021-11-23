import React, { useEffect, useState } from 'react';

import DetailsShortcuts from '../../DetailsPage/Components/DetailsShortcuts';
import DetailsNavi from '../../DetailsPage/Components/DetailsNavi';
import ImageBox from '../../DetailsPage/Components/DetailsImages';
import DetailsHeader from '../../DetailsPage/Components/DetailsHeader';
import Information from '../../DetailsPage/Components/Information';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

import { useHistory } from 'react-router';

const SpotDetails = (props) => {
  const [bookmarked, setBookmarked] = useState(false);
  const history = useHistory();
  const spot = props.location.state.spot;
  console.log(history);

  const db = getFirestore();
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    if (!user) {
      setBookmarked(false);
    } else {
      getDoc(doc(db, 'users', user.uid)).then((docSnap) => {
        if (docSnap.data().bookmarks) {
          docSnap.data().bookmarks.includes(spot.id)
            ? setBookmarked(true)
            : setBookmarked(false);
          console.log(docSnap.data().bookmarks);
        } else {
          console.log('No such document!');
        }
      });
    }
  }, [db, spot.id, user]);

  const getBookmarkClick = (value) => {
    setBookmarked(value);
  };

  return (
    <>
      <DetailsShortcuts
        phoneNumber={spot.phoneNumber}
        instagramAccount={spot.instagramHashTag}
        naverLink={spot.naverLink}
      />
      <section className='detailsPage'>
        <DetailsNavi
          name={spot.name}
          history={history}
          category={spot.spotCategory}
          locationCategory={spot.eupmyeondongRi}
        />
        <ImageBox img={spot.images} name={spot.name} />
        <DetailsHeader
          name={spot.name}
          id={spot.id}
          shortDescription={spot.shortDescription}
          locationCategory={spot.miniAddress}
          bookmark={bookmarked}
          getBookmarkClick={getBookmarkClick}
          history={history}
        />
        <Information
          openHour={spot.openHour}
          closeHour={spot.closeHour}
          breaktimeStart={spot.breaktimeStart}
          breaktimeEnd={spot.breaktimeEnd}
          breakDays={spot.breakDays}
          fullAddress={spot.fullAddress}
          phoneNumber={spot.phoneNumber}
          instagramAccount={spot.instagramAccount}
          naverLink={spot.naverLink}
        />
        <div className='spaceHolder' style={{ marginBottom: '12.5rem' }}></div>
      </section>
    </>
  );
};

export default SpotDetails;
