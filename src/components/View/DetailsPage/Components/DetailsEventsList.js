import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useGlobalContext } from '../../../context';

import './DetailsEventsList.css';

const DetailsEventsList = (props) => {
  const { loading, events } = useGlobalContext();
  console.log(events);
  console.log(props.eventItems[0]);
  return (
    <div className='EventsPage__Wrapper'>
      <section className='Details-EventsList'>
        <h3 style={{ marginTop: '1rem', fontSize: '1.4rem' }}>
          진행중인 이벤트
        </h3>
        <div className='EventsWrapper'>
          {events.map((item) => {
            console.log(item.id);
            if (item.id === props.eventItems[0])
              return (
                <>
                  <div className='EventsCard' key={item.id}>
                    <img src={item.image[0].url} alt='' />
                  </div>
                  <div className='EventDetails'>
                    <div className='EventDetails-Wrapper'>
                      <div className='EventDetail'>
                        <h4>이벤트 종류</h4>
                        <div className='EventDetail-ItemWrapper'>
                          <div className='EventDetail-Item'>
                            <p>{item.type}</p>
                          </div>
                        </div>
                      </div>
                      <div className='EventDetail'>
                        <h4>이벤트 기간</h4>
                        <div className='EventDetail-ItemWrapper'>
                          <div className='EventDetail-Item'>
                            <p>{item.period}</p>
                          </div>
                        </div>
                      </div>
                      <div className='EventDetail'>
                        <h4>대상</h4>
                        <div className='EventDetail-ItemWrapper'>
                          <div className='EventDetail-Item'>
                            <p>{item.target}</p>
                          </div>
                        </div>
                      </div>
                      <div className='EventDetail'>
                        <h4>혜택</h4>
                        <div className='EventDetail-ItemWrapper'>
                          {item.benefits.map((benefit) => (
                            <div className='EventDetail-Item'>
                              <p>{benefit}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className='EventDetail'>
                        <h4>상세내용</h4>
                        <div className='EventDetail-ItemWrapper'>
                          <div className='EventDetail-Item--Details'>
                            <ReactMarkdown>{item.details}</ReactMarkdown>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
          })}
        </div>
      </section>
    </div>
  );
};

export default DetailsEventsList;
