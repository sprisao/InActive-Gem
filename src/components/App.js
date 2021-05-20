import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import pages
import Home from './View/LandingPage/LandingPage';
import CategoryData from './View/CategoryPage/CategoryData';
import DetailsData from './View/DetailsPage/DetailsData';
import Error from './View/ErrorPage/Error';
import Ready from './View/ErrorPage/Ready';

import ScrollToTop from './ScrollToTop';

// import components
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route exact path='/'>
            <Header />
            <Home />
          </Route>
          <Route exact path='/category/홈'>
            <Header />
            <Home />
          </Route>
          <Route path='/category/:ctgryTitle'>
            <CategoryData />
          </Route>
          <Route path='/category/*'>
            <Header />
            <Ready />
          </Route>
          <Route path='/store/:id'>
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
