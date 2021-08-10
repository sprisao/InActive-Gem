import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import pages
import LandingPage from './View/LandingPage/LandingPage';
import PromotionPage from './View/PromotionPage/PromotionPage';
import PromotionTest from './View/PromotionPage/PromotionPage2';
import RestaurantPage from './View/CategoryPage/RestaurantPage/RestaurantPage';
import CafePage from './View/CategoryPage/CafePage/CafePage';
import CategoryData from './View/CategoryPage/CategoryData';
import DetailsData from './View/DetailsPage/DetailsData';
import Error from './View/ErrorPage/Error';

import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route
            exact
            path='/promotion/recY9GN6sHLzpLsHQ'
            component={PromotionPage}
          />
          <Route
            path='/promotion/recsHZU4F59Zp66cK'
            component={PromotionTest}
          />
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
          <Route path='/store/:id' component={DetailsData} />
          <Route path='*' component={Error} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
