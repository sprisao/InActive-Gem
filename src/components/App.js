import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import pages
import LandingPage from './View/LandingPage/LandingPage';
import CategoryData from './View/CategoryPage/CategoryData';
import DetailsData from './View/DetailsPage/DetailsData';
import SearchResults from './View/SearchResults/SearchResults';
import Error from './View/ErrorPage/Error';
import Ready from './View/ErrorPage/Ready';

import ScrollToTop from './ScrollToTop';

// import components
import Header from './Header';
import Footer from './Footer';

function App() {
  const [userInput, setUserInput] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setUserInput(value);
  };
  console.log(userInput);

  let afterSearchRendering;
  if (userInput !== '') {
    afterSearchRendering = <SearchResults userInput={userInput} />;
  } else {
    afterSearchRendering = (
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route exact path='/category/홈'>
          <LandingPage />
        </Route>
        <Route path='/category/:firstCategory'>
          <CategoryData />
        </Route>
        <Route path='/category/:firstCategory/:secondCategory'>
          <CategoryData />
        </Route>
        {/* <Route path='/category/*'>
            <Header />
            <Ready />
          </Route> */}
        <Route path='/store/:id'>
          <DetailsData />
        </Route>
        <Route path='*'>
          <Header />
          <Error />
        </Route>
      </Switch>
    );
  }

  return (
    <Router>
      <ScrollToTop>
        <Header handleChange={handleChange} />
        {afterSearchRendering}
        <Footer />
      </ScrollToTop>
    </Router>
  );
}

export default App;
