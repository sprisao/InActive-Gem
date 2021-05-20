import React, { useState, useEffect } from 'react';

import DetailsHeader from './../../Header';

import DetailsNavi from './Components/DetailsNavi';
import ImageBox from './Components/Swiper';
import Header from './Components/Header';
import Information from './Components/Information';
import OwnerSection from './Components/OwnerSection';
import Recommendation from './Components/Recommendations';

import { Link } from 'react-router-dom';

// Swiper 생성을 위한 Dependencies //
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
//////////////////////////////////

import './DetailsPage.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const DetailsPage = ({ store }) => {
  return (
    <section className='detailsPage'>
      <DetailsHeader />
      <DetailsNavi
        categoryNumber={store.categoryNumber}
        categoryTitle={store.categoryTitle}
      />
      <ImageBox img={store.images} name={store.name} />
      <Header
        name={store.name}
        shortDescription={store.shortDescription}
        tags={store.tags}
        instagramAccount={store.instagramAccount}
        naverLink={store.naverLink}
      />
      <OwnerSection
        ownerMessage={store.ownerMessage}
        ownerImage={store.ownerImage[0].url}
      />
      <Information
        openHour={store.openHour}
        closeHour={store.closeHour}
        breaktimeStart={store.breaktimeStart}
        breaktimeEnd={store.breaktimeEnd}
        breakDays={store.breakDays}
        phoneNumber={store.phoneNumber}
        eupmyeondongRi={store.eupmyeondongRi}
      />
      <Recommendation filter={store.secondCategory} />
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
