import React from 'react';
import Footer from '../../Footer';
import Seperator from '../../Separator';

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
  const name = '레제푸';
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
              src='https://res.cloudinary.com/diimwnnmj/image/upload/v1628481856/%EB%A0%88%EC%A0%9C%ED%91%B8/pstatic_1_jga6kp.jpg'
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
                <p>오랜시간 일상을 공유하는 파리의 카페처럼</p>
                <h3>레제푸</h3>
                <h4>Les époux</h4>
              </div>
              <div className='Promotion--Menu--Container'>
                <Swiper
                  spaceBetween={0}
                  slidesPerView={1}
                  navigation={true}
                  className='Promotion-Menu-Swiper'
                >
                  {menu.map((item) => {
                    console.log(item.storeName);
                    console.log(name);
                    if (item.storeName[0] === name) {
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
              오랜시간 함께 일상을 공유하는 <br></br>여유로운 파리의 카페처럼
            </h3>
            <p>주말 오후. 한적한 파리의 카페를 떠올리면 어떤 모습일까?</p>
            <p>
              아마도 누구나 적당한 백색 소음에 햇살이 들어오며 고소한 커피향이
              느껴지는 그런 여유로운 모습을 떠올릴 것이다.
            </p>
            <img
              src='https://res.cloudinary.com/diimwnnmj/image/upload/v1628482569/%EB%A0%88%EC%A0%9C%ED%91%B8/Untitled_vw3epa.png'
              alt=''
              style={{ height: '18rem' }}
            />
            <p className='caption'>
              *파리지앵과 가장 오래 일상을 공유한 카페 중 하나인 '레 뒤 마곳 LES
              DEUX MAGOTS'. 헤밍웨이, 피카소, 사르트르 등 유명한 작가와 예술가,
              철학가들이 자주 들려 일상을 즐긴 카페로 유명하다.
            </p>
            <h3 style={{ textAlign: 'end' }} className='right__header'>
              적당한 백색소음 <br></br>따뜻한 햇살 <br></br>고소한 커피향
            </h3>
            <p style={{ textAlign: 'end' }}>
              유럽의 카페는 편안하면서도 일상적인 분위기로 <br></br>생각을
              정리하고 친구와 일상을 공유하는 휴식공간을 떠올리게 한다.
              <br></br>레제푸도 유럽 카페의 그런 모습들을 닮았다.
            </p>
            <img
              src='https://res.cloudinary.com/diimwnnmj/image/upload/v1628481856/%EB%A0%88%EC%A0%9C%ED%91%B8/%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB_emxbfj.jpg'
              alt=''
            />
            <img
              src='https://res.cloudinary.com/diimwnnmj/image/upload/v1628481856/%EB%A0%88%EC%A0%9C%ED%91%B8/%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB2_yldqve.jpg'
              alt=''
            />
          </div>
          <div className='Promotion--Article__Section'>
            <h3>
              책 한권, 커피 한잔으로 즐기는<br></br> 일상적인 편안함
            </h3>
            <p>
              북적이고 소란스러운 곳 보단 한적하고 편안한 분위기를 찾게 되는
              요즘. 그래서 레제푸의 분위기는 오히려 계속해서 발걸음을 향하게
              하는 매력적인 요소이지 않을까?
            </p>
            <img
              src='https://res.cloudinary.com/diimwnnmj/image/upload/v1628481857/%EB%A0%88%EC%A0%9C%ED%91%B8/les_epoux_207726819_263993568856911_1332086580473376569_n_ut7xgh.jpg'
              alt=''
            />
            <img
              src='https://res.cloudinary.com/diimwnnmj/image/upload/v1628485654/%EB%A0%88%EC%A0%9C%ED%91%B8/les_epoux_199796951_138413364938870_7285269620484642746_n_inwqnu.jpg'
              alt=''
            />
            <img
              src='https://res.cloudinary.com/diimwnnmj/image/upload/v1628485791/%EB%A0%88%EC%A0%9C%ED%91%B8/204412086_486840232418421_4600584645161997867_n_1_kxjqpv.jpg'
              alt=''
            />
          </div>
          <div className='Promotion--Article__Section'>
            <h3 style={{ textAlign: 'start' }}>Les époux : 그 부부</h3>
            <p style={{ textAlign: 'start' }}>
              레제푸에서 더욱 친근한 감성이 느껴지는 이유는 아마 부부가 함께
              운영하기 때문일 수도 있다. 14년 커피 경력의 남편이 커피를 내리고
              부인이 디저트를 굽는다. 그래서 이름도 '그 부부'를 뜻하는 불어인
              'Les époux'로 지었다고 한다.
            </p>
            <img
              src='https://res.cloudinary.com/diimwnnmj/image/upload/v1628481856/%EB%A0%88%EC%A0%9C%ED%91%B8/les_epoux_226578124_1680415222142966_768095356627785075_n_d7kvmr.jpg'
              alt=''
            />
            <p style={{ textAlign: 'end' }}>
              능숙하게 내려진 커피와 정성이 듬뿍 들어간 디저트가 함께라면
              여유로움에 더 큰 만족도를 더해준다.
            </p>
            <img
              src='https://res.cloudinary.com/diimwnnmj/image/upload/v1628486917/%EB%A0%88%EC%A0%9C%ED%91%B8/211481117_165179859005876_3302095591726026327_n_kdlafy.jpg'
              alt=''
            />
            <img
              src='https://res.cloudinary.com/diimwnnmj/image/upload/v1628481854/%EB%A0%88%EC%A0%9C%ED%91%B8/les_epoux_200973489_500963467991446_2835687459397400868_n_ndftst.jpg'
              alt=''
            />
          </div>
          <div className='Promotion--Article__Section'>
            <h3 style={{ textAlign: 'end' }}>
              오랜시간 함께 <br></br>일상을 공유하고 싶은 장소
            </h3>
            <p style={{ textAlign: 'end' }}>
              한적한 오후. 혼자서, 혹은 친구와 따뜻한 햇살과 편안한 분위기
              속에서 창밖을 지나는 차와 사람들을 바라보며 여유로운 시간을 보내고
              싶다면.
              <br></br>레제푸를 한번 방문해 보면 어떨까?
            </p>
          </div>
        </div>
        <div className='Visit-Button--Container'>
          <button
            className='Visit-Button'
            onClick={() =>
              history.push(`/store/recHxDywvzNR8zZKA
`)
            }
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
