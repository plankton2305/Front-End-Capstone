import axios from 'axios';
// require("dotenv").config();

class Api {

  constructor(endpoint) {
    this.base = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/${endpoint}`;
    this.headers = {
      Authorization: TOKEN//process.env.TOKEN
    };
  }

  get(path) {
    return axios.get(`${this.base}${path}`, { headers: this.headers });
  }

  post(path, data) {
    return axios.post(`${this.base}${path}`, { headers: this.headers, data: data });
  }
}

export default Api;

// const TOKEN = require('../../../config').TOKEN;
// const axios = require('axios');

// const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/';
// const header = {
//   Authorization: TOKEN
// };

// const getProducts = () => {
//   axios.get(url + '/products', {headers: header})
//     .then(res => {
//       console.log(res);
//     })
//     .catch(err => {
//       console.log('ERROR');
//     });
// };


// const getStyles = (id) => {
//   axios.get(url + `/products/${id}/styles`, {headers: header})
//     .then(res => {
//       console.log(res);
//     })
//     .catch(err => {
//       console.log('ERROR');
//     });
// };

// const getRelated = (id) => {
//   axios.get(url + `/products/${id}/related`)
//     .then(res => {
//       console.log(res);
//     })
//     .catch(err => {
//       console.log('ERROR');
//     });
// };