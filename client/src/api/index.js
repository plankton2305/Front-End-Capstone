import axios from 'axios';
const TOKEN = require('../../../config1').TOKEN;

class Api {

  constructor(endpoint) {
    this.base = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/${endpoint}`;
    this.headers = {
      Authorization: TOKEN
    };
  }

  get(path) {
    return axios.get(`${this.base}${path}`, { headers: this.headers });
  }

  post(path, data) {
    return axios.post(`${this.base}${path}`, data, { headers: this.headers});
  }
}

export default Api;