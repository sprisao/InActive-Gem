import React from 'react';
import { useGlobalContext } from '../../../context';
import DetailGridCard from './DetailGridCard';
import './DetailGrid.css';

const DetailGrid = (props) => {
  const { stores, loading } = useGlobalContext();

  const maxLength = () => {
    let j = 0;
    for (let i = 0; i < stores.length; i++) {
      if (stores[i].secondCategory[0] === props.filter) {
        j++;
      }
    }
    if (j > 9) {
      return 10;
    } else {
      return j;
    }
  };
  const maxNum = maxLength();

  const selectIndex = (totalIndex, selectingNumber) => {
    const randomIndexArray = [];
    for (let i = 0; i < selectingNumber; i++) {
      let randomNum = Math.floor(Math.random() * totalIndex);

      if (stores[randomNum].secondCategory[0] === props.filter) {
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

  return (
    <section className='detail__grid'>
      {selectIndex(stores.length, maxNum).map((index) => {
        if (stores[index].id !== props.self)
          return (
            <DetailGridCard
              key={stores[index].id}
              store={stores[index]}
              tags={stores[index].tags}
            ></DetailGridCard>
          );
      })}
    </section>
  );
};

export default DetailGrid;
