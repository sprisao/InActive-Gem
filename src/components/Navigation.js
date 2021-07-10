import React from 'react';

import { FiChevronRight } from 'react-icons/fi';

import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <section className='new__Navigation'>
      <div className='Navigation__Container'>
        <div className='FirstGrid__Wrap'>
          <Link to={`/category/맛집`}>
            <div className='FirstGrid__Item'>
              <div className='Navigation__Item__Header'>
                <p>맛집</p>
                <FiChevronRight
                  style={{
                    fontSize: '1.5rem',
                    strokeWidth: '3px',
                    color: '#c6c6c6',
                    marginLeft: '0.3rem',
                  }}
                />
              </div>
              <div className='Navigation__Item__Message'>
                <p>아직도 '원주 맛집' 검색하세요?</p>
              </div>
              <div className='Navigtaion__FirstItem__Emoji'>
                <img
                  src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/bento-box_1f371.png'
                  alt=''
                />
              </div>
            </div>
          </Link>
          <Link to={`/category/카페`}>
            <div className='FirstGrid__Item'>
              <div className='Navigation__Item__Header'>
                <p>카페</p>
                <FiChevronRight
                  style={{
                    fontSize: '1.5rem',
                    strokeWidth: '3px',
                    color: '#c6c6c6',
                    marginLeft: '0.3rem',
                  }}
                />
              </div>
              <div className='Navigation__Item__Message'>
                <p>
                  원주의 '거의'
                  <br /> 모든 카페를 한 눈에!
                </p>
              </div>
              <div className='Navigtaion__FirstItem__Emoji'>
                <img
                  src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/shaved-ice_1f367.png'
                  alt=''
                />
              </div>
            </div>
          </Link>
        </div>
        <div className='ThirdGrid__Wrap'>
          <Link to={`/category/호프・주점`}>
            <div className='ThirdGrid__Item'>
              <div className='Navigation__Item__Header'>
                <p>호프・주점</p>
              </div>
              <div className='Navigation__Item__Emoji__Container'>
                <img
                  src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/beer-mug_1f37a.png'
                  alt=''
                />
              </div>
            </div>
          </Link>
          <Link to={`/category/운동・헬스`}>
            <div className='ThirdGrid__Item'>
              <div className='Navigation__Item__Header'>
                <p>운동・헬스</p>
              </div>
              <div className='Navigation__Item__Emoji__Container'>
                <img
                  src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/flexed-biceps_medium-light-skin-tone_1f4aa-1f3fc_1f3fc.png'
                  alt=''
                />
              </div>
            </div>
          </Link>
          <Link to={`/category/미용・뷰티`}>
            <div className='ThirdGrid__Item'>
              <div className='Navigation__Item__Header'>
                <p>미용・뷰티</p>
              </div>
              <div className='Navigation__Item__Emoji__Container'>
                <img
                  src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/lipstick_1f484.png'
                  alt=''
                />
              </div>
            </div>
          </Link>
          <Link to={`/category/스튜디오`}>
            <div className='ThirdGrid__Item'>
              <div className='Navigation__Item__Header'>
                <p>스튜디오</p>
              </div>
              <div className='Navigation__Item__Emoji__Container'>
                <img
                  src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/camera_1f4f7.png'
                  alt=''
                />
              </div>
            </div>
          </Link>
          <Link to={`/category/게임・노래`}>
            <div className='ThirdGrid__Item'>
              <div className='Navigation__Item__Header'>
                <p>게임・노래</p>
              </div>
              <div className='Navigation__Item__Emoji__Container'>
                <img
                  src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/video-game_1f3ae.png'
                  alt=''
                />
              </div>
            </div>
          </Link>
          <Link to={`/category/꽃`}>
            <div className='ThirdGrid__Item'>
              <div className='Navigation__Item__Header'>
                <p>꽃</p>
              </div>
              <div className='Navigation__Item__Emoji__Container'>
                <img
                  src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/tulip_1f337.png'
                  alt=''
                />
              </div>
            </div>
          </Link>
          <Link to={`/category/키즈`}>
            <div className='ThirdGrid__Item'>
              <div className='Navigation__Item__Header'>
                <p>키즈</p>
              </div>
              <div className='Navigation__Item__Emoji__Container'>
                <img
                  src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/teddy-bear_1f9f8.png'
                  alt=''
                />
              </div>
            </div>
          </Link>
          <Link to={`/category/캠핑장`}>
            <div className='ThirdGrid__Item'>
              <div className='Navigation__Item__Header'>
                <p>캠핑장</p>
              </div>
              <div className='Navigation__Item__Emoji__Container'>
                <img
                  src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/camping_1f3d5-fe0f.png'
                  alt=''
                />
              </div>
            </div>
          </Link>
        </div>
        <div className='SecondGrid__Wrap'>
          <Link to={`/`}>
            <div className='SecondGrid__Item'>
              <div className='Navigation__Item__Header'>
                <p>가볼만한 곳</p>
                <FiChevronRight
                  style={{
                    fontSize: '1.35rem',
                    strokeWidth: '3px',
                    color: '#c6c6c6',
                    marginLeft: '0.3rem',
                  }}
                />
              </div>
              <div className='Navigation__Item__ComingSoon'>
                <p>- Coming Soon -</p>
              </div>
            </div>
          </Link>
        </div>
        {/* <div className='FourthGrid__Wrap'>
          <Link to={`/`}>
          <div className='FourthGrid__Item'>
          <div className='Navigation__Item__Header'>
          <p>원주혁신도시</p>
          <FiChevronRight
          style={{
            fontSize: '1.5rem',
            strokeWidth: '3px',
            color: '#c6c6c6',
            marginLeft: '0.3rem',
          }}
          />
          </div>
              <div className='Navigation__Item__ComingSoon'>
                <p>- Coming Soon -</p>
              </div>
            </div>
          </Link>
          <Link to={`/`}>
            <div className='FourthGrid__Item'>
              <div className='Navigation__Item__Header'>
                <p>원주기업도시</p>
                <FiChevronRight
                  style={{
                    fontSize: '1.5rem',
                    strokeWidth: '3px',
                    color: '#c6c6c6',
                    marginLeft: '0.3rem',
                  }}
                />
              </div>
              <div className='Navigation__Item__ComingSoon'>
                <p>- Coming Soon -</p>
              </div>
            </div>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default Navigation;
