import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import './SectionHeader.css';

const SectionHeader = (props) => {
  return (
    <div className='Section__Header'>
      <div className='Section__Title'>
        <p>{props.title}</p>
      </div>
      <div className='Section__More'>
        <p>더 보기</p>
        <FiChevronRight />
      </div>
    </div>
  );
};

export default SectionHeader;
