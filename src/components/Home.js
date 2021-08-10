import React from 'react';
import Promotion from './Promotion';

import { FiChevronRight } from 'react-icons/fi';

import { Link } from 'react-router-dom';
import './Home.css';

const Home = ({ history }) => {
  return (
    <section className='new__Navigation'>
      <div className='Navigation__Container'>
        <div className='FirstGrid__Wrap'>
          <Link to={`/category/맛집/전체/전체`}>
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
                <p>
                  검색없이 바로찾는
                  <br />
                  원주맛집!
                </p>
              </div>
              <div className='Navigtaion__FirstItem__Emoji'>
                <img
                  src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/bento-box_1f371.png'
                  alt=''
                  className='Home__Slider__Image'
                />
              </div>
            </div>
          </Link>
          <Link to={`/category/카페/전체/전체`}>
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
          <Link to={`/category/호프・주점/전체/전체`}>
            <div className='ThirdGrid__Item'>
              <div className='Navigation__Item__Header'>
                <p>호프·주점</p>
              </div>
              <div className='Navigation__Item__Emoji__Container'>
                <img
                  src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/beer-mug_1f37a.png'
                  alt=''
                />
              </div>
            </div>
          </Link>
          <Link to={`/category/운동・헬스/전체/전체`}>
            <div className='ThirdGrid__Item'>
              <div className='Navigation__Item__Header'>
                <p>운동·헬스</p>
              </div>
              <div className='Navigation__Item__Emoji__Container'>
                <img
                  src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/flexed-biceps_medium-light-skin-tone_1f4aa-1f3fc_1f3fc.png'
                  alt=''
                />
              </div>
            </div>
          </Link>
          <Link to={`/category/미용・뷰티/전체/전체`}>
            <div className='ThirdGrid__Item'>
              <div className='Navigation__Item__Header'>
                <p>미용·뷰티</p>
              </div>
              <div className='Navigation__Item__Emoji__Container'>
                <img
                  src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/lipstick_1f484.png'
                  alt=''
                />
              </div>
            </div>
          </Link>
          <Link to={`/category/스튜디오/전체/전체`}>
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
          <Link to={`/category/게임・노래/전체/전체`}>
            <div className='ThirdGrid__Item'>
              <div className='Navigation__Item__Header'>
                <p>게임·노래</p>
              </div>
              <div className='Navigation__Item__Emoji__Container'>
                <img
                  src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/video-game_1f3ae.png'
                  alt=''
                />
              </div>
            </div>
          </Link>
          <Link to={`/category/꽃/전체/전체`}>
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
          <Link to={`/category/키즈/전체/전체`}>
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
          <Link to={`/category/캠핑장/전체/전체`}>
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
        <Promotion history={history}></Promotion>
      </div>
    </section>
  );
};

export default Home;
