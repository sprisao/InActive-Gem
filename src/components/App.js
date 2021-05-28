import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import pages
import LandingPage from './View/LandingPage/LandingPage';
import CategoryData from './View/CategoryPage/CategoryData';
import DetailsData from './View/DetailsPage/DetailsData';
import SearchPage from './View/SearchPage/SearchPage';
import Error from './View/ErrorPage/Error';
import Ready from './View/ErrorPage/Ready';

import ScrollToTop from './ScrollToTop';

// import components
import Header from './Header';
import SearchHeader from './View/SearchPage/SearchHeader';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route exact path='/'>
            <Header />
            <LandingPage />
          </Route>
          <Route exact path='/category/홈'>
            <Header />
            <LandingPage />
          </Route>
          <Route exact path='/search'>
            <SearchHeader />
            <SearchPage />
          </Route>
          <Route path='/category/:firstCategory'>
            <Header />
            <CategoryData />
          </Route>
          <Route path='/category/:firstCategory/:secondCategory'>
            <Header />
            <CategoryData />
          </Route>
          {/* <Route path='/category/*'>
            <Header />
            <Ready />
          </Route> */}
          <Route path='/store/:id'>
            <Header />
            <DetailsData />
          </Route>
          <Route path='*'>
            <Header />
            <Error />
          </Route>
        </Switch>
        <Footer />
      </ScrollToTop>
    </Router>
  );
}

export default App;
