import React, { useState, useEffect } from 'react';
import Loading from '../../Loading';
import { useParams } from 'react-router-dom';
import Airtable from 'airtable';

import DetailsPage from './DetailsPage';

const base = new Airtable({ apiKey: 'key5AMdi7ejadTzUy' }).base(
  'appDzyBPyX5MjMkrU'
);

const DetailsData = () => {
  const { id } = useParams();
  const [store, setStore] = useState([]);
  const [loading, setLoading] = useState(true);

  const item = [];

  const fetchStore = () => {
    setLoading(true);
    base('stores')
      .select({
        filterByFormula: `record_id = "${id}"`,
        view: 'Grid view',
        maxRecords: 1,
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            item.push({
              id: record.id,
              ...record._rawJson.fields,
            });
          });
          fetchNextPage();
          setStore(item);
          setLoading(false);
        },
        function done(err) {
          if (err) {
            console.error(err);
            return;
          }
        }
      );
  };

  useEffect(() => {
    fetchStore();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      {store.map((store) => {
        if (store.id === id) {
          return <DetailsPage key={store.id} store={store}></DetailsPage>;
        } else return null;
      })}
    </>
  );
};

export default DetailsData;
