import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import pages
import Home from './View/LandingPage/LandingPage';
import CategoryPage from './View/CategoryPage/CategoryPage';
import Store from './View/DetailsPage/DetailsPage';
import Error from './View/ErrorPage/Error';
import Ready from './View/ErrorPage/Ready';

import Test from './Apitest';

// import components
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Header />
          {/* <Home /> */}
          <Test />
        </Route>
        <Route path='/category/:id'>
          <CategoryPage />
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
