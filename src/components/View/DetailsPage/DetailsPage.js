import React, { useState, useEffect } from 'react';

import DetailNavigation from './Components/DetailNavigation';
import ImageBox from './Components/Swiper';
import Header from './Components/Header';
import Information from './Components/Information';

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
    const title = newStoreData.name;
    const img = newStoreData.img;
    const location = newStoreData.eupmyeondongRi;
    const desc = newStoreData.shortDescription;
    const description = newStoreData.description;
    const newStore = { title, img, location, desc, description };
    setStoreData(newStore);
  }, []);

  const { title, img, location, desc, description } = storeData;

  return (
    <section className='detailsPage'>
      <DetailNavigation />
      <ImageBox img={img} title={title} />
      <Information title={title} desc={desc} />
      <Header title={title} desc={desc}></Header>
    </section>
  );
};

export default DetailsPage;
