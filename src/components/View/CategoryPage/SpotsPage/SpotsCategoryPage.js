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
      console.log(filteredSpots);
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

  console.log(locationList);

  return (
    <>
      <SpotsCategoryHeader
        spotsCategory={spotsCategory}
        filteredLocation={locationList}
        currentLocation={spotsLocation}
      />
      {newSpots.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </>
  );
};

export default SpotsCategoryPage;
