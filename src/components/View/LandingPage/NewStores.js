import React, { useState, useEffect } from 'react';
import SectionHeader from '../../../components/SectionHeader/Title';
import Loading from '../../Loading';
import SlideCard from '../../Swipe/FeaturedCard';

import Airtable from 'airtable';

import '../../Swipe/Slide.css';
import './NewStores.css';

const base = new Airtable({ apiKey: 'key5AMdi7ejadTzUy' }).base(
  'appDzyBPyX5MjMkrU'
);
const NewStores = () => {
  const [newStores, setnewStores] = useState([]);
  const [loading, setLoading] = useState(true);

  const newStore = [];

  const fetchRecentStores = () => {
    setLoading(true);
    base('stores')
      .select({
        maxRecords: 25,
        pageSize: 5,
        view: 'new',
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            newStore.push({
              id: record.id,
              ...record._rawJson.fields,
            });
          });
          setnewStores(newStore);
          setLoading(false);
          fetchNextPage();
        },
        function done(err) {
          console.log('새로운 가게 데이터 로딩 완료');
          if (err) {
            console.error(err);
            return;
          }
        }
      );
  };

  useEffect(() => {
    fetchRecentStores();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <SectionHeader title='새롭게 올라온 가게🔥' desc='따끈따끈 신상등록! ' />
      <div className='slide'>
        {newStores.map((store) => (
          <SlideCard key={store.id} store={store}></SlideCard>
        ))}
      </div>
    </>
  );
};

export default NewStores;
