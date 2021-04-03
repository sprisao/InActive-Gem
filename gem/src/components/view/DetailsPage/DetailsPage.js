import React, { useState, useEffect } from 'react';
import { data } from '../../../datafiles/stores';
import { useParams } from 'react-router-dom';

const DetailsPage = () => {
  const [storeData, setStoreData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const newStoreData = data.find((store) => store.id === parseInt(id));
    const title = newStoreData.title;
    const img = newStoreData.img;
    const location = newStoreData.location;
    const desc = newStoreData.desc;
    const newStore = { title, img, location, desc };
    setStoreData(newStore);
  });

  const { title, img, location, desc } = storeData;
  return (
    <div>
      <h2>{title}</h2>
      <img src={img} alt='' />
      <span>{location}</span>
      <p>{desc}</p>
    </div>
  );
};

export default DetailsPage;
