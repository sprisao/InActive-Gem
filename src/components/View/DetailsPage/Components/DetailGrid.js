import React from 'react';
import { useGlobalContext } from '../../../context';
import DetailGridCard from './DetailGridCard';
import './DetailGrid.css';

const DetailGrid = (props) => {
  console.log(`DetailGrid.js: props: ${props}`)
  const {
    restaurants,
    cafes,
    bars,
    beautyShops,
    studios,
    petShops,
    gyms,
    kidShops,
    academies,
    pharmacies,
    flowerShops,
  } = useGlobalContext();
  const allStores = restaurants.concat(
    cafes,
    bars,
    beautyShops,
    studios,
    petShops,
    gyms,
    kidShops,
    academies,
    pharmacies,
    flowerShops
  );

const maxLength = () => {
  let j = 0;
  for (let i = 0; i < allStores.length; i++) {
    if (allStores[i] && allStores[i].firstCategory && allStores[i].secondCategory) {
      if (props.categoryType === '1') {
        if (allStores[i].firstCategory[0] === props.filter) {
          j++;
        }
      }
      if (props.categoryType === '2') {
        if (allStores[i].secondCategory[0] === props.filter2) {
          j++;
        }
      }
      if (props.categoryType === '3') {
        if (
          allStores[i].firstCategory[0] === props.filter &&
          allStores[i].secondCategory[0] !== props.filter2
        ) {
          j++;
        }
      }
    }
  }
  if (j > props.length - 1) {
    return props.length;
  } else {
    return j;
  }
};  const maxNum = maxLength();

const selectIndex = (totalIndex, selectingNumber) => {
  const randomIndexArray = [];
  for (let i = 0; i < selectingNumber; i++) {
    let randomNum = Math.floor(Math.random() * totalIndex);

    if (allStores[randomNum] && allStores[randomNum].firstCategory && allStores[randomNum].secondCategory) {
      if (props.categoryType === '1') {
        if (allStores[randomNum].firstCategory[0] === props.filter) {
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
        if (allStores[randomNum].secondCategory[0] === props.filter2) {
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
          allStores[randomNum].firstCategory[0] === props.filter &&
          allStores[randomNum].secondCategory[0] !== props.filter2
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
    } else {
      i--;
    }
  }
  return randomIndexArray;
};
  return (
    <section className='detail__grid'>
      {selectIndex(allStores.length, maxNum).map((index) => {
        if (allStores[index].id !== props.self)
          return (
            <DetailGridCard
              key={allStores[index].id}
              store={allStores[index]}
              tags={allStores[index].tags}
            ></DetailGridCard>
          );
        else return null;
      })}
    </section>
  );
};

export default DetailGrid;
