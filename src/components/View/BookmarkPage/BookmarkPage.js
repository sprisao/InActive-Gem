import React from 'react';
import SearchBox from '../SearchPage/SearchBox';
import BottomNavigation from '../../BottomNavigation/BottomNavigation';

const BookmarkPage = () => {
  return (
    <>
      <SearchBox />
      This is Bookmark Page
      <BottomNavigation activatedButton={'bookmarks'} />
    </>
  );
};

export default BookmarkPage;
