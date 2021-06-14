import React, { useState, useEffect } from 'react';
import SectionHeader from '../../../SectionHeader/Title';
import SlideCard from '../../../SwiperComponent/SlideCard';
import Loading from '../../../Loading';
import GridCard from '../../../Grid/GridCard';
import Airtable from 'airtable';

import './EnterCityPage.css';

const base = new Airtable({ apiKey: 'key5AMdi7ejadTzUy' }).base(
  'appDzyBPyX5MjMkrU'
);

const EnterCityPage = () => {
  const [loading, setLoading] = useState(true);
  const [enterStores, setEnterStores] = useState([]);

  const enterStore = [];

  const fetchEnterCityStores = () => {
    setLoading(true);
    base('stores')
      .select({
        // Selecting the first 3 records in Grid view:
        pageSize: 50,
        view: 'EnterCity',
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            enterStore.push({
              id: record.id,
              ...record._rawJson.fields,
            });
          });
          setEnterStores(enterStore);
          setLoading(false);
          fetchNextPage();
        },
        function done(err) {
          console.log('기업도시 데이터 불러오기 완료');
          if (err) {
            console.error(err);
            return;
          }
        }
      );
  };
  useEffect(() => {
    fetchEnterCityStores();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <section className='EnterCity'>
      <SectionHeader title='기업도시 맛집 🍱' />
      <div className='SlideWrapper'>
        {enterStores.map((store) => {
          if (store.firstCategory[0] === '맛집') {
            return <SlideCard key={store.id} store={store}></SlideCard>;
          } else return null;
        })}
      </div>
      <SectionHeader title='기업도시 카페 ☕️' />
      <div className='SlideWrapper'>
        {enterStores.map((store) => {
          if (store.firstCategory[0] === '카페') {
            return <SlideCard key={store.id} store={store}></SlideCard>;
          } else return null;
        })}
      </div>
      <SectionHeader title='기업도시 내 모든 젬💎' />
      <section className='title'>
        <div className='grid'>
          {enterStores.map((store) => {
            return (
              <GridCard
                key={store.id}
                store={store}
                tags={store.tags}
                open={store.openHour}
                close={store.closeHour}
              ></GridCard>
            );
          })}
        </div>
      </section>
    </section>
  );
};

export default EnterCityPage;
