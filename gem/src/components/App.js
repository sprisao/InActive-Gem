import React from 'react';
import Header from './Header';
import Home from './view/LandingPage/LandingPage';
import RestaurantsPage from './view/CategoryPage/Restaurants';
import Detail from './view/DetailsPage/DetailPage';
import Error from './view/ErrorPage/Error';
import Footer from './Footer';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/category/restaurants'>
          <RestaurantsPage />
        </Route>
        <Route path='/store/:id'>
          <Detail />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
