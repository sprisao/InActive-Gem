import React from 'react';

import './DetailsCuration.css';

const DetailsCuration = (props) => {
  return (
    <div className='detailsCuration'>
      <video
        autoPlay={true}
        loop={true}
        controls={false}
        playsInline
        muted
        type='video/mp4'
        style={{
          maxWidth: 'var(--normalWidth',
        }}
      >
        <source src={props.introVideo} type='video/mp4' />
        <strong>Your browser does not support the video tag.</strong>
      </video>
      <img src={props.curation} alt='' />
    </div>
  );
};

export default DetailsCuration;
