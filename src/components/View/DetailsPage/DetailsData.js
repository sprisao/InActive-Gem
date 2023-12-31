import React, {useEffect, useState} from 'react';
import {useHistory, useLocation, useParams} from 'react-router-dom';
import Footer from '../../Footer';

import DetailsPage from './DetailsPage';
import {storeBase} from "../../context";

const DetailsData = () => {
    const history = useHistory();
    const location = useLocation();
    const [menuLoading, setMenuLoading] = useState(true)
    const [menu, setMenu] = useState([])

    const store = location.state.storeData;
    const recommendStore1 = location.state.recommendStore1;
    const recommendStore2 = location.state.recommendStore2;

    console.log(`recommendStore1: ${recommendStore1}`)
    console.log(`recommendStore2: ${recommendStore2}`)

    useEffect(() => {
            const menuItem = [];

            const fetchMenuData = async () => {
                setMenuLoading(true)
                storeBase('menu')
                    .select({
                        view: 'Grid view',
                        pageSize: 100,
                    })
                    .eachPage(
                        function page(records, fetchNextPage) {
                            records.forEach(function (record) {
                                menuItem.push({
                                    id: record.id,
                                    ...record._rawJson.fields,
                                    ...record._rawJson.fields,
                                });
                            });
                            fetchNextPage();
                            setMenu(menuItem);
                        },
                        function done(err) {
                            if (err) {
                                console.error(err);
                            } else {
                                console.log('menu 불러오기 성공');
                                setMenuLoading(false);
                            }
                        }
                    );
            }
            fetchMenuData().then(() => console.log('menu 불러오기 성공'));
        }
        , [store]
    );

    return (
        <>
            <DetailsPage
                key={store.id}
                store={store}
                history={history}
                recommendStore1={recommendStore1}
                recommendStore2={recommendStore2}
                menu={menu}
                menuLoading={menuLoading}
            ></DetailsPage>
            <Footer></Footer>
        </>
    );
};

export default DetailsData;
