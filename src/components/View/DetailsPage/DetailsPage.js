import React, { useState, useEffect } from 'react';

import ImageBox from './Components/Swiper';
import Header from './Components/Header';
import Information from './Components/Information';
import OwnerSection from './Components/OwnerSection';
import Recommendation from './Components/Recommendations';

import { useParams } from 'react-router-dom';

import './DetailsPage.css';

// Swiper 생성을 위한 Dependencies //
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

//////////////////////////////////
import Airtable from 'airtable';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const base = new Airtable({ apiKey: 'key5AMdi7ejadTzUy' }).base(
  'appDzyBPyX5MjMkrU'
);

const DetailsPage = () => {
  const { id } = useParams();
  const [store, setStore] = useState([]);

  useEffect(() => {
    base('stores').find(id, function (err, record) {
      if (err) {
        console.error(err);
        return;
      }
      setStore(record);
    });
  }, [id]);

  console.log(store);
  return (
    <section className='detailsPage'>
      {/* <Header
        name={store.fields.name}
        shortDescription={store.fields.shortDescription}
      />
      <OwnerSection ownerMessage={store.fields.ownerMessage} />
      <Information
        businessHours={store.fields.businessHours}
        breakDays={store.fields.breakDays}
        phoneNumber={store.fields.phoneNumber}
        eupmyeondongRi={store.fields.eupmyeondongRi}
        instagramAcc={store.fields.instagramAcc}
      />
      <Recommendation filter={store.fields.categoryTitle} /> */}
    </section>
  );
};

export default DetailsPage;
