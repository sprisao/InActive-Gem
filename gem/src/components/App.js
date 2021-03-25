import React, { useState } from 'react';
import Header from './header';
import Navigation from './Navigation';
import Tags from './Tags';
import News from './News';
import NewStores from './Newstores';

function App() {
  return (
    <div className='App'>
      <Header />
      <Navigation />
      <Tags />
      <News />
      <NewStores />
    </div>
  );
}

export default App;
