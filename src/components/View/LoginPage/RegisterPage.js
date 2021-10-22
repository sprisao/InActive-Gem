import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { BsX } from 'react-icons/bs';

import './RegisterPage.css';

// Import the functions you need from the SDKs you need
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { getFirestore, setDoc, doc } from 'firebase/firestore';

const RegisterPage = () => {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'onChange' });
  const db = getFirestore();
  const [loading, setLoading] = useState(false);
  const [privacyShow, setPrivacyShow] = useState(false);
  const [usageShow, setUsageShow] = useState(false);

  const handleClose = () => setPrivacyShow(false) || setUsageShow(false);

  const handlePrivacyShow = () => {
    setPrivacyShow(true);
    console.log('프라이버시 약관 클릭');
  };
  const handleUsageShow = () => {
    setUsageShow(true);
    console.log('이용약관 클릭');
  };

  const password = useRef();
  password.current = watch('password');

  const auth = getAuth();
  const user = auth.currentUser;
  const onSubmit = async (data) => {
    setLoading(true);

    await createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        console.log(userCredential.user);
        updateProfile(auth.currentUser, {
          displayName: data.name,
          photoURL: 'https://example.com/jane-q-user/profile.jpg',
          marketing: data.marketingAgreement,
        }).then(console.log('프로필 업데이트 완료'));
        setDoc(doc(db, 'users', userCredential.user.uid), {
          username: data.name,
          email: userCredential.user.email,
          photoURL: 'https://example.com/jane-q-user/profile.jpg',
          marketing: data.marketingAgreement,
        }).then(console.log('저장완료'));

        // Signed in
      })
      .catch((error) => {
        console.log('아이디 생성중 에러발생', error);
      });
  };

  return (
    <>
      <div className='auth-wrapper'>
        <div className='auth-logobox'>
          <img
            src='https://res.cloudinary.com/diimwnnmj/image/upload/v1634865910/%E1%84%8C%E1%85%A6%E1%86%B7-%E1%84%8B%E1%85%A2%E1%86%B81395_ytiiul.png'
            alt='logo'
            className='auth-logo'
          />
        </div>
        <div style={{ padding: '1rem 0.5rem ' }}>
          <h1>회원가입</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder='닉네임'
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
          <input
            placeholder='이메일 주소'
            name='email'
            type='email'
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && <p>이메일 형식에 맞게 입력해주세요!</p>}
          <input
            placeholder='비밀번호 ( 8자 이상, 문자/숫자/기호 )'
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
          <input
            placeholder='비밀번호 확인'
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
          <div className='agreement'>
            <span style={{ fontWeight: '700', margin: '0.35rem 0' }}>
              서비스 정책
            </span>
            <div className='agreement-inputbox'>
              <div className='agreement-inputbox-itemwrapper'>
                <input
                  name='Service Use Agreement'
                  id='checkbox-input'
                  value={true}
                  type='checkbox'
                  {...register('userAgreement', { required: true })}
                ></input>
                <span
                  style={{ margin: '0 0.25rem', color: 'var(--activeColor)' }}
                >
                  [필수]
                </span>
                <span>서비스 이용약관에 동의합니다.</span>
              </div>
              <span onClick={handleUsageShow} style={{ color: '#43caa2' }}>
                전문보기
              </span>
            </div>
            <div className='invalid-feedback'>
              {errors.agreement && errors.agreement.type === 'required' && (
                <p>동의가 필요합니다.</p>
              )}
            </div>
            <div className='agreement-inputbox'>
              <div className='agreement-inputbox-itemwrapper'>
                <input
                  name='Privacy Policy Agreement'
                  id='checkbox-input'
                  value={true}
                  type='checkbox'
                  {...register('privacyAgreement', { required: true })}
                ></input>
                <span
                  style={{ margin: '0 0.25rem', color: 'var(--activeColor)' }}
                >
                  [필수]
                </span>
                <span>개인정보 취급방침에 동의합니다.</span>
              </div>
              <span onClick={handlePrivacyShow} style={{ color: '#43caa2' }}>
                전문보기
              </span>
            </div>
            <div className='invalid-feedback'>
              {errors.agreement && errors.agreement.type === 'required' && (
                <p>동의가 필요합니다.</p>
              )}
            </div>
            <div className='agreement-inputbox'>
              <div
                className='agreement-inputbox-itemwrapper'
                style={{ width: '100%' }}
              >
                <input
                  name='Privacy Policy Agreement'
                  id='checkbox-input'
                  value={true}
                  type='checkbox'
                  {...register('marketingAgreement', { required: false })}
                ></input>
                <span style={{ margin: '0 0.25rem', color: '#3069d3' }}>
                  [선택]
                </span>
                <span>마케팅 수신 동의 (이벤트&할인 정보 등)</span>
              </div>
            </div>
            <div className='invalid-feedback'>
              {errors.agreement && errors.agreement.type === 'required' && (
                <p>동의가 필요합니다.</p>
              )}
            </div>
          </div>
          <button type='submit' disabled={loading}>
            확인
          </button>
        </form>
        <Link to='login'>이미 아이디가 있다면 ></Link>
      </div>
      <div className={`Usage-Modal ${usageShow ? 'active' : 'inactive'}`}>
        <div className='Modal-Header'>
          <h1 style={{ fontFamily: 'NotoSans-Kr', fontWeight: '900' }}>
            서비스 이용약관
          </h1>
          <button onClick={handleClose} className='modal-closeButton'>
            {' '}
            <BsX />
          </button>
        </div>
        <div className='Modal-Body'>
          <img
            src='https://res.cloudinary.com/diimwnnmj/image/upload/v1629782306/%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%8B%E1%85%A3%E1%86%A8%E1%84%80%E1%85%AA%E1%86%AB_zhlkoa.jpg'
            alt='이용 약관'
            style={{ width: '100%' }}
          />
        </div>
      </div>
      <div className={`Usage-Modal ${privacyShow ? 'active' : 'inactive'}`}>
        <div className='Modal-Header'>
          <h1 style={{ fontFamily: 'NotoSans-Kr', fontWeight: '900' }}>
            개인정보 처리방침
          </h1>
          <button onClick={handleClose} className='modal-closeButton'>
            {' '}
            <BsX />
          </button>
        </div>
        <div className='Modal-Body'>
          <img
            src='https://res.cloudinary.com/diimwnnmj/image/upload/v1629781258/PrivacyPolicy_homwh9.jpg'
            alt='개인정보취급방침'
            style={{ width: '100%' }}
          />
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
