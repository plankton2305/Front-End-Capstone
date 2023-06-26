import Api from './index.js';

class Questions {

  constructor() {
    this.api = new Api('qa');
  }

  getQuestions(productId, count = 5, page = 1) {
    return this.api.get(`/questions?product_id=${productId}&count=${count}&page=${page}`);
  }

  post(productId, data) {
    return this.api.post(`/questions?product_id=${productId}`, data);
  }

}

export default new Questions();