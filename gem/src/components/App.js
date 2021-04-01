import React from 'react';
import Header from './Header';
import Home from './LandingPage';
import Category from './CategoryPage';
import Detail from './DetailPage';
import Error from './Error';
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
        <Route path='/category'>
          <Category />
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
