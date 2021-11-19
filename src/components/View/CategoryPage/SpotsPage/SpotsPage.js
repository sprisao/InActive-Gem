import React from 'react';
import SearchBox from '../../SearchPage/SearchBox';
import BottomNavigation from '../../../BottomNavigation/BottomNavigation';

import { useGlobalContext } from '../../../context';

import './SpotsPage.css';

const SpotsPage = () => {
  const { spots, spotsCategories, spotsLoading } = useGlobalContext();

  return (
    <>
      <SearchBox />
      <BottomNavigation />
      <div className='Sightseeing'>
        <div className='Sightseeing--Wrapper'>
          <div className='Sightseeing--Category--All'>
            <p>전체</p>
          </div>
          <div className='Sightseeing--Categories--Wrapper'>
            {spotsCategories.map((item) => (
              <div key={item.id} className='Sightseeing--Category'>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SpotsPage;
