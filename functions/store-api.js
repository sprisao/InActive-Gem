const Airtable = require('airtable-node');

const airtable = new Airtable({ apiKey: 'key5AMdi7ejadTzUy' })
  .base('appDzyBPyX5MjMkrU')
  .table('stores');

exports.handler = async (event, context) => {
  try {
    const { records } = await airtable.list();
    const stores = records.map((store) => {
      const { id } = store;
      const {
        name,
        shortDescription,
        ownerMessage,
        categoryTitle,
        tags,
        fullAddress,
        sigunGu,
        eupmyeondongRi,
        streetName,
        streetNumber,
        buildingNumber,
        mainMenu,
        openHour,
        closeHour,
        breaktimeStart,
        breaktimeEnd,
        breakDays,
        instagramAccount,
        naverLink,
        images,
        ownerImage,
        storeVerified,
        phoneNumber,
      } = store.fields;
      const mainImage = images[0].url;
      return {
        id,
        name,
        shortDescription,
        ownerMessage,
        categoryTitle,
        tags,
        fullAddress,
        sigunGu,
        eupmyeondongRi,
        streetName,
        streetNumber,
        buildingNumber,
        mainMenu,
        openHour,
        closeHour,
        breaktimeStart,
        breaktimeEnd,
        breakDays,
        instagramAccount,
        naverLink,
        mainImage,
        ownerImage,
        storeVerified,
        phoneNumber,
      };
    });
    return {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      statusCode: 200,
      body: JSON.stringify(stores),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: 'Server Error',
    };
  }
};
