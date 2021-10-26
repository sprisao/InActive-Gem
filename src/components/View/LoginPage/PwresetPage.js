import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import logo from '../../../components/images/logo/젬-앱1395.png';

import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

const PwresetPage = () => {
  const { register, handleSubmit } = useForm({ mode: 'onChange' });
  const auth = getAuth();
  auth.languageCode = 'ko';

  const onSubmit = (data) => {
    // const actionCodeSettings = {
    //   url: 'https://www.example.com/?email=' + user.email,
    //   iOS: {
    //     bundleId: 'com.brucecompany.gem',
    //   },
    //   android: {
    //     packageName: 'com.brucecompany.gem',
    //     installApp: true,
    //     minimumVersion: '12',
    //   },
    //   handleCodeInApp: false,
    //   // When multiple custom dynamic link domains are defined, specify which
    //   // one to use.
    //   dynamicLinkDomain: 'example.page.link',
    // };
    sendPasswordResetEmail(auth, data.email)
      .then(() => {
        alert('비밀번호 재설정 이메일이 발송되었습니다!');
      })
      .catch((error) => {
        alert('가입되어있지 않은 이메일 주소입니다.');
        // ..
      });
  };

  return (
    <section className='Auth'>
      <div className='auth-wrapper'>
        <div className='auth-logobox'>
          <img src={logo} alt='logo' className='auth-logo' />
        </div>
        <div style={{ padding: '1rem 0.5rem ' }}>
          <h1>새로운 비밀번호</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder='이메일 주소를 입력해주세요'
            name='email'
            type='email'
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          />
          {/* {errors.email && <p>이메일 주소를 다시한번 확인해보세요.</p>} */}

          <button type='submit'>확인</button>
          <div className='pwReset-Wrapper'>
            <div className=''></div>
            <Link to='/login'>
              {'  '}
              로그인 하러가기 {'>'}
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PwresetPage;
