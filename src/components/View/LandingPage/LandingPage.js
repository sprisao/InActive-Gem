import React, { useState, useEffect } from 'react';
import SectionHeader from '../../../components/SectionHeader/Title';
// import Grid from '../../Grid/Grid';
import GridRandom from '../../Grid/GridRandom';
import Slide from '../../Swipe/Slide';
import Loading from '../../Loading';

import Airtable from 'airtable';

import './LandingPage.css';

import SlideCard from '../../Swipe/FeaturedCard';

const base = new Airtable({ apiKey: 'key5AMdi7ejadTzUy' }).base(
  'appDzyBPyX5MjMkrU'
);

const LandingPage = () => {
  const [mainStores, setMainStores] = useState([]);
  const [loading, setLoading] = useState(true);

  const mainStore = [];
  useEffect(() => {
    base('stores')
      .select({
        view: 'main',
      })
      .firstPage(function (err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record) {
          mainStore.push({
            id: record.id,
            ...record._rawJson.fields,
          });
        });
        setMainStores(mainStore);
        setLoading(false);
      });
  }, []);

  console.log(mainStores);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <SectionHeader title='인기카페 ✨' desc='원주 최고의 인기카페' />
      <div className='slide'>
        {mainStores.map((store) => {
          if (store.firstCategory[0] === '카페') {
            return <SlideCard key={store.id} store={store}></SlideCard>;
          }
        })}
      </div>

      <SectionHeader title='오늘의 맛집 🍛' desc='원쥴랭 추천 맛집' />

      <div className='slide'>
        {mainStores.map((store) => {
          if (store.firstCategory[0] === '맛집') {
            return <SlideCard key={store.id} store={store}></SlideCard>;
          }
        })}
      </div>
      {/* <SectionHeader
        title='이번 주말 추천! 🔥'
        desc='좋은 사람들과 좋은 곳에서 시원하게 한잔! 🍻'
        />
      <Slide section='hot' filter='호프・주점' /> */}

      {/* <Grid filter='카페' /> */}
      <SectionHeader title='GEM💎' desc='원주 실시간 맛집, 카페' />
      <GridRandom filter='카페' filter2='맛집' stores={mainStores} />

      {/* <Grid section='cafes' filter='카페' /> */}
    </>
  );
};

export default LandingPage;
