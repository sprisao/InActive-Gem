import React from 'react';

import DetailsNavi from './Components/DetailsNavi';
import ImageBox from './Components/Swiper';
import Header from './Components/Header';
import Information from './Components/Information';
import Menu from './Components/Menu/Menu';
import Recommendation from './Components/Recommendations';

import Separator from '../../Separator';

// Swiper 생성을 위한 Dependencies //
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
//////////////////////////////////

import './DetailsPage.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const DetailsPage = ({ store }) => {
  let menu;
  if (store.isMenu === true) {
    menu = (
      <>
        <Menu store={store.name} />
        <Separator />
      </>
    );
  }
  return (
    <section className='detailsPage'>
      <DetailsNavi
        categoryNumber={store.categoryNumber[0]}
        categoryTitle={store.firstCategory[0]}
        name={store.name}
      />
      <ImageBox img={store.images} name={store.name} />
      <Header
        name={store.name}
        shortDescription={store.shortDescription}
        tags={store.tags}
        instagramAccount={store.instagramAccount}
        storeVerified={store.storeVerified}
        naverLink={store.naverLink}
        branch={store.branch}
        phoneNumber={store.phoneNumber}
      />

      <Separator />

      <Information
        openHour={store.openHour}
        closeHour={store.closeHour}
        breaktimeStart={store.breaktimeStart}
        breaktimeEnd={store.breaktimeEnd}
        breakDays={store.breakDays}
        fullAddress={store.fullAddress}
      />
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

// name;
// shortDescription;
// ownerMessage;
// phoneNumber;
// categoryTitle;
// secondCategory;
// mainMenu;
// tags;
// fullAddress;
// sigunGu;
// eupmyeondongRi;
// streetName;
// streetNumber;
// buildingNumber;
// openHour;
// closeHour;
// breaktimeStart;
// breaktimeEnd;
// breakDays;
// instagramAccount;
// naverLink;
// images;
// productImage;
// storeImage;
// ownerImage;
// storeVerified;
// ownerVerfied;
// createdTime;
// ourRating;
// recordId;
