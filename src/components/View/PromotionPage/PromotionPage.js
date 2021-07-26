import React from 'react';
import Footer from '../../Footer';
import Seperator from '../../Separator';
import { useParams } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';

import './PromotionPage.css';

import { FiChevronLeft } from 'react-icons/fi';

import { useGlobalContext } from '../../context';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const PromotionPage = ({ history }) => {
  const { menu } = useGlobalContext();
  const { id } = useParams();
  const goBack = () => {
    history.goBack();
  };

  return (
    <>
      <section className='PromotionPage'>
        <div className='Promotion--Header'>
          <div className='Promotion--Header--Background'>
            <img
              className='Promotion--Header__BackgroundImage'
              src='https://res.cloudinary.com/diimwnnmj/image/upload/v1627194973/%ED%9B%88%EC%BD%A5%EC%8A%A4/%E1%84%92%E1%85%AE%E1%86%AB%E1%84%8F%E1%85%A9%E1%86%B8%E1%84%89%E1%85%B3_1_baionn.jpg'
              alt=''
            />
          </div>
          <div className='Promotion--Header--Contents'>
            <div
              className='Promotion--Navi'
              onClick={goBack}
              style={{ cursor: 'pointer' }}
            >
              <FiChevronLeft style={{ fontSize: '1.5rem' }} />
            </div>
            <div className='Promotion--Title'>
              <div className='Promotion--Title--Article'>
                <p>매력적인 한옥과 세련된 감각의 조화</p>
                <h3>훈콥스</h3>
                <h4>Hoon-Corps</h4>
              </div>
              <div className='Promotion--Menu--Container'>
                <Swiper navigation={true} className='Promotion-Menu-Swiper'>
                  {menu.map((item) => {
                    console.log(item);
                    if (item.store[0] === id) {
                      return (
                        <SwiperSlide
                          className='Promotion-Menu-Slider'
                          key={item.id}
                        >
                          <div className='Promotion--Menu--Item--Wrapper'>
                            <div className='Promotion--Menu--ImageContainer'>
                              <img src={item.menuImage[0].url} alt='' />
                            </div>
                            <div className='Promotion--Menu--Article'>
                              <h4>{item.menu}</h4>
                              <p>{item.menuDesc}</p>
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    } else return null;
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div className='Promotion--Article__Container'>
          <div className='Promotion--Article__Section'>
            <h3>
              멋스러운 한옥.<br></br> 그 속에서 만나는 따뜻함과 세련된 감각
            </h3>
            <p>
              고풍스러우면서도 정감가는 한옥을 새롭게 인테리어해 지어진
              '훈콥스'. 이 곳에 들어서면 마치 전에 이미 와 본 듯한 착각을
              불러일으키는, 왠지 모를 편안함과 아늑함이 느껴진다. 한옥 자체가
              주는 따뜻함에 세련된 소품들과 가구들이 주는 감각이 더해져
              훈콥스만의 고유한 분위기를 만들어 낸다.
            </p>
            <img
              src='https://res.cloudinary.com/diimwnnmj/image/upload/v1627194973/%ED%9B%88%EC%BD%A5%EC%8A%A4/%E1%84%92%E1%85%AE%E1%86%AB%E1%84%8F%E1%85%A9%E1%86%B8%E1%84%89%E1%85%B3_2_fnt2rg.jpg'
              alt=''
            />
            <img
              src='https://res.cloudinary.com/diimwnnmj/image/upload/v1627227556/%ED%9B%88%EC%BD%A5%EC%8A%A4/125489258_2780798415528192_5535862894154713392_n_eeamdd.jpg'
              alt=''
            />
          </div>
          <br></br>
          <Seperator />
          <div className='Promotion--Article__Section'>
            <h3>
              최고급 호텔에서나 만나볼 법한 <br></br> 감각적인 음료
            </h3>
            <p>
              훈콥스의 음료는 절대 평범하지 않다. 미국에서 요리에 대한 기초를
              쌓고 '푸드스타일리스트'로도 활동한 이력이 있는 사장님이 종종
              우연한 계기로 영감을 얻어 만들었다는 훈콥스의 음료. 그래서인지
              훈콥스의 음료는 비주얼부터 남다르며 맛의 깊이나 세세한 질감까지도
              여느 음료와는 다르다. 이러한 훈콥스의 음료는 <b>총 3번</b>에
              걸쳐서 마실 수 있다는 특별함이 숨어있는데,
            </p>
            <p>
              <b>1. 눈으로</b> - 아름다운 데코레이션과 비쥬얼을 맛본다.{' '}
              <br></br>
              <b>2. 상상으로</b> - 사장님의 자세한 설명을 들으며 어떤 맛일지
              머리속에 그려본다. <br></br>
              <b>3. 입으로</b> - 훈콥스의 분위기를 느끼며 음료의 매력을 맛본다.
              <br></br>
            </p>
            <img
              src='https://res.cloudinary.com/diimwnnmj/image/upload/v1627194973/%ED%9B%88%EC%BD%A5%EC%8A%A4/%E1%84%92%E1%85%AE%E1%86%AB%E1%84%8F%E1%85%A9%E1%86%B8%E1%84%89%E1%85%B3_5_mnxgzv.jpg'
              alt=''
            />
            <img
              src='https://res.cloudinary.com/diimwnnmj/image/upload/v1627195006/%ED%9B%88%EC%BD%A5%EC%8A%A4/189052461_193084739340787_1686756010861965519_n_y2qrfc.jpg'
              alt=''
            />
            <img
              src='https://res.cloudinary.com/diimwnnmj/image/upload/v1627223258/%ED%9B%88%EC%BD%A5%EC%8A%A4/117956414_2674806492757426_7431399631566384718_n_gtdmso.jpg'
              alt=''
            />
          </div>
          <br></br>
          <Seperator></Seperator>
          <div className='Promotion--Article__Section'>
            <h3>훈콥스의 감성과 색, 그리고 이야기</h3>
            <p>
              훈콥스의 모든 것은 사장님의 개인적인 취향이다. 그는 훈콥스라는
              공간 안에서 구석구석 꾸준히 본인의 색과 손길을 담는다. 손님들은
              그저 그가 오랜시간에 걸쳐 정성껏 만들어 놓은 그의 공간을 저마다의
              취향대로 차분히 즐기고 가면 그만이다.
            </p>
          </div>
          <div className='Promotion--Article__Section'>
            <img
              src='https://res.cloudinary.com/diimwnnmj/image/upload/v1627195006/%ED%9B%88%EC%BD%A5%EC%8A%A4/120810449_145138397306187_1137213068493685774_n_kmseb6.jpg'
              alt=''
            />
            <img
              src='https://res.cloudinary.com/diimwnnmj/image/upload/v1627195006/%ED%9B%88%EC%BD%A5%EC%8A%A4/158886746_449831956068544_2540808485262152960_n_atidlw.jpg'
              alt=''
            />
            <img
              src='https://res.cloudinary.com/diimwnnmj/image/upload/v1627224974/%ED%9B%88%EC%BD%A5%EC%8A%A4/188262777_496996114841928_1208401152770053338_n_nanfkm.jpg'
              alt=''
            />
          </div>
        </div>
        <div className='Visit-Button--Container'>
          <button
            className='Visit-Button'
            onClick={() => history.push(`/store/${id}`)}
          >
            방문하기
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PromotionPage;
