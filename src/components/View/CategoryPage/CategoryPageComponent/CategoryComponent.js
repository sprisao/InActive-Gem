import React from 'react';

// dropdown
import CategoryHeader from './CategoryHeader';
import GridCard from '../../../Grid/GridCard';
import SecondCategory from '../SecondCategory';
import BottomNavigation from '../../../BottomNavigation/BottomNavigation';

import './CategoryComponent.css';

const CategoryComponent = (props) => {
  let gridFormatHandler;
  if (props.category === '카페') {
    gridFormatHandler = 'grid__wrapper2';
  } else {
    gridFormatHandler = 'grid__wrapper';
  }

  return (
    <>
      <BottomNavigation />
      <section className='CategoryComponent'>
        <div className='Category__Navi__Wrapper'>
          <CategoryHeader
            category={props.category}
            secondCategory={props.secondCategory}
            currentLocation={props.locationCategory}
          />

          <div className='SecondCategory__container'>
            <SecondCategory
              category={props.category}
              locationCategory={props.locationCategory}
              history={props.history}
            />
          </div>
        </div>
        <div className='CategoryGrid'>
          <section className='grid'>
            <section className={gridFormatHandler}>
              {props.stores.map((store) => {
                if (props.locationCategory === '전체') {
                  if (props.secondCategory === '전체') {
                    return (
                      <GridCard
                        key={store.id}
                        store={store}
                        tags={store.tags}
                        open={store.openHour}
                        close={store.closeHour}
                        history={props.history}
                      ></GridCard>
                    );
                  }
                  if (store.secondCategory[0] === props.secondCategory) {
                    return (
                      <GridCard
                        key={store.id}
                        store={store}
                        tags={store.tags}
                        open={store.openHour}
                        close={store.closeHour}
                        history={props.history}
                      ></GridCard>
                    );
                  }
                }
                if (store.eupmyeondongRi === props.locationCategory) {
                  if (props.secondCategory === '전체') {
                    return (
                      <GridCard
                        key={store.id}
                        store={store}
                        tags={store.tags}
                        open={store.openHour}
                        close={store.closeHour}
                        history={props.history}
                      ></GridCard>
                    );
                  }
                  if (store.secondCategory[0] === props.secondCategory) {
                    return (
                      <GridCard
                        key={store.id}
                        store={store}
                        tags={store.tags}
                        open={store.openHour}
                        close={store.closeHour}
                        history={props.history}
                      ></GridCard>
                    );
                  }
                } else return null;
              })}
            </section>
          </section>
        </div>
      </section>
    </>
  );
};

export default CategoryComponent;
