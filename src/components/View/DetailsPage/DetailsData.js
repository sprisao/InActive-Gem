import React from 'react';
import Loading from '../../Loading';
import { useGlobalContext } from '../../context';
import { useParams } from 'react-router-dom';

import DetailsPage from './DetailsPage';

const DetailsData = () => {
  const { cafes, restaurants, loading, stores } = useGlobalContext();
  const { id } = useParams();

  const allStores = stores.concat(restaurants, cafes);

  // const [store, setStore] = useState([]);
  // const [loading, setLoading] = useState(true);

  // const item = [];

  // const fetchStore = () => {
  //   setLoading(true);
  //   base('stores')
  //     .select({
  //       filterByFormula: `record_id = "${id}"`,
  //       view: 'Grid view',
  //       maxRecords: 1,
  //     })
  //     .eachPage(
  //       function page(records, fetchNextPage) {
  //         records.forEach(function (record) {
  //           item.push({
  //             id: record.id,
  //             ...record._rawJson.fields,
  //           });
  //         });
  //         fetchNextPage();
  //         setStore(item);
  //         setLoading(false);
  //       },
  //       function done(err) {
  //         if (err) {
  //           console.error(err);
  //           return;
  //         }
  //       }
  //     );
  // };

  // useEffect(() => {
  //   fetchStore();
  // }, [id]);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      {allStores.map((store) => {
        if (store.id === id) {
          return <DetailsPage key={store.id} store={store}></DetailsPage>;
        } else return null;
      })}
    </>
  );
};

export default DetailsData;
