import React, { useState, useEffect } from 'react';

import SearchBox from '../SearchPage/SearchBox';
import NewStores from './NewStores';
import SectionHeader from '../../../components/SectionHeader/Title';
import SlideCard from '../../SwiperComponent/SlideCard';
import GridRandom from '../../Grid/GridRandom';
import Loading from '../../Loading';
import { useGlobalContext } from '../../context';

import './LandingPage.css';

const LandingPage = () => {
  const { mainStores, mainLoading } = useGlobalContext();
  const [page, setPage] = useState(false);

  useEffect(() => {
    const event = window.addEventListener('scroll', () => {
      // console.log(`innerHeight ${window.innerHeight}`);
      // console.log(`scrollY ${window.scrollY}`);
      // console.log(`body height ${document.body.scrollHeight}`);
      if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 2
      ) {
        // setPage((oldPage) => {
        //   return oldPage + 1;
        // });
        setPage(true);
        console.log('작업중');
      }
    });
    return () => window.removeEventListener('scroll', event);
  }, []);

  if (mainLoading) {
    return <Loading />;
  }
  return (
    <>
    <SearchBox/>
      <NewStores></NewStores>

      <SectionHeader title='인기카페 ✨' desc='원주 최고의 인기카페' />
      <div className='SlideWrapper'>
        {mainStores.map((store) => {
          if (store.firstCategory[0] === '카페') {
            return <SlideCard key={store.id} store={store}></SlideCard>;
          } else return null;
        })}
      </div>

      <SectionHeader title='오늘의 맛집 🍛' desc='원쥴랭 추천 맛집' />
      <div className='SlideWrapper'>
        {mainStores.map((store) => {
          if (store.firstCategory[0] === '맛집') {
            return <SlideCard key={store.id} store={store}></SlideCard>;
          } else return null;
        })}
      </div>

      <SectionHeader title='GEM💎' desc='원주 실시간 맛집, 카페' />

      <GridRandom filter='카페' filter2='맛집' stores={mainStores} />
      {mainLoading && <h2 className='loading'>loading...</h2>}
    </>
  );
};

export default LandingPage;
