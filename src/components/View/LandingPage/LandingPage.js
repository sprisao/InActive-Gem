import React, {useRef} from 'react';

import SearchBox from '../SearchPage/SearchBox';
import Home from '../../Home';
import BottomNavigation from '../../BottomNavigation/BottomNavigation';
import Footer from '../../Footer';


import './LandingPage.css';
import {getAuth, signOut} from "firebase/auth";
import {useDetectOutsideClick} from "../CategoryPage/CategoryPageComponent/useDetectOutsideClick";
import {FaUserCircle} from "react-icons/fa";

const LandingPage = (history) => {
    const auth = getAuth();
    const dropdownRef = useRef(null);
    const [dropActive, setDropActive] = useDetectOutsideClick(dropdownRef, false);
    const user = auth.currentUser;

    const handlePush = () => {
        console.log(history);
        history.history.push('/login');
    };

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.ㅇ
                console.log('로그아웃 되었습니다');
            })
            .catch((error) => {
                // An error happened.
            });
    };

    const dropHandler = () => setDropActive(!dropActive);
    return (
        <>
            <div
                className='flex justify-center items-center w-full shadow-md rounded-b-lg bg-gray-100 p-2'
            >
                <div className="flex flex-row justify-center w-[400px]">
                    <img
                        className="w-[70px] h-[70px]"
                        src='/gem-logo.png'
                        alt='로고'
                    />
                    {/*<div className='Profile_Button' onClick={dropHandler}>*/}
                    {/*    <FaUserCircle/>*/}
                    {/*    <nav*/}
                    {/*        ref={dropdownRef}*/}
                    {/*        className={`Profile_Drop_Menu ${*/}
                    {/*            dropActive ? 'active' : 'inactive'*/}
                    {/*        }`}*/}
                    {/*    >*/}
                    {/*        <ul>*/}
                    {/*            {user ? (*/}
                    {/*                <>*/}
                    {/*                    <li>*/}
                    {/*                        <button onClick={handleLogout}>로그아웃</button>*/}
                    {/*                    </li>*/}
                    {/*                </>*/}
                    {/*            ) : (*/}
                    {/*                <>*/}
                    {/*                    <li>*/}
                    {/*                        <button onClick={handlePush}>로그인</button>*/}
                    {/*                    </li>*/}
                    {/*                </>*/}
                    {/*            )}*/}
                    {/*        </ul>*/}
                    {/*    </nav>*/}
                    {/*</div>*/}
                </div>
            </div>
            <SearchBox history={history}/>
            <BottomNavigation activatedButton={'home'}/>
            <Home history={history}/>
            <Footer/>
        </>
    );
    // }
};

export default LandingPage;
