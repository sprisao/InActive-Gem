import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Tags from './Tags';
import News from './News';
import Section from './Section';
import Slide from './Slide';
import Footer from './Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Navigation />
      <Tags />
      <News />
      <Slide section='new' filter='음식점' />
      <Section section='new' filter='음식점' />
      <Section section='hot' filter='카페' />
      <Section section='restaurants' filter='음식점' />
      <Section section='cafes' filter='카페' />
      <Footer />
    </div>
  );
}

export default App;
