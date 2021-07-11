import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import pages
import LandingPage from './View/LandingPage/LandingPage';
import RestaurantPage from './View/CategoryPage/RestaurantPage/RestaurantPage';
import CafePage from './View/CategoryPage/CafePage/CafePage';
import CategoryData from './View/CategoryPage/CategoryData';
import DetailsData from './View/DetailsPage/DetailsData';
import SearchPage from './View/SearchPage/SearchPage';
import Error from './View/ErrorPage/Error';

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
            <LandingPage />
          </Route>
          <Route exact path='/category/맛집'>
            <RestaurantPage />
          </Route>
          <Route exact path='/category/카페'>
            <CafePage />
          </Route>
          <Route exact path='/search'>
            <SearchHeader />
            <SearchPage />
          </Route>
          <Route path='/category/:firstCategory'>
            <CategoryData />
            <Footer />
          </Route>
          <Route path='/category/:firstCategory/:secondCategory'>
            <CategoryData />
            <Footer />
          </Route>
          <Route path='/store/:id'>
            <DetailsData />
          </Route>
          <Route path='*'>
            <Header />
            <Error />
            <Footer />
          </Route>
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
