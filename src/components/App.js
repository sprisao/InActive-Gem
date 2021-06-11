import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import pages
import LandingPage from './View/LandingPage/LandingPage';
import EnterCityPage from './View/CategoryPage/EnterCityPage/EnterCityPage';
import CategoryData from './View/CategoryPage/CategoryData';
import DetailsData from './View/DetailsPage/DetailsData';
import SearchPage from './View/SearchPage/SearchPage';
import Error from './View/ErrorPage/Error';

import ScrollToTop from './ScrollToTop';

// import components
import Header from './Header';
import Navigation from './Navigation';
import SearchHeader from './View/SearchPage/SearchHeader';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route exact path='/'>
            <Header />
            <Navigation />
            <LandingPage />
          </Route>
          <Route exact path='/category/홈'>
            <Header />
            <Navigation />
            <LandingPage />
          </Route>
          <Route exact path='/category/원주기업도시'>
            <Header />
            <Navigation />
            <EnterCityPage />
          </Route>
          <Route exact path='/search'>
            <SearchHeader />
            <SearchPage />
          </Route>
          <Route path='/category/:firstCategory'>
            <Header />
            <Navigation />
            <CategoryData />
          </Route>
          <Route path='/category/:firstCategory/:secondCategory'>
            <Header />
            <Navigation />
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
