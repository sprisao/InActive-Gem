import React from 'react';
import {Route, Switch} from 'react-router-dom';

// import pages
import LoginPage from './View/LoginPage/LoginPage';
import RegisterPage from './View/LoginPage/RegisterPage';
import PwresetPage from './View/LoginPage/PwresetPage';
import LandingPage from './View/LandingPage/LandingPage';
import EventsPage from './View/EventsPage/EventsPage';
import BookmarkPage from './View/BookmarkPage/BookmarkPage';
import SearchPage from './View/SearchPage/SearchPage';
import CategoryPage from './View/CategoryPage/CategoryPage';
import SpotsCategoryPage from './View/CategoryPage/SpotsPage/SpotsCategoryPage';
import SpotsPage from './View/CategoryPage/SpotsPage/SpotsPage';
import SpotDetails from './View/CategoryPage/SpotsPage/SpotDetails';
import CategorySelectPage from './View/CategoryPage/CategorySelectPage';

import DetailsData from './View/DetailsPage/DetailsData';
import Privacy from './Privacy';
import UserAgreements from './UserAgreements';
import StoreAgreements from './StoreAgreements';
import Error from './View/ErrorPage/Error';

import ScrollToTop from './ScrollToTop';

function App() {

    return (
        <ScrollToTop>
            <Switch>
                <Route exact path='/' component={LandingPage}/>
                <Route exact path='/login' component={LoginPage}/>
                <Route exact path='/pwreset' component={PwresetPage}/>
                <Route exact path='/register' component={RegisterPage}/>
                <Route exact path='/events' component={EventsPage}/>
                <Route exact path='/bookmarks' component={BookmarkPage}/>
                <Route exact path='/search/:input' component={SearchPage}/>
                <Route
                    exact
                    path='/select/:firstCategory'
                    component={CategorySelectPage}
                />
                <Route exact path='/sightseeing' component={SpotsPage}/>
                <Route exact path='/sightseeing/:spot_id' component={SpotDetails}/>

                <Route
                    path='/category/:firstCategory/:locationCategory/:secondCategory'
                    component={CategoryPage}
                />

                <Route
                    path='/sightseeing/:spotsCategory/:spotsLocation'
                    component={SpotsCategoryPage}
                />

                <Route exact path='/privacy' component={Privacy}/>
                <Route exact path='/useragreements' component={UserAgreements}/>
                <Route exact path='/storeagreements' component={StoreAgreements}/>
                <Route path='/store/:id' component={DetailsData}/>
                <Route path='*' component={Error}/>
            </Switch>
        </ScrollToTop>
    );
}

export default App;
