const stores = require('../src/datafiles/storesApi');

exports.handler = async (event, context) => {
  return {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    statusCode: 200,
    body: JSON.stringify(stores),
  };
};
