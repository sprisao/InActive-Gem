import React from 'react';
import loading from '../components/images/loading.gif';

import './Loading.css';

const Loading = () => {
    return (
        <section className='loading'>
            <div className='loading__contents'>
                <img src={loading} alt='Loading...'/>
            </div>
        </section>
    );
};

export default Loading;
