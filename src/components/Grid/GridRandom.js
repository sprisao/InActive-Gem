import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context";
import GridCard from "./GridCard";
import Loading from "../Loading";
import Leerpage from "../View/ErrorPage/LeerPage";
import "./Grid.css";

const GridRandom = (props) => {
  const { stores, loading } = useGlobalContext();
  const maxLength = () => {
    let j = 0;
    for (let i = 0; i < stores.length; i++) {
      if (
        stores[i].firstCategory[0] === props.filter ||
        stores[i].firstCategory[0] === props.filter2
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
        stores[randomNum].firstCategory[0] === props.filter ||
        stores[randomNum].firstCategory[0] === props.filter2
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

  if (loading) {
    return <Loading />;
  }

  let leerfilter;
  if (props.filter === "leer" || props.filter2 === "leer") {
    leerfilter = <Leerpage />;
  } else {
    leerfilter = (
      <section className="title">
        <section className="grid">
          {selectIndex(stores.length, maxNum).map((index) => {
            return (
              <GridCard
                key={stores[index].id}
                store={stores[index]}
                tags={stores[index].tags}
                open={stores[index].openHour}
                close={stores[index].closeHour}
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
