import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';

// import pages
import LoginPage from './View/LoginPage/LoginPage';
import RegisterPage from './View/LoginPage/RegisterPage';
import LandingPage from './View/LandingPage/LandingPage';
import EventsPage from './View/EventsPage/EventsPage';
import BookmarkPage from './View/BookmarkPage/BookmarkPage';
import SearchPage from './View/SearchPage/SearchPage';
import CategoryPage from './View/CategoryPage/CategoryPage';
import DetailsData from './View/DetailsPage/DetailsData';
import Privacy from './Privacy';
import UserAgreements from './UserAgreements';
import StoreAgreements from './StoreAgreements';
import Error from './View/ErrorPage/Error';
import Loading from './Loading';

import ScrollToTop from './ScrollToTop';

import { getAuth } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, clearUser } from '../redux/actions/user_actions';

const auth = getAuth();
const user = auth.currentUser;

function App() {
  let dispatch = useDispatch();
  let history = useHistory();

  const isLoading = useSelector((state) => state.user.isLoading);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      // 로그인 상태를 Redux로 이동
      if (!user) {
        history.push('/login');
        dispatch(clearUser(user));
      } else {
        history.push('/');
        dispatch(setUser(user));
      }
    });
  }, []);

  if (isLoading) {
    return <Loading />;
  } else
    return (
      <ScrollToTop>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/register' component={RegisterPage} />
          <Route exact path='/events' component={EventsPage} />
          <Route exact path='/bookmarks' component={BookmarkPage} />
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
    );
}

export default App;
