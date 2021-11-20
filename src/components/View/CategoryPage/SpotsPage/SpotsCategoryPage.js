import React, { useEffect, useState } from 'react';

import SpotsCategoryHeader from './SpotsCategoryHeader';

import { useGlobalContext } from '../../../context';
import { useParams } from 'react-router-dom';

const SpotsCategoryPage = () => {
  const { spotsCategory, spotsLocation } = useParams();

  const { spots, spotsLoading } = useGlobalContext();
  const [newSpots, setNewSpots] = useState([]);
  const [locationList, setLocationList] = useState([]);
  let location = [];
  let filteredSpots = [];

  useEffect(() => {
    if (spotsCategory !== 'all') {
      filteredSpots = spots.filter((x) => x.category_id[0] === spotsCategory);
      filteredSpots.forEach((element) => {
        if (!location.includes(element.miniAddress)) {
          location.push(element.miniAddress);
        } else return null;
      });
      setNewSpots(filteredSpots);
      setLocationList(location);
    } else {
      spots.forEach((element) => {
        if (!location.includes(element.miniAddress)) {
          location.push(element.miniAddress);
        } else return null;
      });
      setNewSpots(spots);
      setLocationList(location);
    }
  }, [spotsCategory]);

  return (
    <>
      <SpotsCategoryHeader
        spotsCategory={spotsCategory}
        filteredLocation={locationList}
      />
      {newSpots.map((item) => {
        if (spotsLocation === '전체') {
          return <div>{item.name}</div>;
        }
        if (item.miniAddress === spotsLocation) {
          return <div>{item.name}되야지</div>;
        } else {
          return null;
        }
      })}
    </>
  );
};

export default SpotsCategoryPage;
