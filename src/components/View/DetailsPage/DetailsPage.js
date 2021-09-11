import React from 'react';

import DetailsNavi from './Components/DetailsNavi';
import ImageBox from './Components/DetailsImages';
import DetailsHeader from './Components/DetailsHeader';
import Information from './Components/Information';
import DetailsEventsList from './Components/DetailsEventsList';
import Menu from './Components/Menu/Menu';
import Recommendation from './Components/Recommendations';

import Separator from '../../Separator';

import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper';
import './DetailsPage.css';

// install Swiper modules
SwiperCore.use([Pagination]);

const DetailsPage = ({ store, history }) => {
  console.log(store);

  let menu;
  if (store.isMenu === true) {
    menu = (
      <>
        <Menu store={store.name} />
        <Separator />
      </>
    );
  }

  let tab = ['정보'];
  // if (store.isPromotion) {
  //   tab = ['소개', '정보'];
  // }
  if (store.events) {
    tab = ['정보', '이벤트'];
  }
  if (store.isPromotion && store.events) {
    tab = ['소개', '정보', '이벤트'];
  }

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + tab[index] + '</span>';
    },
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
        shortDescription={store.shortDescription}
        locationCategory={store.eupmyeondongRi}
        storeVerified={store.storeVerified}
        branch={store.branch}
      />
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        pagination={pagination}
        hashNavigation={true}
        className='mySwiper'
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {/* {store.isPromotion ? (
          <SwiperSlide data-hash='storeCuration'>큐레이션 정보</SwiperSlide>
        ) : null} */}
        <SwiperSlide data-hash='storeInfo'>
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
          <SwiperSlide data-hash='storeEvents'>
            <DetailsEventsList eventItems={store.events} />
          </SwiperSlide>
        ) : null}
      </Swiper>

      <Separator />
      {menu}
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
