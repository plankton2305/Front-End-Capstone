import axios from 'axios';

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
    return axios.post(`${this.base}${path}`, { headers: this.headers, data: data });
  }
}

export default Api;