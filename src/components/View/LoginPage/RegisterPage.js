import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import './RegisterPage.css';

// Import the functions you need from the SDKs you need
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';

const RegisterPage = () => {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm({ mode: 'onChange' });
  const [loading, setLoading] = useState(false);

  const password = useRef();
  password.current = watch('password');

  const onSubmit = async (data) => {
    setLoading(true);

    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

    await updateProfile(auth.currentUser, {
      displayName: data.name,
      photoURL: 'https://example.com/jane-q-user/profile.jpg',
    })
      .then(() => {
        // Profile updated!
      })
      .catch((error) => {
        // An error occurred
        // ...
      });

    const user = auth.currentUser;
    const db = getDatabase();
    await set(ref(db, 'users/' + user.uid), {
      username: user.displayName,
      email: user.email,
      profile_picture: user.photoURL,
    });

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
  };

  const atLeastOne = () =>
    getValues('test').length ? true : 'Please tell me if this is too hard.';

  return (
    <div className='auth-wrapper'>
      <div style={{ textAlign: 'center' }}>
        <h3>회원가입</h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>이름</label>
        <input
          name='name'
          type='name'
          {...register('name', { required: true, maxLength: 7 })}
        />
        {errors.name && errors.name.type === 'required' && (
          <p>이름은 필수입력 사항입니다.</p>
        )}
        {errors.name && errors.name.type === 'maxLength' && (
          <p>이름은 7자 이상 사용하실 수 없습니다.</p>
        )}
        <label>이메일</label>
        <input
          name='email'
          type='email'
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <p>이메일 형식에 맞게 입력해주세요!</p>}
        <label>비밀번호(8자 이상, 문자/숫자/기호 사용 가능)</label>
        <input
          name='password'
          type='password'
          {...register('password', { required: true, minLength: 8 })}
        />
        {errors.password && errors.password.type === 'required' && (
          <p>비밀번호는 필수입력 사항입니다.</p>
        )}
        {errors.password && errors.password.type === 'minLength' && (
          <p>비밀번호는 최소 8자 이상이어야 합니다.</p>
        )}
        <label>비밀번호 확인</label>
        <input
          name='password_confirm'
          type='password'
          {...register('password_confirm', {
            required: true,
            validate: (value) => value === password.current,
          })}
        />
        {errors.password_confirm &&
          errors.password_confirm.type === 'required' && (
            <p>비밀번호는 필수입력 사항입니다.</p>
          )}
        {errors.password_confirm &&
          errors.password_confirm.type === 'validate' && (
            <p>입력하신 비밀번호와 일치하지 않습니다</p>
          )}
        <div className='agreement-check'>
          <input
            name='agreement'
            id='checkbox-input'
            value={true}
            type='checkbox'
            label=' Example 3 (Controller)'
            {...register('agreement', { required: true })}
          ></input>
          <label htmlFor='acceptTerms' className='form-check-label'>
            Accept Terms & Conditions
          </label>
          <div className='invalid-feedback'>
            {errors.agreement && errors.agreement.type === 'required' && (
              <p>동의가 필요합니다.</p>
            )}
          </div>
        </div>
        <input type='submit' disabled={loading}></input>
        <Link to='login'>이미 아이디가 있나요?</Link>
      </form>
    </div>
  );
};

export default RegisterPage;
