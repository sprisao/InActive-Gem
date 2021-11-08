import React from 'react';

import { SiInstagram, SiNaver } from 'react-icons/si';
import { ImPhone } from 'react-icons/im';
import './DetailsShortcuts.css';

const DetailsShortcuts = (props) => {
  // 전화걸기
  const url = 'https://www.instagram.com/';

  const openLink = () => {
    const telNumber = props.phoneNumber;
    const pageUrl = 'tel:' + telNumber;
    document.location.href = pageUrl;
  };

  return (
    <section className='Details-Shortcut'>
      <div className='Shortcut-Wrapper'>
        {props.instagramAccount ? (
          <div className='SNS-ShortCut'>
            <div
              className='SNS-Shortcut-Button'
              onClick={() => window.open(props.naverLink, '_blank')}
            >
              <SiNaver />
              <span>네이버</span>
            </div>
            <div>|</div>
            <div
              className='SNS-Shortcut-Button'
              onClick={() =>
                window.open(url + props.instagramAccount, '_parent')
              }
            >
              <SiInstagram />
              <span>인스타그램</span>
            </div>
          </div>
        ) : (
          <div className='SNS-ShortCut'>
            <div
              className='SNS-Shortcut-Button'
              onClick={() => window.open(props.naverLink, '_blank')}
            >
              <SiNaver />
              <span>네이버</span>
            </div>
          </div>
        )}
        <div className='Call-Shorcut' onClick={openLink}>
          <ImPhone style={{ margin: '0' }} />
        </div>
      </div>
    </section>
  );
};

export default DetailsShortcuts;
