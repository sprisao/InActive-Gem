import React, { useEffect, useState, useRef } from 'react';

import SpotsCategoryHeader from './SpotsCategoryHeader';

import { useGlobalContext } from '../../../context';
import { useParams } from 'react-router-dom';

const SpotsCategoryPage = (history) => {
  const { spotsCategory, spotsLocation } = useParams();

  const { spots, spotsCategories } = useGlobalContext();
  const [newSpots, setNewSpots] = useState([]);
  const [locationList, setLocationList] = useState([]);
  const [isActive, setIsActive] = useState(spotsCategory);

  let location = [];
  let filteredSpots = [];

  useEffect(() => {
    if (spotsCategory !== 'all') {
      filteredSpots = spots.filter((x) => x.category_id[0] === spotsCategory);
      filteredSpots.forEach((element) => {
        if (!location.includes(element.miniAddress)) {
          location.push(element.miniAddress);
        } else return null;
      });
      setNewSpots(filteredSpots);
      setLocationList(location);
    } else {
      spots.forEach((element) => {
        if (!location.includes(element.miniAddress)) {
          location.push(element.miniAddress);
        } else return null;
      });
      setNewSpots(spots);
      setLocationList(location);
    }
  }, [spotsCategory]);

  const wrapperRef = useRef();
  const activeRef = useRef();
  // 카테고리 클릭시 스크롤 이동
  const clickHandler = (params, e) => {
    history.history.push(`/sightseeing/${params}/${spotsLocation}/`);
    setIsActive(params);

    let whichTarget;
    if (e.target.localName === 'span') {
      whichTarget = e.target.parentElement;
    } else {
      whichTarget = e.target;
    }

    // 타겟요소의 중앙에서부터 화면왼쪽까지의 거리
    const leftSpace = whichTarget.offsetLeft;
    const tabWidth = whichTarget.offsetWidth / 2;
    const leftToMiddleSpace = leftSpace + tabWidth;

    // 타겟요소를 감싸고있는 부모요소의 스크롤영역을 포함한 넓이
    const wrapperWidth = wrapperRef.current.scrollWidth;

    // 화면의 중앙가지의 거리
    const viewWidth = wrapperRef.current.clientWidth / 2;
    let pos = 0;

    if (leftToMiddleSpace < viewWidth) {
      pos = 0;
    } else if (wrapperWidth - leftSpace < viewWidth) {
      pos = wrapperWidth;
    } else {
      pos = leftToMiddleSpace - viewWidth;
    }

    e.preventDefault();
    wrapperRef.current.scrollTo({ left: pos, behavior: 'smooth' });
  };

  return (
    <>
      <SpotsCategoryHeader
        spotsCategory={spotsCategory}
        filteredLocation={locationList}
      />
      <section className='SecontCategory-Container'>
        <div className='SecondCategory-Wrapper' ref={wrapperRef}>
          <div
            className={`SecondCategory-Item ${
              isActive === 'all' ? 'Active' : 'inactive'
            }`}
            onClick={(e) => {
              clickHandler('all', e);
            }}
            ref={activeRef}
          >
            <span>🅰️ 전체</span>
          </div>
          {spotsCategories.map((item) => {
            return (
              <div
                className={`SecondCategory-Item ${
                  isActive === item.id ? 'Active' : 'inactive'
                }`}
                key={item.id}
                onClick={(e) => {
                  clickHandler(item.id, e);
                }}
                ref={activeRef}
              >
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>
      </section>

      {newSpots.map((item) => {
        if (spotsLocation === '전체') {
          return <div key={item.id}>{item.name}</div>;
        }
        if (item.miniAddress === spotsLocation) {
          return <div key={item.id}>{item.name}</div>;
        } else {
          return null;
        }
      })}
    </>
  );
};

export default SpotsCategoryPage;
