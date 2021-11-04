import React, { useState, useRef } from 'react';

import { useDetectOutsideClick } from '../CategoryPage/CategoryPageComponent/useDetectOutsideClick';

import { FaUserCircle } from 'react-icons/fa';
import { RiSearchLine } from 'react-icons/ri';

import { getAuth, signOut } from 'firebase/auth';
import './SearchBox.css';

const SearchBox = ({ history }) => {
  const dropdownRef = useRef(null);
  const [dropActive, setDropActive] = useDetectOutsideClick(dropdownRef, false);

  const [userInput, setUserInput] = useState('');
  const auth = getAuth();
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
  const sendUserInput = (e) => {
    const { value } = e.target;
    console.log('입력값', value);
    setUserInput(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput) {
      history.history.push(`/search/${userInput}`);
    }
  };

  return (
    <div className='top'>
      <section className='SearchBox-Wrapper'>
        <div className='SearchBox__Container'>
          <form className='SearchBox' onSubmit={handleSubmit}>
            <input
              className='inputBox'
              type='search'
              name='search'
              placeholder='가게이름 또는 메뉴로 검색'
              onChange={sendUserInput}
            />
            <div className='SubmitButtonCase' onClick={handleSubmit}>
              <RiSearchLine />
            </div>
          </form>
        </div>
        {/* <div className='Notification_Button'>
          <FaBell />
        </div> */}
        <div className='Profile_Button' onClick={dropHandler}>
          <FaUserCircle />
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
      </section>
    </div>
  );
};

export default SearchBox;
