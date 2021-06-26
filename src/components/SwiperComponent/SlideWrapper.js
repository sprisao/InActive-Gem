import React from 'react';
import { useGlobalContext } from '../context';
import SlideType1 from './SlideType1';
import SlideType2 from './SlideType2';
import Loading from '../Loading';
import './SlideWrapper.css';

const SlideWrapper = (props) => {
  const { stores, lunchRCCMD, loading, cafeRCCMD } = useGlobalContext();

  let slideType;
  if (props.slideType === 'type1') {
    if (props.view === 'LunchRCCMD') {
      slideType = (
        <div className='SlideWrapper'>
          {lunchRCCMD.map((store) => {
            return <SlideType1 key={store.id} store={store}></SlideType1>;
          })}
          ;
        </div>
      );
    }
  }
  if (props.slideType === 'type2') {
    if (props.view === 'CafeRCCMD') {
      slideType = (
        <div className='SlideWrapper'>
          {cafeRCCMD.map((store) => {
            return <SlideType2 key={store.id} store={store}></SlideType2>;
          })}
          ;
        </div>
      );
    }
  }

  if (loading) {
    return <Loading />;
  }
  return <section className='title'>{slideType}</section>;
};

export default SlideWrapper;
