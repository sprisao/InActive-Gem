import React, { useState, useEffect } from 'react';

import DetailsNavi from './Components/DetailsNavi';
import ImageBox from './Components/DetailsImages';
import DetailsHeader from './Components/DetailsHeader';
import DetailsCuration from './Components/DetailsCuration';
import Information from './Components/Information';
import DetailsEventsList from './Components/DetailsEventsList';
import Menu from './Components/Menu/Menu';
import Recommendation from './Components/Recommendations';
import Separator from '../../Separator';

import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Pagination, History } from 'swiper';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import './DetailsPage.css';

// install Swiper modules
SwiperCore.use([Pagination, History]);

const DetailsPage = ({ store, history }) => {
  const [bookmarked, setBookmarked] = useState(false);

  let tab = ['정보'];
  let addPromo = [];
  let addMenu = [];
  let addEvents = [];

  if (store.isMenu) {
    addMenu = ['메뉴'];
    tab = addMenu.concat(tab);
  }
  if (store.isPromotion) {
    addPromo = ['큐레이션'];
    tab = addPromo.concat(tab);
  }
  if (store.events) {
    addEvents = ['이벤트'];
    tab = tab.concat(addEvents);
  }

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + tab[index] + '</span>';
    },
  };

  const db = getFirestore();
  const auth = getAuth();
  const user = auth.currentUser;
  const docRef = doc(db, 'users', user.uid);

  useEffect(() => {
    getDoc(doc(db, 'users', user.uid)).then((docSnap) => {
      if (docSnap.exists()) {
        docSnap.data().bookmarks.includes(store.id)
          ? setBookmarked(true)
          : setBookmarked(false);
        console.log(docSnap.data().bookmarks);
      } else {
        console.log('No such document!');
      }
    });
  }, [bookmarked]);

  const getBookmarkClick = (value) => {
    setBookmarked(value);
  };

  return (
    <section className='detailsPage'>
      <DetailsNavi
        name={store.name}
        history={history}
        category={store.firstCategory}
        locationCategory={store.eupmyeondongRi}
        secondCategory={store.secondCategory[0]}
      />
      <ImageBox img={store.images} name={store.name} />
      <DetailsHeader
        name={store.name}
        id={store.id}
        shortDescription={store.shortDescription}
        locationCategory={store.eupmyeondongRi}
        storeVerified={store.storeVerified}
        branch={store.branch}
        bookmark={bookmarked}
        getBookmarkClick={getBookmarkClick}
      />
      <Swiper
        initialSlide={0}
        spaceBetween={0}
        slidesPerView={1}
        pagination={pagination}
        className='mySwiper'
        // onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        autoHeight={true}
        history={{
          key: 'details',
          replaceState: true,
        }}
      >
        {store.isPromotion ? (
          <SwiperSlide data-history='Curation'>
            {store.curation ? (
              <DetailsCuration
                introVideo={store.promotionMedia[0].url}
                curation={store.curation[0].url}
              />
            ) : (
              <div
                className='comingsoon'
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  height: '30%',
                }}
              >
                <h4 style={{ margin: '8rem 0' }}>Coming Soon!</h4>
              </div>
            )}
          </SwiperSlide>
        ) : null}
        {store.isMenu ? (
          <SwiperSlide data-history='Menu'>
            <Menu store={store.name} />
          </SwiperSlide>
        ) : null}
        <SwiperSlide data-history='Info'>
          <Information
            openHour={store.openHour}
            closeHour={store.closeHour}
            breaktimeStart={store.breaktimeStart}
            breaktimeEnd={store.breaktimeEnd}
            breakDays={store.breakDays}
            fullAddress={store.fullAddress}
            phoneNumber={store.phoneNumber}
            instagramAccount={store.instagramAccount}
            naverLink={store.naverLink}
          />
        </SwiperSlide>
        {store.events ? (
          <SwiperSlide data-history='Events'>
            <DetailsEventsList eventItems={store.events} />
          </SwiperSlide>
        ) : null}
      </Swiper>

      <Separator />
      {/* {menu} */}
      <Recommendation
        filter={store.firstCategory[0]}
        filter2={store.secondCategory[0]}
        self={store.id}
        emoji={store.secondEmoji}
        secondCategory={store.secondCategory}
        firstCategory={store.firstCategory}
      />
    </section>
  );
};

export default DetailsPage;
