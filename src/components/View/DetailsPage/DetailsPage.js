import React, { useState, useEffect } from 'react';

import DetailNavigation from './Components/DetailNavigation';
import ImageBox from './Components/Swiper';
import Header from './Components/Header';
import Information from './Components/Information';
import OwnerSection from './Components/OwnerSection';

import { data } from '../../../datafiles/stores';
import { useParams } from 'react-router-dom';

import './DetailsPage.css';

// Swiper 생성을 위한 Dependencies //
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

//////////////////////////////////

const DetailsPage = () => {
  const [storeData, setStoreData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const newStoreData = data.find((store) => store.id === parseInt(id));
    const name = newStoreData.name;
    const img = newStoreData.img;
    const eupmyeondongRi = newStoreData.eupmyeondongRi;
    const shortDescription = newStoreData.shortDescription;
    const instagramAcc = newStoreData.instagramAccount;
    const businessHours = newStoreData.businessHours;
    const breakHours = newStoreData.breakHours;
    const breakDays = newStoreData.breakDays;
    const phoneNumber = newStoreData.phoneNumber;
    const imageOwner = newStoreData.imageOwner;
    const ownerMessage = newStoreData.ownerMessage;
    const newStore = {
      name,
      img,
      eupmyeondongRi,
      shortDescription,
      instagramAcc,
      businessHours,
      breakHours,
      breakDays,
      phoneNumber,
      imageOwner,
      ownerMessage,
    };
    setStoreData(newStore);
  }, []);

  const {
    name,
    img,
    eupmyeondongRi,
    shortDescription,
    description,
    instagramAcc,
    businessHours,
    breakHours,
    breakDays,
    phoneNumber,
    imageOwner,
    ownerMessage,
  } = storeData;

  return (
    <section className='detailsPage'>
      {/* <DetailNavigation /> */}
      <ImageBox img={img} name={name} />
      <Header name={name} shortDescription={shortDescription} />
      <OwnerSection imageOwner={imageOwner} ownerMessage={ownerMessage} />
      <Information
        businessHours={businessHours}
        breakHours={breakHours}
        breakDays={breakDays}
        phoneNumber={phoneNumber}
        eupmyeondongRi={eupmyeondongRi}
        instagramAcc={instagramAcc}
      />
      <hr />
      {/* <hr />
      <div style={{ height: '10rem' }}></div> */}
    </section>
  );
};

export default DetailsPage;
