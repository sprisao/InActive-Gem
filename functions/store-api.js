const stores = require('../src/datafiles/storesApi');

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(stores),
  };
};
