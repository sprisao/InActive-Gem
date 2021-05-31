import React from 'react';

import './Footer.css';

const Footer = () => {
  return (
    <section className='footer'>
      <hr />
      <div className='footer__container'>
        <img
          src='https://res.cloudinary.com/diimwnnmj/image/upload/v1622430656/%E1%84%8F%E1%85%A1%E1%84%8F%E1%85%A1%E1%84%8B%E1%85%A9-%E1%84%8E%E1%85%A2%E3%84%B9_toiyny.png'
          alt='카카오채널'
          onClick={() =>
            window.open('http://pf.kakao.com/_FCGCs/chat', '_parent')
          }
        />
        <p>Copyright © 2020 GEM All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
