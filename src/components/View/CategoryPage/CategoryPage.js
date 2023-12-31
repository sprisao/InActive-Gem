import React, {useEffect, useRef, useState} from 'react';
import CategoryHeader from './CategoryPageComponent/CategoryHeader';
import GridCard from '../../Grid/GridCard';
import Loading from '../../Loading';
import BottomNavigation from '../../BottomNavigation/BottomNavigation';

import {HiBadgeCheck} from 'react-icons/hi';

import {storeBase} from '../../context';

import {useHistory, useLocation, useParams} from 'react-router-dom';
import './CategoryPage.css';
import {firstCategoryMapper} from "../../Home";

const CategoryPage = () => {
    const history = useHistory();
    const location = useLocation();
    const [dataLoading, setDataLoading] = useState(true)
    const [storeData, setStoreData] = useState([])
    const [recommendStore1, setRecommendStore1] = useState([])
    const [recommendStore2, setRecommendStore2] = useState([])
    const {firstCategory, secondCategory, locationCategory} = useParams();
    const [isActive, setIsActive] = useState(secondCategory);

    console.log(`firstCategory: ${firstCategoryMapper[firstCategory]}`)
    console.log(`secondCategory: ${secondCategory}`)

    const secondCategories = location.state.secondCategoryData;

    useEffect(() => {
        const store = [];
        const recommendStore1 = [];
        const recommendStore2 = [];
        const fetchStoreData = async () => {
            setDataLoading(true)
            storeBase('stores')
                .select({
                    view: `${firstCategory}`,
                    pageSize: 100,
                })
                .eachPage(
                    function page(records, fetchNextPage) {
                        records.forEach(function (record) {
                            store.push({
                                id: record.id,
                                ...record._rawJson.fields,
                            });
                            if (record._rawJson.fields.firstCategory === firstCategoryMapper[firstCategory]) {
                                recommendStore1.push({
                                    id: record.id,
                                    ...record._rawJson.fields,
                                });
                            }
                            if (record._rawJson.fields.secondCategory === secondCategory) {
                                recommendStore2.push({
                                    id: record.id,
                                    ...record._rawJson.fields,
                                });
                            }
                        });
                        fetchNextPage();
                        setStoreData(store);
                        setRecommendStore1(recommendStore1)
                        setRecommendStore2(recommendStore2)
                        console.log(`recommendStore1: ${recommendStore1}`)
                        console.log(`recommendStore2: ${recommendStore2}`)
                    },
                    function done(err) {
                        if (err) {
                            console.error(err);
                        } else {
                            console.log('맛집 불러오기 성공');
                            setDataLoading(false);
                        }
                    }
                );
        }
        fetchStoreData().then(() => console.log('맛집 불러오기 성공'));
    }, [
        firstCategory,
        secondCategory,
        locationCategory,
        location.state.secondCategoryData,
    ]);


    let afterFilter = [];
    if (locationCategory === '전체' && isActive === '전체') {
        afterFilter = storeData;
    } else if (locationCategory === '전체') {
        afterFilter = storeData.filter((x) => x.secondCategory === isActive);
    } else if (isActive === '전체') {
        afterFilter = storeData.filter(
            (x) => x.eupmyeondongRi === locationCategory
        );
    } else {
        afterFilter = storeData.filter(
            (x) =>
                x.eupmyeondongRi === locationCategory && x.secondCategory === isActive
        );
    }

    const wrapperRef = useRef();
    const activeRef = useRef();

    // 카테고리 클릭시 스크롤 이동
    const clickHandler = (params, e) => {
        history.push(
            {
                pathname:
                    `/category/${firstCategory}/${locationCategory}/${params}`,
                state: {secondCategoryData: secondCategories},
            }
        );
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
        wrapperRef.current.scrollTo({left: pos, behavior: 'smooth'});
    };

    return (
        <>
            <BottomNavigation/>
            <div className='CategoryPage--Header--Container'>
                <div className='Header--Fix--Box'>
                    <CategoryHeader
                        category={firstCategory}
                        secondCategory={secondCategory}
                        currentLocation={locationCategory}
                    />

                    <section className='SecondCategory-Container'>
                        <div className='SecondCategory-Wrapper' ref={wrapperRef}>
                            <div
                                className={`SecondCategory-Item ${
                                    isActive === '전체' ? 'Active' : 'inactive'
                                }`}
                                onClick={(e) => {
                                    clickHandler('전체', e);
                                }}
                                ref={activeRef}
                            >
                                <span>🅰️ 전체</span>
                            </div>
                            {secondCategories && secondCategories.map((item) => {
                                return (
                                    <div
                                        className={`SecondCategory-Item ${
                                            isActive === item.title ? 'Active' : 'inactive'
                                        }`}
                                        key={item.id}
                                        onClick={(e) => {
                                            clickHandler(item.title, e);
                                        }}
                                        ref={activeRef}
                                    >
            <span>
                {item.emoji} {item.title}
            </span>
                                    </div>
                                );
                            })}                        </div>
                    </section>
                </div>
            </div>

            {dataLoading ? (
                <Loading/>
            ) : (
                <div className='CategoryGrid'>
                    {afterFilter.length !== 0 ? (
                        <>
                            <div className='notice'>
                                <HiBadgeCheck
                                    style={{
                                        alignItems: 'center',
                                        color: '#f21d73',
                                        fontSize: '1.15rem',
                                    }}
                                />
                                <span>
                  는 젬에서 인증하는{' '}
                                    <span
                                        style={{
                                            background:
                                                'linear-gradient(to top, #FFE400 50%, transparent 50% )',
                                        }}
                                    >
                    지역명소(로컬젬)
                  </span>
                  입니다.
                </span>
                            </div>
                            <section className='grid'>
                                <div className='grid__wrapper'>
                                    {afterFilter.map((store) => {
                                        return (
                                            <GridCard
                                                key={store.id}
                                                store={store}
                                                recommendStore1={recommendStore1}
                                                recommendStore2={recommendStore2}
                                                open={store.openHour}
                                                close={store.closeHour}
                                            ></GridCard>
                                        );
                                    })}
                                </div>
                            </section>
                        </>
                    ) : (
                        <section className='NO-DATA'>
                            <img
                                src='https://c.tenor.com/7LxZinFmHbEAAAAi/cute-derpy-duck.gif'
                                alt=''
                            />
                            <h1>텅.. 비었습니다 ㅜㅜ</h1>
                        </section>
                    )}
                </div>
            )}
        </>
    );
};

export default CategoryPage;
