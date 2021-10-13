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
        <hr style={{ border: 'solid #E6E6E6 1px' }}></hr>
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
      <hr></hr>
      <div className='footer__container'>
        <div className='companyName'>
          <span
            style={{
              fontWeight: '600',
              fontSize: '15px',
              letterSpacing: '-0.75px',
              color: '#555',
            }}
          >
            BRUCE CORPORATION
          </span>
        </div>

        <div className='legal__info'>
          <span style={{ color: '#555' }}>
            브루스 코퍼레이션 | 대표: 최종혁
            <br />
            사업자등록번호:103-28-01020 | 통신판매업: 2020-강원원주-00664
            <br />
            주소: 강원도 원주시 봉대길 5-2
            <br />
            메일: sprisao@naver.com
          </span>
          {/* <p>・ 젬에서 직접 촬영한 모든 이미지의 저작권은 젬에게 있습니다.</p>
          <p>
            ・ 젬에서 직접 촬영한 이미지를 제외한 모든 업체의 이미지 저작권은 각
            업체에게 있습니다.
          </p>
          <p>
            ・ 젬은 해당 업체의 홍보 목적 외에 그 어떤 용도로도 이미지를
            사용하지 않습니다.
          </p>
          <p>・ 홍보를 원치 않으실 경우 '내 가게 문의하기'로 문의 바랍니다.</p> */}
        </div>
        <div className='Copyrights'>
          <p>Copyright © 2020 Bruce Corp. All rights reserved.</p>
          <br />
          <p>
            브루스코퍼레이션은 통신판매중개자이며, 통신판매의 당사자가 아닙니다.
            또한 판매자와 구매자간의 직거래에 대하여 당사는 관여하지 않기 때문에
            거래에 대해서는 책임을 지지 않습니다.
          </p>
        </div>
        <div className='Policies'>
          <a href='/useragreements'>이용약관</a>
          <span> ・ </span>
          <a href='/storeagreements'>업체이용약관</a>
          <span> ・ </span>
          <a href='/privacy'>개인정보취급방침</a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
