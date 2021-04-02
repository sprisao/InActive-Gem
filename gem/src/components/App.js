import React from 'react';
import Header from './Header';
import Home from './View/LandingPage/LandingPage';
import HotStores from './View/CategoryPage/HotStores';
import NewStores from './View/CategoryPage/NewStores';
import RestaurantsPage from './View/CategoryPage/Restaurants';
import CafesPage from './View/CategoryPage/Cafes';
import Detail from './View/DetailsPage/DetailPage';
import Error from './View/ErrorPage/Error';
import Ready from './View/ErrorPage/Ready';
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
        <Route path='/category/hot'>
          <HotStores />
        </Route>
        <Route path='/category/new'>
          <NewStores />
        </Route>
        <Route path='/category/restaurants'>
          <RestaurantsPage />
        </Route>
        <Route path='/category/cafes'>
          <CafesPage />
        </Route>
        <Route path='/category/*'>
          <Ready />
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
