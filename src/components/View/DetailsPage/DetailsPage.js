import React, { useState, useEffect } from 'react';

import DetailsNavi from './../../Header';

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

import { FiChevronLeft } from 'react-icons/fi';

import './DetailsPage.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const DetailsPage = ({ store }) => {
  return (
    <section className='detailsPage'>
      <DetailsNavi />
      <Link to={`/category/${store.fields.categoryNumber}`}>
        <button>
          <FiChevronLeft /> {store.fields.categoryTitle}
        </button>
      </Link>
      <ImageBox img={store.fields.images} name={store.fields.name} />
      <Header
        name={store.fields.name}
        shortDescription={store.fields.shortDescription}
        tags={store.fields.tags}
        instagramAccount={store.fields.instagramAccount}
        naverLink={store.fields.naverLink}
      />
      <OwnerSection
        ownerMessage={store.fields.ownerMessage}
        ownerImage={store.fields.ownerImage[0].url}
      />
      <Information
        openHour={store.fields.openHour}
        closeHour={store.fields.closeHour}
        breaktimeStart={store.fields.breaktimeStart}
        breaktimeEnd={store.fields.breaktimeEnd}
        breakDays={store.fields.breakDays}
        phoneNumber={store.fields.phoneNumber}
        eupmyeondongRi={store.fields.eupmyeondongRi}
      />
      <Recommendation filter={store.fields.secondCategory} />
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
