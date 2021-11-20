import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

// import pages
import LoginPage from './View/LoginPage/LoginPage';
import Loading from './Loading';
import RegisterPage from './View/LoginPage/RegisterPage';
import PwresetPage from './View/LoginPage/PwresetPage';
import LandingPage from './View/LandingPage/LandingPage';
import EventsPage from './View/EventsPage/EventsPage';
import BookmarkPage from './View/BookmarkPage/BookmarkPage';
import SearchPage from './View/SearchPage/SearchPage';
import CategoryPage from './View/CategoryPage/CategoryPage';
import SpotsCategoryPage from './View/CategoryPage/SpotsPage/SpotsCategoryPage';
import SpotsPage from './View/CategoryPage/SpotsPage/SpotsPage';
import CategorySelectPage from './View/CategoryPage/CategorySelectPage';

import DetailsData from './View/DetailsPage/DetailsData';
import Privacy from './Privacy';
import UserAgreements from './UserAgreements';
import StoreAgreements from './StoreAgreements';
import Error from './View/ErrorPage/Error';

import ScrollToTop from './ScrollToTop';

import { getAuth } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser, clearUser } from '../redux/actions/user_actions';

import { useGlobalContext } from './context';

const auth = getAuth();

function App() {
  let dispatch = useDispatch();
  const { restaurantLoading } = useGlobalContext();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      // 로그인 상태를 Redux로 이동
      if (!user) {
        // history.push('/login');
        dispatch(clearUser(user));
      } else {
        // history.push('/');
        dispatch(setUser(user));
      }
    });
  }, [dispatch]);

  if (restaurantLoading) {
    return <Loading />;
  } else
    return (
      <ScrollToTop>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/pwreset' component={PwresetPage} />
          <Route exact path='/register' component={RegisterPage} />
          <Route exact path='/events' component={EventsPage} />
          <Route exact path='/bookmarks' component={BookmarkPage} />
          <Route exact path='/search/:input' component={SearchPage} />
          <Route
            exact
            path='/select/:firstCategory'
            component={CategorySelectPage}
          />
          <Route exact path='/sightseeing' component={SpotsPage} />

          <Route
            path='/category/:firstCategory/:locationCategory/:secondCategory'
            component={CategoryPage}
          />

          <Route
            path='/sightseeing/:spotsCategory/:spotsLocation'
            component={SpotsCategoryPage}
          />

          <Route exact path='/privacy' component={Privacy} />
          <Route exact path='/useragreements' component={UserAgreements} />
          <Route exact path='/storeagreements' component={StoreAgreements} />
          <Route path='/store/:id' component={DetailsData} />
          <Route path='*' component={Error} />
        </Switch>
      </ScrollToTop>
    );
}

export default App;
