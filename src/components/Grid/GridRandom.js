import React from 'react';
import GridCard from './GridCard';
import Leerpage from '../View/ErrorPage/LeerPage';
import './Grid.css';

const GridRandom = (props) => {
  const maxLength = () => {
    let j = 0;
    for (let i = 0; i < props.stores.length; i++) {
      if (
        props.stores[i].firstCategory[0] === props.filter ||
        props.stores[i].firstCategory[0] === props.filter2
      ) {
        j++;
      }
    }
    return j;
  };
  const maxNum = maxLength();

  const selectIndex = (totalIndex, selectingNumber) => {
    const randomIndexArray = [];
    for (let i = 0; i < selectingNumber; i++) {
      let randomNum = Math.floor(Math.random() * totalIndex);

      if (
        props.stores[randomNum].firstCategory[0] === props.filter ||
        props.stores[randomNum].firstCategory[0] === props.filter2
      ) {
        if (randomIndexArray.indexOf(randomNum) === -1) {
          randomIndexArray.push(randomNum);
        } else {
          i--;
        }
      } else {
        i--;
      }
    }
    return randomIndexArray;
  };

  let leerfilter;
  if (props.filter === 'leer' || props.filter2 === 'leer') {
    leerfilter = <Leerpage />;
  } else {
    leerfilter = (
      <section className='title'>
        <section className='grid'>
          {selectIndex(props.stores.length, maxNum).map((index) => {
            return (
              <GridCard
                key={props.stores[index].id}
                store={props.stores[index]}
                tags={props.stores[index].tags}
                open={props.stores[index].openHour}
                close={props.stores[index].closeHour}
              ></GridCard>
            );
          })}
        </section>
      </section>
    );
  }

  return <>{leerfilter}</>;
};

export default GridRandom;
