import React, {useEffect, useState} from 'react';

// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
import {FiChevronRight} from 'react-icons/fi';

import {storeBase} from './context';

import './Promotion.css';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, {Pagination, Navigation} from 'swiper/core';
import Loading from "./Loading";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);
const Promotion = ({history}) => {
    const [promoLoading, setPromoLoading] = useState(true);
    const [promotions, setPromotions] = useState([]) // Initialize to an empty array

    useEffect(() => {
        const fetchPromotions = async () => {
            setPromoLoading(true)
            const promotion = [];
            await storeBase('promotions')
                .select({
                    view: 'online',
                    pageSize: 10,
                })
                .eachPage(
                    function page(records, fetchNextPage) {
                        records.forEach(function (record) {
                            promotion.push({
                                id: record.id,
                                ...record._rawJson.fields,
                            });
                        });
                        fetchNextPage();
                        setPromotions(promotion);
                    },
                    function done(err) {
                        if (err) {
                            console.error(err);
                        } else {
                            console.log('프로모션 불러오기 성공');
                            setPromoLoading(false);
                        }
                    }
                );
        };

        fetchPromotions().then(() =>
            console.log('프로모션 불러오기 성공')
        );
    }, []);

    if (promoLoading) {
        return <Loading/>;
    }
    return (
        <div className='SecondGrid__Wrap'>
            <div className='SecondGrid__Item'>
                <Swiper navigation={true}>
                    <div className='Navigation__Item__Header'>
                        <p>젬 큐레이션</p>
                        <FiChevronRight
                            style={{
                                fontSize: '1.35rem',
                                strokeWidth: '3px',
                                color: '#c6c6c6',
                                marginLeft: '0.3rem',
                            }}
                        />
                    </div>
                    {promotions.map((item) => {
                        return (
                            <SwiperSlide
                                className='swiper-slide'
                                key={item.id}
                                onClick={() =>
                                    history.history.push(
                                        `/store/${item.store[0]}/details/Curation`
                                    )
                                }
                            >
                                <div className='Home__Slider__Article'>
                                    -<p>{item.mainCopy}</p>
                                    <h3>{item.name}</h3>-
                                </div>

                                <video
                                    autoPlay={true}
                                    loop={true}
                                    controls={false}
                                    playsInline
                                    muted
                                    type='video/mp4'
                                >
                                    <source src={item.promotionMedia[0].url} type='video/mp4'/>
                                    <strong>Your browser does not support the video tag.</strong>
                                </video>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
};

export default Promotion;
