import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Tags from './Tags';
import News from './News';
import SectionGrid from './SectionGrid';
import SectionSlide from './SectionSlide';
import Footer from './Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Navigation />
      <Tags />
      <News />
      <SectionSlide section='new' filter='음식점' />
      <SectionSlide section='hot' filter='카페' />
      <SectionGrid section='restaurants' filter='음식점' />
      <SectionGrid section='cafes' filter='카페' />
      <Footer />
    </div>
  );
}

export default App;
