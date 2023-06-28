import Api from './';


class Reviews extends Api {
  constructor() {
    super('reviews');
  }

  listReviews(page = 1, count = 5, sort, id) {
    return this.get(`/reviews?page=${page}&count=${count}&sort=${sort}&product_id=${id}`);
  }

  getMetaData(id) {
    return this.get(`/meta?product_id=${id}`);
  }

  addReview(data = {}) {
    return this.post(`/reviews`, data);
  }

  markHelpful() {
    // mark helpful
  }

  report() {
    // report review
  }
}

export default new Reviews();