import React from 'react';

import BottomNavigaton from '../../../components/BottomNavigation/BottomNavigation';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import logo from '../../images/logo.png';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const LoginPage = (history) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'onChange' });
  const auth = getAuth();
  const user = auth.currentUser;

  const onSubmit = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        return history.history.push('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        console.log(errorCode);
        console.log(errorMessage);
        if (error) alert('이메일 또는 비밀번호가 일치하지 않습니다.');
      });
  };

  if (!user) {
    return (
      <section className='Auth'>
        <BottomNavigaton />
        <div className='auth-wrapper'>
          <div className='auth-logobox'>
            <img src={logo} alt='logo' className='auth-logo' />
          </div>
          <div style={{ padding: '1rem 0.5rem ' }}>
            <h1>로그인</h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder='이메일 주소'
              name='email'
              type='email'
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && <p>이메일 주소를 다시한번 확인해보세요.</p>}

            <input
              placeholder='비밀번호'
              name='password'
              type='password'
              {...register('password', { required: true, minLength: 6 })}
            />
            {errors.password && errors.password.type === 'required' && (
              <p>비밀번호를 입력해주세요.</p>
            )}
            <button type='submit'>Login</button>
            <div className='pwReset-Wrapper'>
              <Link to='/register'>
                {'  '}
                이메일로 <b>3초만에</b> 가입하기 {'>'}
              </Link>
              <Link to='/pwreset'>
                {'  '}
                비밀번호 재설정 {'>'}
              </Link>
            </div>
          </form>
        </div>
      </section>
    );
  } else {
    history.history.push('/');
  }
};

export default LoginPage;
