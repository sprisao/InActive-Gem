import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const LoginPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'onChange' });
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        console.log(errorCode);
        console.log(errorMessage);
        if (error) alert('에러');
      });
  };

  return (
    <div className='auth-wrapper'>
      <div className='auth-logobox'>
        <img
          src='https://res.cloudinary.com/diimwnnmj/image/upload/v1634865910/%E1%84%8C%E1%85%A6%E1%86%B7-%E1%84%8B%E1%85%A2%E1%86%B81395_ytiiul.png'
          alt='logo'
          className='auth-logo'
        />
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
        {errors.email && <p>가입하신 이메일 주소를 입력해주세요.</p>}

        <input
          placeholder='비밀번호'
          name='password'
          type='password'
          {...register('password', { required: true, minLength: 6 })}
        />
        {errors.password && errors.password.type === 'required' && (
          <p>비밀번호는 필수입력 사항입니다.</p>
        )}
        {errors.password && errors.password.type === 'minLength' && (
          <p>비밀번호는</p>
        )}

        <button type='submit' disabled={loading}>
          Login
        </button>
        <Link to='/register'>아직 아이디가 없다면 {'>'}</Link>
      </form>
    </div>
  );
};

export default LoginPage;
