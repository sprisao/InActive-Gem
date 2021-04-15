import React, { useState } from 'react';

const Header = (props) => {
  const [images, setImages] = useState(props.img);
  return (
    <div>
      <h1>This is HEader</h1>
      {images &&
        images.map((item) => {
          return (
            <div>
              <ul>{item.img}</ul>
            </div>
          );
        })}
      <h2>Header ends</h2>
    </div>
  );
};

export default Header;
