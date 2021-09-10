import React from 'react';

import DetailsNavi from './Components/DetailsNavi';
import ImageBox from './Components/DetailsImages';
import DetailsHeader from './Components/DetailsHeader';
import Information from './Components/Information';
import Menu from './Components/Menu/Menu';
import Recommendation from './Components/Recommendations';

import Separator from '../../Separator';

import './DetailsPage.css';
const DetailsPage = ({ store, history }) => {
  let menu;
  if (store.isMenu === true) {
    menu = (
      <>
        <Menu store={store.name} />
        <Separator />
      </>
    );
  }
  return (
    <section className='detailsPage'>
      <DetailsNavi
        name={store.name}
        history={history}
        category={store.firstCategory}
        locationCategory={store.eupmyeondongRi}
        secondCategory={store.secondCategory[0]}
      />
      <ImageBox img={store.images} name={store.name} />
      <DetailsHeader
        name={store.name}
        shortDescription={store.shortDescription}
        locationCategory={store.eupmyeondongRi}
        storeVerified={store.storeVerified}
        branch={store.branch}
      />
      <Information
        openHour={store.openHour}
        closeHour={store.closeHour}
        breaktimeStart={store.breaktimeStart}
        breaktimeEnd={store.breaktimeEnd}
        breakDays={store.breakDays}
        fullAddress={store.fullAddress}
        phoneNumber={store.phoneNumber}
        instagramAccount={store.instagramAccount}
        naverLink={store.naverLink}
      />
      <Separator />
      {menu}
      <Recommendation
        filter={store.firstCategory[0]}
        filter2={store.secondCategory[0]}
        self={store.id}
        emoji={store.secondEmoji}
        secondCategory={store.secondCategory}
        firstCategory={store.firstCategory}
      />
    </section>
  );
};

export default DetailsPage;
