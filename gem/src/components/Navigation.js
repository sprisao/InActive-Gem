import React from 'react';
import { Image, CloudinaryContext } from 'cloudinary-react';

const Navigation = () => {
  return (
    <section class='HomeQuickCategory'>
      <CloudinaryContext cloudName='diimwnnmj'>
        <div class='HomeQuickCategory__wrap'>
          <a href='' class='HomeQuickCategory__Item'>
            <Image
              className='HomeQuickCategory__img'
              publicId='hot_whb0c9'
              format='jpg'
            ></Image>
            <p>인기장소</p>
          </a>
          <a href='' class='HomeQuickCategory__Item'>
            <Image
              className='HomeQuickCategory__img'
              publicId='new_v8vqmp'
              format='jpg'
            ></Image>
            <p>새로생긴 곳</p>
          </a>
          <a href='' class='HomeQuickCategory__Item'>
            <Image
              className='HomeQuickCategory__img'
              publicId='food_nuddsz'
              format='jpg'
            ></Image>
            <p>맛집</p>
          </a>
          <a href='' class='HomeQuickCategory__Item'>
            <Image
              className='HomeQuickCategory__img'
              publicId='cafe_dogisg'
              format='jpg'
            ></Image>
            <p>카페</p>
          </a>
          <a href='' class='HomeQuickCategory__Item'>
            <Image
              className='HomeQuickCategory__img'
              publicId='pub_ypq1dw'
              format='jpg'
            ></Image>
            <p>호프</p>
          </a>
        </div>
        <div class='HomeQuickCategory__wrap'>
          <a href='' class='HomeQuickCategory__Item'>
            <Image
              className='HomeQuickCategory__img'
              publicId='fitness_osoaom'
              format='jpg'
            ></Image>
            <p>운동・피트니스</p>
          </a>
          <a href='' class='HomeQuickCategory__Item'>
            <Image
              className='HomeQuickCategory__img'
              publicId='golf_rp6iid'
              format='jpg'
            ></Image>
            <p>스크린골프</p>
          </a>
          <a href='' class='HomeQuickCategory__Item'>
            <Image
              className='HomeQuickCategory__img'
              publicId='salon_ciebqq'
              format='jpg'
            ></Image>
            <p>미용실</p>
          </a>
          <a href='' class='HomeQuickCategory__Item'>
            <Image
              className='HomeQuickCategory__img'
              publicId='academy_vap3fs'
              format='jpg'
            ></Image>
            <p>학원</p>
          </a>
          <a href='' class='HomeQuickCategory__Item'>
            <Image
              className='HomeQuickCategory__img'
              publicId='studio_fne8nw'
              format='jpg'
            ></Image>
            <p>스튜디오</p>
          </a>
        </div>
        <div class='HomeQuickCategory__wrap'>
          <a href='' class='HomeQuickCategory__Item'>
            <Image
              className='HomeQuickCategory__img'
              publicId='pharmacy_ngaewq'
              format='jpg'
            ></Image>
            <p>약국</p>
          </a>
          <a href='' class='HomeQuickCategory__Item'>
            <Image
              className='HomeQuickCategory__img'
              publicId='hospital_ttw46g'
              format='jpg'
            ></Image>
            <p>병원</p>
          </a>
          <a href='' class='HomeQuickCategory__Item'>
            <Image
              className='HomeQuickCategory__img'
              publicId='dog_v7ba4i'
              format='jpg'
            ></Image>
            <p>애견</p>
          </a>
          <a href='' class='HomeQuickCategory__Item'>
            <Image
              className='HomeQuickCategory__img'
              publicId='shopping_aevysq'
              format='jpg'
            ></Image>
            <p>마트</p>
          </a>
          <a href='' class='HomeQuickCategory__Item'>
            <Image
              className='HomeQuickCategory__img'
              publicId='entertainment_b29fhy'
              format='jpg'
            ></Image>
            <p>엔터테인먼트</p>
          </a>
        </div>
      </CloudinaryContext>
    </section>
  );
};

export default Navigation;
