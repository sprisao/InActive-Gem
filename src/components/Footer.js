import React, { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import './Footer.css';

const url = 'https://www.gogogem.io';

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  const openModal = () => {
    setIsShowing(true);
  };
  useEffect(() => {
    if (isShowing) {
      const notiTimer = setTimeout(() => {
        setIsShowing(false);
      }, 1000);
      return () => clearTimeout(notiTimer);
    }
  }, [isShowing]);
  // if (copied === true) return console.log('copied');

  return (
    <section className='footer'>
      <div>
        <hr></hr>
        {isShowing && (
          <p
            style={{
              color: 'green',
              fontWeight: '400',
            }}
          >
            링크가 복사 되었습니다 ✅
          </p>
        )}
      </div>
      <div className='footer__info__container'>
        <div
          className='footer__button'
          onClick={() =>
            window.open('http://pf.kakao.com/_FCGCs/chat', '_parent')
          }
        >
          <p className='emoji'>🏠</p>
          <p>내 가게 문의하기</p>
        </div>
        |
        <CopyToClipboard text={url} onCopy={() => setCopied(true)}>
          <div className='footer__button' onClick={openModal}>
            <p className='emoji'>🚀</p>
            <p>친구에게 '젬' 알리기</p>
          </div>
        </CopyToClipboard>
        |
        <div className='footer__button'>
          <p className='emoji'>👍🏻</p>
          <p>다른 가게 추천하기</p>
        </div>
      </div>
      <div className='footer__container'>
        {/* <img
          src='https://res.cloudinary.com/diimwnnmj/image/upload/v1622430656/%E1%84%8F%E1%85%A1%E1%84%8F%E1%85%A1%E1%84%8B%E1%85%A9-%E1%84%8E%E1%85%A2%E3%84%B9_toiyny.png'
          alt='카카오채널'
          onClick={() =>
            window.open('http://pf.kakao.com/_FCGCs/chat', '_parent')
          }
        /> */}

        <div className='legal__info'>
          <p>
            - '젬'에서 직접 촬영한 모든 이미지의 저작권은 '젬'에게 있습니다.
          </p>
          <p>
            - '젬'에서 직접 촬영한 이미지를 제외한 모든 이미지의 저작권은 각
            업체에게 있습니다.
          </p>
          <p>
            - '젬'은 해당 업체의 홍보 목적 외에 그 어떤 용도로도 이미지를
            사용하지 않습니다.
          </p>
          <p>- 게시를 원치 않으실 경우 '내 가게 문의하기'로 문의 바랍니다.</p>
        </div>
        <img
          src='https://res.cloudinary.com/diimwnnmj/image/upload/v1623988968/GEM-%E1%84%92%E1%85%AA%E1%84%8B%E1%85%B5%E1%84%90%E1%85%B3_j3zim7.png'
          alt='footer-logo'
        />
        <p>Copyright © 2020 GEM All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
