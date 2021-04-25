import React from 'react';
const result = document.querySelector('.result');

const fetchData = async () => {
  try {
    const { data } = await axios.get('/api/store-api');
    const products = data.map((product) => {
      console.log(product);
    });
    result.innerHTML = '<h2>성공</h2>';
  } catch (error) {
    result.innerHTML = '<h2>나중에 다시 시도하세요 <h2/>';
  }
};

fetchData();

const Test = () => {
  return (
    <div>
      <h1>Test</h1>
    </div>
  );
};

export default Test;
