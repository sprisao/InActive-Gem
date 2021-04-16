import React from 'react';
import { Link } from 'react-router-dom';

import {
  IoChevronBackSharp,
  IoShareOutline,
  IoHeartOutline,
  IoLocationSharp,
} from 'react-icons/io5';

import './DetailNavigation.css';

const Navigation = () => {
  return (
    <div className='DetailsPage__Navigation'>
      <Link to={'/'}>
        <div className='returnBtn'>
          <button>
            <IoChevronBackSharp />
          </button>
        </div>
      </Link>
      <div className='otherBtn'>
        <button>
          <IoShareOutline />
        </button>
        <button>
          <IoHeartOutline />
        </button>
      </div>
    </div>
  );
};

export default Navigation;
