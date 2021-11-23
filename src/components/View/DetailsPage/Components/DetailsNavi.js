import React from 'react';

import { FiChevronLeft } from 'react-icons/fi';

import './DetailsNavi.css';

const DetailsNavi = (props) => {
  const history = props.history;
  console.log(props.history);
  const goBack = () => {
    history.goBack();
  };

  return (
    <section className='detailsNavi'>
      <div className='detailsNavi__box'>
        <div className='Details__Backward' onClick={goBack}>
          <FiChevronLeft style={{ fontSize: '1.85rem', color: '#fff' }} />
        </div>
      </div>
    </section>
  );
};

export default DetailsNavi;
