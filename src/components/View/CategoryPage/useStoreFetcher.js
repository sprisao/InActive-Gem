import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useStoreFetcher(
  query,
  pageNumber,
  location,
  secondFilter
) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [stores, setStores] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [offsetID, setOffsetID] = useState('');
  // const [results, setResults] = useState([]);

  // &filterByFormula=AND({locationCategoryData}="원주혁신도시",{secondCategory}="한식")
  const store = [];
  useEffect(() => {
    let cancel;
    axios
      .get(
        `https://api.airtable.com/v0/app0tAUATUh8jBxX4/stores?&view=restaurants&pageSize=20&offset=${offsetID}`,
        { headers: { Authorization: 'Bearer keyMAHxu7TwPnz4sZ' } },
        { params: { q: query, p: pageNumber, l: location, s: secondFilter } },
        { cancleToken: new axios.CancelToken((c) => (cancel = c)) }
      )

      .then((res) => {
        setOffsetID(res.data.offset);
        res.data.records.forEach((element) => {
          store.push({
            id: element.id,
            ...element.fields,
          });
        });
        console.log(res);

        setStores((prevStores) => [...prevStores, store]);
        setHasMore(res.data.records.length > 0);

        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [query, pageNumber]);
  const results = stores.reduce((acc, cur) => acc.concat(cur), []);
  console.log(results);
  // const flattendedStores = stores.reduce((acc, cur) => acc.concat(cur), []);

  return { loading, error, results, hasMore };
}
