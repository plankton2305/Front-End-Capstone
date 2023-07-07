const TOKEN = require('../../../config').TOKEN;

const getData = (endpoint, options = {}) => {
  const url = new URL(endpoint, 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/');

  for (const key in options) {
    url.searchParams.set(key, options[key]);
  }

  return fetch(url, {
    headers: { Authorization: TOKEN }
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((err) => console.log('Error getting data from', endpoint, err))
};

export default getData;

// if (module === undefined) {
//   var module = {};
// }

// module.exports.getData = getData;