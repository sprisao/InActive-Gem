const categories = require('../src/datafiles/categoriesApi');

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(categories),
  };
};
