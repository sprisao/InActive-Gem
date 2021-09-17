import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import pages
import LandingPage from './View/LandingPage/LandingPage';
import EventsPage from './View/EventsPage/EventsPage';
import RestaurantPage from './View/CategoryPage/RestaurantPage/RestaurantPage';
import CafePage from './View/CategoryPage/CafePage/CafePage';
import CategoryData from './View/CategoryPage/CategoryData';
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
          <Route exact path='/events' component={EventsPage} />
          <Route
            exact
            path='/category/맛집/:locationCategory/:secondCategory'
            component={RestaurantPage}
          />
          <Route
            exact
            path='/category/카페/:locationCategory/:secondCategory'
            component={CafePage}
          />
          <Route
            path='/category/:firstCategory/:locationCategory/:secondCategory'
            component={CategoryData}
          />
          <Route
            path='/category/:firstCategory/:secondCategory'
            component={CategoryData}
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
