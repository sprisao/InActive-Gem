import React from 'react';

import DetailsShortcuts from '../../DetailsPage/Components/DetailsShortcuts';
import DetailsNavi from '../../DetailsPage/Components/DetailsNavi';
import ImageBox from '../../DetailsPage/Components/DetailsImages';
import DetailsHeader from '../../DetailsPage/Components/DetailsHeader';
import Information from '../../DetailsPage/Components/Information';

import { useHistory } from 'react-router';
import Separator from '../../../Separator';

const SpotDetails = (props) => {
  const history = useHistory();
  const spot = props.location.state.spot;
  console.log(history);
  return (
    <>
      <DetailsShortcuts
        phoneNumber={spot.phoneNumber}
        instagramAccount={spot.instagramHashTag}
        naverLink={spot.naverLink}
      />
      <section className='detailsPage'>
        <DetailsNavi
          name={spot.name}
          history={history}
          category={spot.spotCategory}
          locationCategory={spot.eupmyeondongRi}
        />
        <ImageBox img={spot.images} name={spot.name} />
        <DetailsHeader
          name={spot.name}
          id={spot.id}
          shortDescription={spot.shortDescription}
          locationCategory={spot.miniAddress}
          // bookmark={bookmarked}
          // getBookmarkClick={getBookmarkClick}
          history={history}
        />
        <Information
          openHour={spot.openHour}
          closeHour={spot.closeHour}
          breaktimeStart={spot.breaktimeStart}
          breaktimeEnd={spot.breaktimeEnd}
          breakDays={spot.breakDays}
          fullAddress={spot.fullAddress}
          phoneNumber={spot.phoneNumber}
          instagramAccount={spot.instagramAccount}
          naverLink={spot.naverLink}
        />
        <div className='spaceHolder' style={{ marginBottom: '12.5rem' }}></div>
      </section>
    </>
  );
};

export default SpotDetails;
