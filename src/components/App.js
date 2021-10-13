import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import pages
import LoginPage from './View/LoginPage/LoginPage';
import RegisterPage from './View/LoginPage/RegisterPage';
import LandingPage from './View/LandingPage/LandingPage';
import EventsPage from './View/EventsPage/EventsPage';
import SearchPage from './View/SearchPage/SearchPage';
import CategoryPage from './View/CategoryPage/CategoryPage';
import DetailsData from './View/DetailsPage/DetailsData';
import Privacy from './Privacy';
import UserAgreements from './UserAgreements';
import StoreAgreements from './StoreAgreements';
import Error from './View/ErrorPage/Error';

import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/register' component={RegisterPage} />
          <Route exact path='/events' component={EventsPage} />
          <Route exact path='/search/:input' component={SearchPage} /> =
          <Route
            path='/category/:firstCategory/:locationCategory'
            component={CategoryPage}
          />
          <Route exact path='/privacy' component={Privacy} />
          <Route exact path='/useragreements' component={UserAgreements} />
          <Route exact path='/storeagreements' component={StoreAgreements} />
          <Route path='/store/:id' component={DetailsData} />
          <Route path='*' component={Error} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
