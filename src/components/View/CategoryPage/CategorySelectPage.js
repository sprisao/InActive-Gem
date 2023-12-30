import React, {useEffect, useState} from 'react';

import {storeBase, useGlobalContext} from '../../context';
import {useParams} from 'react-router-dom';

import BottomNavigation from '../../BottomNavigation/BottomNavigation';
import SearchBox from '../SearchPage/SearchBox';

import './CategorySelectPage.css';
import Loading from "../../Loading";

const CategorySelectPage = (history) => {
    const {firstCategory} = useParams();
    const [secondCategories, setSecondCategories] = useState([]);
    const [secondLoading, setSecondLoading] = useState(true);

    const filteredSCategory = secondCategories.filter(
        (category) => category.firstCategory === firstCategory
    );

    useEffect(() => {
        const fetchSecondCategories = async () => {
            const secondCategory = [];
            storeBase('secondCategoryData')
                .select({
                    view: 'Grid view',
                    pageSize: 50,
                })
                .eachPage(
                    function page(records, fetchNextPage) {
                        records.forEach(function (record) {
                            secondCategory.push({
                                id: record.id,
                                ...record._rawJson.fields,
                            });
                        });
                        setSecondCategories(secondCategory);
                        fetchNextPage();
                    },
                    function done(err) {
                        if (err) {
                            console.error(err);
                        } else {
                            console.log('세컨드 카테고리 데이터 불러오기 성공');
                            setSecondLoading(false);
                        }
                    }
                );
        };

        fetchSecondCategories().then(() =>
            console.log('세컨드 카테고리 데이터 불러오기 성공')
        );

    }, []);

    const clickHandler = (param) => {
        history.history.push(`/category/${firstCategory}/전체/${param}`);
    };

    if (secondLoading) {
        return (
            <>
                <SearchBox history={history}/>
                <BottomNavigation/>
                <section className='categorySelect'>
                    <div className='Select-Wrapper'>
                    </div>
                </section>
            </>
        );
    }
    return (
        <>
            <SearchBox history={history}/>
            <BottomNavigation/>
            <section className='categorySelect'>
                <div className='Select-Wrapper'>
                    <div className='Select-Box' onClick={(e) => clickHandler('전체', e)}>
                        <span>🅰️</span>
                        <p>전체</p>
                    </div>
                    {filteredSCategory.map((item) => {
                        console.log(item);
                        return (
                            <div
                                className='Select-Box'
                                onClick={(e) => clickHandler(item.title, e)}
                                key={item.id}
                            >
                                <span>{item.emoji}</span>
                                <p>{item.title}</p>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default CategorySelectPage;
