import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

const Storestest = () => {
  const [stores, setStores] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        // 요청을 시작 할 때에는 Error와 Stores를 초기화
        setError(null);
        setStores(null);
        setLoading(true);

        const response = await axios.get('/api/store-api');
        setStores(response.data);
      } catch (e) {
        setError(error);
      }
      setLoading(false);
    };
    fetchStores();
  }, []);

  if (loading) return <div>로딩중</div>;
  if (error) return <div>에러발생</div>;
  if (!stores) return null;
  return (
    <section>
      {stores.map((store) => (
        <article className='cocktail'>
          <div className='img-container'>
            <img src={store.img[0]} alt={store.name} />
          </div>
          <div className='cocktail-footer'>
            <h3>{store.name}</h3>
            <h4>{store.eupmyeondongRi}</h4>
            <Link to={`/store/${store.id}`} className='btn btn-primary'>
              상세
            </Link>
          </div>
        </article>
      ))}
    </section>
  );
};
export default Storestest;
