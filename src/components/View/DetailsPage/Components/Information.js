import React from 'react';

const Information = (props) => {
  return (
    <div>
      <h4>{props.desc}</h4>
      <h1>{props.title}</h1>
    </div>
  );
};

export default Information;
