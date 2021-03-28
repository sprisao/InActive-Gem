import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Tags from './Tags';
import './CategoryPage.css';

const CategoryPage = () => {
  return (
    <div>
      <CloudinaryContext cloudName='diimwnnmj'>
        <Header />
        <div class='categorytitle'>
          <div class='category__icon'>
            <Image publicId='food_nuddsz' format='jpg'></Image>
          </div>
          <div class='category__name'>
            <h2>음식점</h2>
          </div>
        </div>
        <Footer />
      </CloudinaryContext>
    </div>
  );
};

export default CategoryPage;
