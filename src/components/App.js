import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import pages
import Home from './View/LandingPage/LandingPage';
import CategoryPage from './View/CategoryPage/CategoryPage';
import Details from './View/DetailsPage/DetailsData';
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
          <Route exact path='/category/1'>
            <Header />
            <Home />
          </Route>
          <Route path='/category/:id'>
            <CategoryPage />
          </Route>
          <Route path='/category/*'>
            <Header />
            <Ready />
          </Route>
          <Route path='/store/:id'>
            <Details />
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
