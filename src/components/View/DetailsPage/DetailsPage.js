import React from "react";

import DetailsNavi from "./Components/DetailsNavi";
import ImageBox from "./Components/Swiper";
import DetailsHeader from "./Components/DetailsHeader";
import Information from "./Components/Information";
import Menu from "./Components/Menu/Menu";
import Recommendation from "./Components/Recommendations";

import Separator from "../../Separator";

// Swiper 생성을 위한 Dependencies //
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
//////////////////////////////////

import "./DetailsPage.css";

import Meta from "../../../lib/meta";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const DetailsPage = ({ store }) => {
  let menu;
  const imageUrl = store.images.map((item) => item.url);
  const images = imageUrl;
  const metaData = {
    title: store.name,
    image: imageUrl,
  };
  if (store.isMenu === true) {
    console.log(store.name);
    menu = (
      <>
        <Menu store={store.name} />
        <Separator />
      </>
    );
  }
  return (
    <section className="detailsPage">
      <DetailsNavi
        categoryNumber={store.categoryNumber[0]}
        categoryTitle={store.firstCategory[0]}
        name={store.name}
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
        filter={store.firstCategory}
        filter2={store.secondCategory}
        self={store.id}
        emoji={store.secondEmoji}
        secondCategory={store.secondCategory}
        firstCategory={store.firstCategory}
      />
      <Meta data={metaData} />
    </section>
  );
};

export default DetailsPage;

// name;
// shortDescription;
// ownerMessage;
// phoneNumber;
// categoryTitle;
// secondCategory;
// mainMenu;
// tags;
// fullAddress;
// sigunGu;
// eupmyeondongRi;
// streetName;
// streetNumber;
// buildingNumber;
// openHour;
// closeHour;
// breaktimeStart;
// breaktimeEnd;
// breakDays;
// instagramAccount;
// naverLink;
// images;
// productImage;
// storeImage;
// ownerImage;
// storeVerified;
// ownerVerfied;
// createdTime;
// ourRating;
// recordId;
