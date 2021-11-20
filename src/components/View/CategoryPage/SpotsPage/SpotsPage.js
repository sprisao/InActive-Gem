import React from 'react';
import SearchBox from '../../SearchPage/SearchBox';
import BottomNavigation from '../../../BottomNavigation/BottomNavigation';

import { useGlobalContext } from '../../../context';

import './SpotsPage.css';

const SpotsPage = (history) => {
  const { spotsCategories } = useGlobalContext();

  const clickHandler = (params, e) => {
    history.history.push(`/sightseeing/${params}/전체`);
  };

  return (
    <>
      <SearchBox />
      <BottomNavigation />
      <div className='Sightseeing'>
        <div className='Sightseeing--Wrapper'>
          <div
            className='Sightseeing--Category--All'
            style={{
              backgroundImage:
                'url(https://www.wonju.go.kr/site/english/images/contents/gangwon_gamyoung01.jpg)',
            }}
            onClick={(e) => {
              clickHandler('all', e);
            }}
          >
            <p>전체</p>
          </div>
          <div className='Sightseeing--Categories--Wrapper'>
            {spotsCategories.map((item) => (
              <div
                key={item.id}
                className='Sightseeing--Category'
                onClick={(e) => {
                  clickHandler(item.id, e);
                }}
                style={{
                  backgroundImage: `linear-gradient(to top right , rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35)), url(${item.images[1].url})`,
                }}
              >
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
