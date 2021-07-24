import React from 'react';

import DetailsNavi from './Components/DetailsNavi';
import ImageBox from './Components/Swiper';
import DetailsHeader from './Components/DetailsHeader';
import Information from './Components/Information';
import Menu from './Components/Menu/Menu';
import Recommendation from './Components/Recommendations';

import Separator from '../../Separator';

// Swiper 생성을 위한 Dependencies //
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
//////////////////////////////////

import './DetailsPage.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

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
        tags={store.tags}
        instagramAccount={store.instagramAccount}
        storeVerified={store.storeVerified}
        naverLink={store.naverLink}
        branch={store.branch}
        phoneNumber={store.phoneNumber}
      />

      <Separator />

      <Information
        openHour={store.openHour}
        closeHour={store.closeHour}
        breaktimeStart={store.breaktimeStart}
        breaktimeEnd={store.breaktimeEnd}
        breakDays={store.breakDays}
        fullAddress={store.fullAddress}
        phoneNumber={store.phoneNumber}
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
