import React from 'react';
import { useGlobalContext } from '../../../context';
import DetailGridCard from './DetailGridCard';
import './DetailGrid.css';

const DetailGrid = (props) => {
  const { stores } = useGlobalContext();

  const maxLength = () => {
    let j = 0;
    for (let i = 0; i < stores.length; i++) {
      if (props.categoryType === '1') {
        if (stores[i].firstCategory === props.filter) {
          j++;
        }
      }
      if (props.categoryType === '2') {
        if (stores[i].secondCategory === props.filter2) {
          j++;
        }
      }
      if (props.categoryType === '3') {
        if (
          stores[i].firstCategory === props.filter &&
          stores[i].secondCategory !== props.filter2
        ) {
          j++;
        }
      }
    }
    if (j > props.length - 1) {
      return props.length;
    } else {
      return j;
    }
  };
  const maxNum = maxLength();

  const selectIndex = (totalIndex, selectingNumber) => {
    const randomIndexArray = [];
    for (let i = 0; i < selectingNumber; i++) {
      let randomNum = Math.floor(Math.random() * totalIndex);

      if (props.categoryType === '1') {
        if (stores[randomNum].firstCategory[0] === props.filter) {
          if (randomIndexArray.indexOf(randomNum) === -1) {
            randomIndexArray.push(randomNum);
          } else {
            i--;
          }
        } else {
          i--;
        }
      }
      if (props.categoryType === '2') {
        if (stores[randomNum].secondCategory[0] === props.filter2) {
          if (randomIndexArray.indexOf(randomNum) === -1) {
            randomIndexArray.push(randomNum);
          } else {
            i--;
          }
        } else {
          i--;
        }
      }
      if (props.categoryType === '3') {
        if (
          stores[randomNum].firstCategory[0] === props.filter &&
          stores[randomNum].secondCategory[0] !== props.filter2
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
