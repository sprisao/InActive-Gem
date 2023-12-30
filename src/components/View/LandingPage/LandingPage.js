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
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                /*lightgray shadow*/
                boxShadow: '0 0 0.5rem 0.1rem lightgray',
                borderRadius: '0 0 0.5rem 0.5rem',
                padding: '0.5rem 1rem 0.5rem 0.5rem',
                backgroundColor: '#f5f5f5',
            }}>
                <div style={{
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <img
                        style={{
                            width: '70px',
                            height: '70px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }
                        }
                        src='/gem-logo.png'
                        alt='로고'
                    />
                </div>
                {/* <div className='Notification_Button'>
          <FaBell />
        </div> */}
                <div className='Profile_Button' onClick={dropHandler}>
                    <FaUserCircle/>
                    <nav
                        ref={dropdownRef}
                        className={`Profile_Drop_Menu ${
                            dropActive ? 'active' : 'inactive'
                        }`}
                    >
                        <ul>
                            {user ? (
                                <>
                                    <li>
                                        <button onClick={handleLogout}>로그아웃</button>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <button onClick={handlePush}>로그인</button>
                                    </li>
                                </>
                            )}
                        </ul>
                    </nav>
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
