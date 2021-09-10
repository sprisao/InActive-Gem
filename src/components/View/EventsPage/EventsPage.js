import React, { useState } from 'react';
import './EventsPage.css';
import { useGlobalContext } from '../../context';
import BottomNavigation from '../../BottomNavigation/BottomNavigation';
import { Link } from 'react-router-dom';
import SearchResults from '../SearchPage/SearchResults';
import SearchBox from '../SearchPage/SearchBox';
import Footer from '../../Footer';
import Loading from '../../Loading';

const EventsPage = () => {
  const { loading, events } = useGlobalContext();

  const [userInput, setUserInput] = useState('');

  const getUserInput = (e) => {
    const { value } = e.target;
    console.log('입력받은 값', value);
    setUserInput(value);
  };

  if (loading) {
    return <Loading />;
  } else {
    if (userInput) {
      return (
        <>
          <SearchBox getUserInput={getUserInput} />
          <SearchResults userInput={userInput} />
          <Footer />
        </>
      );
    } else {
      return (
        <>
          <SearchBox />
          <div className='EventsPage__Wrapper'>
            <section className='EventsPage'>
              <div className='EventsPage__Header'>
                <p>원주사람이라면 놓칠 수 없는!</p>
                <h3>이벤트 & 할인소식</h3>
              </div>
              <div className='EventsWrapper'>
                {events.map((item) => {
                  console.log(item);
                  return (
                    <Link to={`/store/${item.stores[0]}`} className=''>
                      <div className='EventsCard' key={item.id}>
                        <img src={item.image[0].url} alt='' />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          </div>
          <BottomNavigation activatedButton={'events'} />
          <Footer />
        </>
      );
    }
  }
};

export default EventsPage;
