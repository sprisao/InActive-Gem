import React from 'react';
import './Modal.css';

const Modal = (props) => {
  //   const { name } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className='openModal modal'>
      <section className='modalBackground'>
        <main className='modalMain'>복사 되었습니다 ✅ </main>
      </section>
    </div>
  );
};

export default Modal;
