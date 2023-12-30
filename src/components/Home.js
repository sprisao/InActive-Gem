import React from 'react';
import Promotion from './Promotion';
import { FiChevronRight } from 'react-icons/fi';

import { Link } from 'react-router-dom';
import './Home.css';
export const  firstCategoryMapper = {
  restaurants: '맛집',
  cafes: '카페',
  bars: '호프・주점',
  beautyShops: '미용・뷰티',
  studios: '사진',
  petShops: '반려동물',
  gyms: '운동・헬스',
  academies: '교육・학원',
  pharmacies: '약국',
  kidShops: '키즈',
  flowerShops: '꽃',
};

const Home = ({ history }) => {

  return (
    <section className='new__Navigation'>
      <div className='Navigation__Container'>
        <div className='FirstGrid__Wrap'>
          <Link to={`/select/restaurants`}>
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
                  src='https://res.cloudinary.com/diimwnnmj/image/upload/v1628679629/icons/u1F363_czigul.png'
                  alt='맛집'
                />
              </div>
            </div>
          </Link>
          <Link to={`/select/cafes`}>
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
                  src='https://res.cloudinary.com/diimwnnmj/image/upload/v1628679629/icons/u1F367_phraji.png'
                  alt='카페'
                />
              </div>
            </div>
          </Link>
        </div>
        <div className='ThirdGrid__Wrap'>
          <Link to={`/select/bars`}>
            <div className='ThirdGrid__Item'>
              <div className='Navigation__Item__Header'>
                <p>호프·주점</p>
              </div>
              <div className='Navigation__Item__Emoji__Container'>
                <img
                  src='https://em-content.zobj.net/source/apple/354/beer-mug_1f37a.png'
                  alt=''
                />
              </div>
            </div>
          </Link>
          <Link to={`/select/gyms`}>
            <div className='ThirdGrid__Item'>
              <div className='Navigation__Item__Header'>
                <p>운동·헬스</p>
              </div>
              <div className='Navigation__Item__Emoji__Container'>
                <img
                  src='https://em-content.zobj.net/source/apple/354/person-lifting-weights_light-skin-tone_1f3cb-1f3fb_1f3fb.png'
                  alt=''
                />
              </div>
            </div>
          </Link>
          <Link to={`/select/beautyShops`}>
            <div className='ThirdGrid__Item'>
              <div className='Navigation__Item__Header'>
                <p>미용·뷰티</p>
              </div>
              <div className='Navigation__Item__Emoji__Container'>
                <img
                  src='https://em-content.zobj.net/source/apple/354/lipstick_1f484.png'
                  alt=''
                />
              </div>
            </div>
          </Link>
          <Link to={`/select/studios`}>
            <div className='ThirdGrid__Item'>
              <div className='Navigation__Item__Header'>
                <p>사진</p>
              </div>
              <div className='Navigation__Item__Emoji__Container'>
                <img
                  src='https://em-content.zobj.net/source/apple/354/camera-with-flash_1f4f8.png'
                  alt=''
                />
              </div>
            </div>
          </Link>
          <Link to={`/select/petShops`}>
            <div className='ThirdGrid__Item'>
              <div className='Navigation__Item__Header'>
                <p>반려동물</p>
              </div>
              <div className='Navigation__Item__Emoji__Container'>
                <img
                  src='https://em-content.zobj.net/source/apple/354/service-dog_1f415-200d-1f9ba.png'
                  alt='반려동물'
                />
              </div>
            </div>
          </Link>
          <Link to={`/select/flowerShops`}>
            <div className='ThirdGrid__Item'>
              <div className='Navigation__Item__Header'>
                <p>꽃</p>
              </div>
              <div className='Navigation__Item__Emoji__Container'>
                <img
                  src='https://em-content.zobj.net/source/apple/354/tulip_1f337.png'
                  alt=''
                />
              </div>
            </div>
          </Link>
          <Link to={`/select/kidShops`}>
            <div className='ThirdGrid__Item'>
              <div className='Navigation__Item__Header'>
                <p>키즈</p>
              </div>
              <div className='Navigation__Item__Emoji__Container'>
                <img
                  src='https://em-content.zobj.net/source/apple/354/teddy-bear_1f9f8.png'
                  alt=''
                />
              </div>
            </div>
          </Link>
          <Link to={`/select/academies`}>
            <div className='ThirdGrid__Item'>
              <div className='Navigation__Item__Header'>
                <p>교육·학원</p>
              </div>
              <div className='Navigation__Item__Emoji__Container'>
                <img
                  src='https://em-content.zobj.net/source/apple/354/woman-teacher-light-skin-tone_1f469-1f3fb-200d-1f3eb.png'
                  alt=''
                />
              </div>
            </div>
          </Link>
        </div>
        <div className='SpotsGrid--Wrapper'>
          <Link to={`/sightseeing`}>
            <div className='Spots--Button'>
              <div className='Spots--Header'>
                <h3>
                  가볼만한 곳
                  <FiChevronRight
                    style={{
                      fontSize: '1.5rem',
                      strokeWidth: '3px',
                      color: '#c6c6c6',
                      marginLeft: '0.3rem',
                    }}
                  />
                </h3>
                <span>관광, 레져, 사진 맛집까지 </span>
              </div>
              <div className='Spots--Emoji_Container'>
                <img
                  src='https://em-content.zobj.net/source/apple/354/snow-capped-mountain_1f3d4-fe0f.png'
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
