import React from 'react';
import {FiChevronRight} from 'react-icons/fi';

import {Link} from 'react-router-dom';

import './Recommendations.css';

const Recommendations = ({recommend1, recommend2, self, emoji, firstCategory, secondCategory}) => {

    console.log(`recommend1: ${recommend1}`)
    console.log(`recommend2: ${recommend2}`)

    return (
        <section className='recommendation'>
            <div className='details__secition__header'>
                <h2>
                    {emoji} 다른 {secondCategory} {firstCategory}
                </h2>
                <Link to={`/category/${firstCategory}/${secondCategory}`}>
                    <div className='details__section__header__more'>
                        <p>더 보기</p>
                        <FiChevronRight style={{fontSize: '1.3rem'}}/>
                    </div>
                </Link>
            </div>
            {recommend1.map((item) => {
                    return (
                        <div className='recommendation__container' key={item.id}>
                            <section className='detail__grid'>
                                <Link to={`/store/${item.id}`} className=''>
                                    <article className='detail__gridCard'>
                                        <div className='imageContainer'>
                                            <img src={item.images[0].url} alt={item.name}/>
                                        </div>

                                        <div className='articleContainer'>
                                            <div className='tags'>
                                                {item.tags.map((tag) => {
                                                    return <span key={tag}>#{tag} </span>;
                                                })}
                                            </div>
                                            <div className='article__Name_Miniaddress'>
                                                <h3>{item.name}</h3>
                                                <span>{item.miniAddress}</span>
                                            </div>
                                            <p>{item.shortDescription}</p>
                                        </div>
                                    </article>
                                </Link>
                            </section>
                        </div>
                    );
                }
            )}

            <br/>
            <br/>
            <h2>✨ 이런 곳도 있어요!</h2>
            {recommend2.map((item) => {
                    return (
                        <div className='recommendation__container' key={item.id}>
                            <section className='detail__grid'>
                                <Link to={`/store/${item.id}`} className=''>
                                    <article className='detail__gridCard'>
                                        <div className='imageContainer'>
                                            <img src={item.images[0].url} alt={item.name}/>
                                        </div>

                                        <div className='articleContainer'>
                                            <div className='tags'>
                                                {item.tags.map((tag) => {
                                                    return <span key={tag}>#{tag} </span>;
                                                })}
                                            </div>
                                            <div className='article__Name_Miniaddress'>
                                                <h3>{item.name}</h3>
                                                <span>{item.miniAddress}</span>
                                            </div>
                                            <p>{item.shortDescription}</p>
                                        </div>
                                    </article>
                                </Link>
                            </section>
                        </div>
                    );
                }
            )}
        </section>
    );
};

export default Recommendations;
