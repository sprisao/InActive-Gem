import React, { useState, useEffect } from 'react';
import GridSection from '../../Grid/SectionGrid';

import { data } from '../../../datafiles/stores';
import { Link, useParams } from 'react-router-dom';

import './DetailsPage.css';
import {
  IoChevronBackSharp,
  IoShareOutline,
  IoHeartOutline,
  IoLocationSharp,
} from 'react-icons/io5';

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
    <section className='detailpage'>
      <div className='navigator'>
        <Link to={'/'}>
          <div className='returnBtn'>
            <button className='returnBtn'>
              <IoChevronBackSharp style={{ fontSize: '1.25rem' }} />
              <span> 맛집</span>
            </button>
          </div>
        </Link>
        <div className='otherBtn'>
          <button>
            <IoShareOutline style={{ fontSize: '1.25rem' }} />
          </button>
          <button>
            <IoHeartOutline style={{ fontSize: '1.25rem' }} />
          </button>
        </div>
      </div>
      <div className='mainInfo'>
        <div className='imageBox'>
          <img src={img} alt={title} />
        </div>
        <h2>{title}</h2>
        <p>{desc}</p>
        <div className='location'>
          <IoLocationSharp style={{ color: 'red' }} />
          <span className='location__btn'>{location}</span>
        </div>
        <div className='opentime'>
          <p>영업시간: 10:00 ~ 21:00</p>
        </div>
      </div>
      <div className='detailInfo'>
        <p>{description}</p>
      </div>
      <GridSection section='after' filter='카페' />
    </section>
  );
};

export default DetailsPage;
