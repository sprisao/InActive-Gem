import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Tags from './Tags';
import News from './News';
import NewStores from './NewSection';
import Hotstores from './HotSection';
import Restaurants from './RestaurantSection';
import Footer from './Footer';
import Cafes from './CafeSection';

function App() {
  return (
    <div className='App'>
      <Header />
      <Navigation />
      <Tags />
      <News />
      <NewStores />
      <Hotstores />
      <Restaurants />
      <Cafes />
      <Footer />
    </div>
  );
}

export default App;
