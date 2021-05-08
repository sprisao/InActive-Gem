import React, { useState, useEffect } from 'react';

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
      <Link to={'/'}>
        <button> home </button>{' '}
      </Link>
      <Header
        name={store.fields.name}
        shortDescription={store.fields.shortDescription}
        tags={store.fields.tags}
      />
      <OwnerSection
        ownerMessage={store.fields.ownerMessage}
        ownerImage={store.fields.ownerImage[0].url}
      />
      <Information
        businessHours={store.fields.businessHours}
        breakDays={store.fields.breakDays}
        phoneNumber={store.fields.phoneNumber}
        eupmyeondongRi={store.fields.eupmyeondongRi}
        instagramAcc={store.fields.instagramAcc}
      />
      <Recommendation filter={store.fields.categoryTitle} />
    </section>
  );
};

export default DetailsPage;
