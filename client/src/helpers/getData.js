const TOKEN = require('../../../config').TOKEN;
const axios = require('axios');

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/';
const header = {
  Authorization: TOKEN
};

const getProducts = () => {
  axios.get(url + '/products')
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log('ERROR');
    });
};


const getStyles = (id) => {
  axios.get(url + `/products/${id}/styles`)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log('ERROR');
    });
};

const getRelated = (id) => {
  axios.get(url + `/products/${id}/related`)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log('ERROR');
    });
};




// const getData = (endpoint, options = {}) => {
//   const url = new URL(endpoint, 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/');

//   for (const key in options) {
//     url.searchParams.set(key, options[key]);
//   }

//   return fetch(url, {
//     headers: { Authorization: TOKEN }
//   })
//     .then((response) => response.json())
//     .then((json) => json)
//     .catch((err) => console.log('Error getting data from', endpoint, err))
// };

// export default getData;

// if (module === undefined) {
//   var module = {};
// }

// module.exports.getData = getData;