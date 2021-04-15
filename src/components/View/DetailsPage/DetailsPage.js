import React, { useState, useEffect } from 'react';

import Navigation from './Components/Navigation';
import ImageBox from './Components/Swiper';
import Header from './Components/Header';
import Information from './Components/Information';

import { data } from '../../../datafiles/stores';
import { useParams } from 'react-router-dom';

import './DetailsPage.css';

const DetailsPage = () => {
  const [storeData, setStoreData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const newStoreData = data.find((store) => store.id === parseInt(id));
    const title = newStoreData.title;
    const img = newStoreData.img;
    const location = newStoreData.location;
    const desc = newStoreData.desc;
    const description = newStoreData.description;
    const newStore = { title, img, location, desc, description };
    setStoreData(newStore);
  }, []);

  const { title, img, location, desc, description } = storeData;
  return (
    <section className='detailsPage'>
      <Navigation />
      <Information title={title} desc={desc} />
      <Header img={img}></Header>
      {/* {img &&
        img.map((item) => {
          return (
            <div>
              <ul>{item}</ul>
            </div>
          );
        })} */}
    </section>
  );
};

export default DetailsPage;
