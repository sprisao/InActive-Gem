import React, { useState, useEffect } from 'react';
import Airtable from 'airtable';
import './Menu.css';

const base = new Airtable({ apiKey: 'key5AMdi7ejadTzUy' }).base(
  'appDzyBPyX5MjMkrU'
);

const Menu = (props) => {
  const [menu, setMenu] = useState([]);
  const item = [];

  useEffect(() => {
    base('menu')
      .select({
        filterByFormula: `store = "${props.store}"`,
        view: 'Grid view',
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            item.push({
              id: record.id,
              ...record._rawJson.fields,
            });
          });
          fetchNextPage();
          setMenu(item);
        },
        function done(err) {
          if (err) {
            console.error(err);
            return;
          }
        }
      );
  }, []);

  return (
    <section className='menu'>
      <h2>대표 메뉴</h2>
      <div className='menu__background'>
        {menu.map((item) => {
          let englishName;
          if (item.engMenu) {
            englishName = (
              <div className='english__menu__name'>
                <p>{item.engMenu}</p>
              </div>
            );
          }
          return (
            <div className='menu__container' key={item.id}>
              <div className='image__container'>
                <img src={item.menuImage[0].url} alt={item.menu} />
              </div>
              <div className='article__container'>
                <div className='menu__name'>
                  <h4>{item.menu}</h4>
                </div>
                {englishName}
                <div className='menu__intro'>
                  <p>{item.menuDesc}</p>
                </div>
                <div className='menu__price'>
                  <span>{item.price}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Menu;
