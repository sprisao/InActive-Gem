import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import pages
import Home from './View/LandingPage/LandingPage';
import HotStores from './View/CategoryPage/HotStores';
import NewStores from './View/CategoryPage/NewStores';
import RestaurantsPage from './View/CategoryPage/Restaurants';
import CafesPage from './View/CategoryPage/Cafes';
import Store from './View/DetailsPage/DetailsPage';
import Error from './View/ErrorPage/Error';
import Ready from './View/ErrorPage/Ready';

// import components
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Header />
          <Home />
        </Route>
        <Route path='/category/hot'>
          <Header />
          <HotStores />
        </Route>
        <Route path='/category/new'>
          <Header />
          <NewStores />
        </Route>
        <Route path='/category/restaurants'>
          <Header />
          <RestaurantsPage />
        </Route>
        <Route path='/category/cafes'>
          <Header />
          <CafesPage />
        </Route>
        <Route path='/category/*'>
          <Header />
          <Ready />
        </Route>
        <Route path='/store/:id'>
          <Store />
        </Route>
        <Route path='*'>
          <Header />
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
